import React, { Component } from 'react';
import Header from './components/layout/Header';
import PickupLines from './components/PickupLines';
import Main from './components/Main';
import DrinksPage from './components/DrinksPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Utilities from './Utilities'
// import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      pickupLines: []
    }
  }

  componentDidMount() {
    fetch('http://pebble-pickup.herokuapp.com/tweets')
      .then(response => response.json())
      .then(data => this.setState( { pickupLines: Utilities.shuffleArray(data) } ))
  }

  toHomePage = () => {
    this.setState( { page: "home" } )
  }

  toDrinkPage = () => {
    this.setState( { page: "drinks" } )
  }

  getMain = () => {
    switch (this.state.page) {
      case "home":
        return <Main toDrinkPage={this.toDrinkPage}/>
      case "drinks":
        return <DrinksPage />
    }

  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header toHomePage={this.toHomePage}/>
          <PickupLines pickupLines={this.state.pickupLines}/>
          {this.getMain()}
        </div>
      </div>
    );
  }
}

export default App;