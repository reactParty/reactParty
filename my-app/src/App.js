import React, { Component } from 'react';
import Header from './components/layout/Header';
import PickupLines from './components/PickupLines';
import Main from './components/Main';
import Footer from './components/Footer';
import DrinksPage from './components/DrinksPage';
import Popup from './components/Popup';
import SpotifyPopUp from './components/SpotifyPopUp';
import info from './components/layout/info.png';
import savedDrinksLogo from './components/layout/saveddrinks.png';
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
      showPopup : false, 
      showSpotifyPopUp : false
    }
  }

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });
  }

  toggleSpotifyPopup = () => {
    console.log("toggle")
    this.setState({
      showSpotifyPopUp: !this.state.showSpotifyPopUp
    });
  }

  componentDidMount() {
    fetch('http://pebble-pickup.herokuapp.com/tweets')
      .then(response => response.json())
      .then(data => this.setState( { pickupLines: Utilities.shuffleArray(data) } ))
  }

  getDrinksFromSearch = (search, drinkPage) => {
    drinkPage.setState( { viewRecipe: null } )
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search)
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
        return <Main toggleSpotifyPopUp={this.toggleSpotifyPopup} toDrinkPage={this.toDrinkPage}/>
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid" >
          <Header toHomePage={this.toHomePage}/>
          <PickupLines pickupLines={this.state.pickupLines}/>
          <div style={{height: "100px"}}>
            <img src={info} alt="info" onClick={this.togglePopup.bind(this)} style={{height: "50px", margin: "10px 0 0 3px", cursor: "pointer"}}/>
            <img src={savedDrinksLogo} alt="log for saved drinks" onClick={()=>this.setState( { page: "home" } )} style={{height: "80px", margin: "10px 50px 0 0", float: "right", cursor: "pointer"}}/>
          </div> 
          {this.getMain()}
          <Footer />
          {this.state.showPopup ?  
            <Popup    
              closePopup={this.togglePopup.bind(this)}  
            />  
            : null  
            }
            {this.state.showSpotifyPopUp ?  
            <SpotifyPopUp    
              closeSpotifyPopUp={this.toggleSpotifyPopup}  
            />  
            : null  
            }             
        </div>
      </div>
    );
  }
}

export default App;