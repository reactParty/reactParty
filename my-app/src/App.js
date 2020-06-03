import React, { Component } from 'react';
import { clientId } from './ignore';
import Header from './components/Header';
import PickupLines from './components/PickupLines';
import Main from './components/Main';
import Footer from './components/Footer';
import DrinksPage from './components/DrinksPage';
import StoredDrinks from "./components/StoredDrinks";
import Popup from './components/Popup';
import SpotifyPopUp from './components/SpotifyPopUp';
import info from './components/layout/info.png';
import savedDrinksLogo from './components/layout/saveddrinks.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Utilities from './Utilities'

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

/**
 * Main controlling component. Takes care of API calls.
 * @extends Component
 * */
class App extends Component {
  /** @type {Object} current state of component */ state

  /**
   * @param {*} props - Required for super().
   * @constructor
   */
  constructor(props) {
    super(props); // Parent-class Component requires props.

    this.state = {
      /** @type {String} */         page: "home",
      /** @type {Array<Object>} */  pickupLines: [],
      /** @type {Array<Object>} */  recipesSearchResult: [],
      /** @type {Boolean} */        showPopup : false,
      /** @type {String} */         spotifyToken: undefined,
      /** @type {Object} */         spotifyCurrentlyPlaying: undefined,
      /** @type {Boolean} */        showSpotifyPopUp : false,
      /** @type {Array<Object>} */  storedRecipes: this.getLocalStorageDrinks(),
      /** @type {Boolean} */        resetViewRecipe: false
    }
  }

  /**
   * Gets locally stored drinks if exists, else creates empty storage.
   * @returns {Array<Object>} Locally stored drink-objects or empty array.
   */
  getLocalStorageDrinks = () => {
    if (localStorage.getItem("recipes")) {
      return JSON.parse(localStorage.getItem("recipes"));
    } else {
      localStorage.setItem("recipes", JSON.stringify([]));
      return [];
    }
  }

  /** Syncs localStorage with currently stored drink-recipes in state. */
  updateLocalStorage = () => {
    localStorage.setItem("recipes", JSON.stringify(this.state.storedRecipes));
  }

  /**
   * Adds drink to state and updates localStorage accordingly.
   * @param {Object} drink
   * */
  addDrink = (drink) => {
    this.setState( { storedRecipes: [...this.state.storedRecipes, drink] }, this.updateLocalStorage );
  }

  /**
   * Removes drink from state and updates localStorage accordingly.
   * @param {String} drinkId
   * */
  removeDrink = (drinkId) => {
    this.setState( { storedRecipes: [...this.state.storedRecipes].filter((drink)=>drink.idDrink !== drinkId) }, this.updateLocalStorage );
  }

