import React, { Component } from 'react';
import Header from './components/layout/Header';
import PickupLines from './components/PickupLines';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Utilities from './Utilities'
// import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickupLines: []
    }
  }

  componentDidMount() {
    fetch('http://pebble-pickup.herokuapp.com/tweets')
      .then(response => response.json())
      .then(data => this.setState( { pickupLines: Utilities.shuffleArray(data) } ))
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />
          <PickupLines pickupLines={this.state.pickupLines}/>
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;