import React, { Component } from 'react';
import Header from './components/layout/Header';
import PickupLines from './components/PickupLines';
import Main from './components/Main';
import Footer from './components/Footer';
import DrinksPage from './components/DrinksPage';
import Popup from './components/Popup';
import info from './components/layout/info.png';
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
      pickupLines: [],
      recipesSearchResult: [],
      showPopup : false 
    }
  }

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });
  }

  componentDidMount() {
    fetch('http://pebble-pickup.herokuapp.com/tweets')
      .then(response => response.json())
      .then(data => this.setState( { pickupLines: Utilities.shuffleArray(data) } ))
  }

  getDrinksFromSearch = (search, nonAlcoholic) => {
    let qNonAlcoholic = (nonAlcoholic) ? "Alcoholic" : "Non_Alcoholic";
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search + "&a=" + qNonAlcoholic)
      .then(response => response.json())
      .then(data => this.setState( { recipesSearchResult: data.drinks } ))
  }

  toHomePage = () => {
    this.setState( { page: "home" } )
  }

  toDrinkPage = () => {
    this.setState( { page: "drinks" } )
  }

  getMain = () => {
    switch (this.state.page) {
      case "drinks":
        return <DrinksPage searchResults={this.state.recipesSearchResult} getDrinksFromSearch={this.getDrinksFromSearch} />
      default:
        return <Main toDrinkPage={this.toDrinkPage}/>
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid" >
          <Header toHomePage={this.toHomePage}/>
          <PickupLines pickupLines={this.state.pickupLines}/>
          <div>
          <img src={info} alt="info" onClick={this.togglePopup.bind(this)} style={{height: "50px", margin: "10px 0 0 10px"}}/> 
          </div> 
          {this.getMain()}
          <Footer />
          {this.state.showPopup ?  
            <Popup    
              closePopup={this.togglePopup.bind(this)}  
            />  
            : null  
            }             
        </div>
      </div>
    );
  }
}

export default App;