  /** Toggles application information popup. */
  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });
  }

  /** Toggles Spotify popup. */
  toggleSpotifyPopup = () => {
    this.setState({
      showSpotifyPopUp: !this.state.showSpotifyPopUp
    });
    this.getSpotifyCurrentlyPlaying();
  }

  /**
   * Logs API fetch error
   * @param {Error} e
   * */
  handleCatch(e) {
    console.error(e)
  }

  /** 
   * Informs user that something went wrong when connecting to Spotify if API fetch catches an error
   * @param {Error} e
   * */
  handleSpotifyCatch = (e) => {
    this.setState( { spotifyCurrentlyPlaying: "Something went wrong! Perhaps you're not active on your Spotify-account!" } )
    console.error(e);
  }

  /** Called immediately after component is mounted to set token for spotify and fetch pickup-lines from API. */
  componentDidMount() {
    let _token = hash.access_token; // Set token for spotify
    if (_token) {
      this.setState({               // Set token for spotify
        spotifyToken: _token
      });
    }
    fetch('http://pebble-pickup.herokuapp.com/tweets')
      .then(response => response.json())
      .then(data => this.setState( { pickupLines: Utilities.shuffleArray(data) } ))
      .catch(this.handleCatch)
  }

  /** Updates state with user's currently playing song on spotify */
  getSpotifyCurrentlyPlaying = () => {
    fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + this.state.spotifyToken
      })
    }).then(response=>response.json())
      .then(currentlyPlayingData=>this.setState( { spotifyCurrentlyPlaying: currentlyPlayingData.item } ))
      .catch(this.handleSpotifyCatch)
  }

  /**
   * Makes a POST or PUT (depending on action) call to spotify-player API then starts procedure to get currently playing song.
   * @param {"play" | "pause" | "next" | "previous"} action the end of the API-uri fetch call.
   * */
  modifyPlayer=(action) => {
    if (action == null || !["play", "pause", "next", "previous"].includes(action)) return;
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
    }).then(()=>this.getSpotifyCurrentlyPlaying())
      .catch(this.handleSpotifyCatch)
  }

  /**
   * Makes a search request to the drinks API then updates state with results.
   * @param {String} search the user input.
   * @param {DrinksPage} drinkPage DrinksPage component needed to reset its viewRecipe state.
   * */
  getDrinksFromSearch = (search, drinkPage) => {
    drinkPage.setState( { viewRecipe: null } )
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search)
      .then(response => response.json())
      .then(data => this.setState( { recipesSearchResult: data.drinks } ))
      .catch(this.handleCatch)
  }

  /** Sets page to home */
  toHomePage = () => {
    this.setState( { page: "home" } )
  }

  /** Sets page to drinks */
  toDrinkPage = () => {
    this.setState( { page: "drinks" } )
  }

  /**
   * Tests for page and returns accordingly with required props.
   * @returns {JSX.Element} <DrinksPage /> Search for drinks | <StoredDrinks /> Locally saved drinks | <Main /> The home page.
   */
  getMain = () => {
    switch (this.state.page) {
      case "drinks":
        return <DrinksPage addDrink={this.addDrink} removeDrink={this.removeDrink} storedDrinks={this.state.storedRecipes} searchResults={this.state.recipesSearchResult} getDrinksFromSearch={this.getDrinksFromSearch} />
      case "savedDrinks":
        return <StoredDrinks reResetViewRecipe={this.reResetViewRecipe} resetViewRecipe={this.state.resetViewRecipe} addDrink={this.addDrink} removeDrink={this.removeDrink} drinks={this.state.storedRecipes} />
      default:
        return (
          <div>
            <Main spotifyData={{spotifyToken: this.state.spotifyToken, authEndpoint: authEndpoint, clientId: clientId, redirectUri: redirectUri, scopes: scopes.join("%20")}} toggleSpotifyPopUp={this.toggleSpotifyPopup} toDrinkPage={this.toDrinkPage}/>
          </div>
        )
    }
  }

  /** Resets view recipe state */
  reResetViewRecipe = () => {
    this.setState( { resetViewRecipe: false } );
  }

  /**
   * @returns {JSX.Element} The whole application. Tests for and shows popups (information and spotify).
   */
  render() {
    return (
      <div className="App">
        <div className="container-fluid" >
          <Header toHomePage={this.toHomePage}/>
          <PickupLines pickupLines={this.state.pickupLines}/>
          <div style={{height: "100px"}}>
            <img src={info} alt="info" onClick={this.togglePopup.bind(this)} style={{height: "50px", margin: "10px 0 0 3px", cursor: "pointer"}}/>
            <img src={savedDrinksLogo} alt="log for saved drinks" onClick={()=>this.setState( { page: "savedDrinks", resetViewRecipe: true } )} style={{height: "80px", margin: "10px 50px 0 0", float: "right", cursor: "pointer"}}/>
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
              spotifyCurrentlyPlaying={this.state.spotifyCurrentlyPlaying}
              getSpotifyCurrentlyPlaying={this.getSpotifyCurrentlyPlaying}
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