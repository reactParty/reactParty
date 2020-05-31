import React, { Component } from 'react';
// import hash from "./hash";
import { clientId } from './ignore';
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

// spotify endpoint
const authEndpoint = 'https://accounts.spotify.com/authorize';

// declaring redirect and scopes for spotify
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state"
];

// Get the hash of the url for spotify
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      pickupLines: [],
      recipesSearchResult: [],
      showPopup : false,
      spotifyToken: undefined,
      spotifyCurrentlyPlaying: undefined,
      showSpotifyPopUp : false,
      storedRecipes: this.getLocalStorageDrinks()
    }
  }

  getLocalStorageDrinks = () => {
    if (localStorage.getItem("recipes")) {
      return JSON.parse(localStorage.getItem("recipes"));
    } else {
      localStorage.setItem("recipes", JSON.stringify([]));
      return [];
    }
  }

  updateLocalStorage = () => {
    localStorage.setItem("recipes", JSON.stringify(this.state.storedRecipes));
  }

  addDrink = (drink) => {
    this.setState( { storedRecipes: [...this.state.storedRecipes].push(drink) } );
    this.updateLocalStorage();
  }

  removeDrink = (drink) => {
    this.setState( { storedRecipes: Utilities.removeFromArray([...this.state.storedRecipes], drink) } );
    this.updateLocalStorage();
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
    // Set token for spotify
    let _token = hash.access_token;
    if (_token) {
      // Set token for spotify
      this.setState({
        spotifyToken: _token
      });
    }
    fetch('http://pebble-pickup.herokuapp.com/tweets')
      .then(response => response.json())
      .then(data => this.setState( { pickupLines: Utilities.shuffleArray(data) } ))
  }

  // Spotify methods
  getCurrentlyPlaying() {
    fetch("https://api.spotify.com/v1/me/player", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + this.state.spotifyToken
      })
    }).then((response)=>{
      if (response.status !== 204) {
        response.json()
      } else {
        alert("Du är inte aktiv på ditt spotify-konto!")
      }
    })
  }

  getSpotifyCurrentlyPlaying() {
    fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + this.state.spotifyToken
      })
    }).then((response)=>response.json())
      .then((currentlyPlayingData) => {this.setState( { spotifyCurrentlyPlaying: currentlyPlayingData.item.name } ); console.log(currentlyPlayingData.item.name)})
  }

  modifyPlayer=(action) => {
    // behövs catch error och guard för status != 200 samt 204 => ej aktiv på sitt spotify-konto.
    if (action == null) return;
    let method;
    if (action === "next" || action === "previous") {
      method = "POST";
    } else if (action === "play" || action === "pause") {
      method = "PUT";
    }

    fetch("https://api.spotify.com/v1/me/player/" + action, {
      method: method,
      headers: new Headers({
        Authorization: "Bearer " + this.state.spotifyToken
      })
    })
  }

  getDrinksFromSearch = (search, drinkPage) => {
    // behövs catch error
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
        return (
          <div>
            <Main spotifyData={{spotifyToken: this.state.spotifyToken, authEndpoint: authEndpoint, clientId: clientId, redirectUri: redirectUri, scopes: scopes.join("%20")}} toggleSpotifyPopUp={this.toggleSpotifyPopup} toDrinkPage={this.toDrinkPage}/>
          </div>
        )
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
              modifyPlayer={this.modifyPlayer}    
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