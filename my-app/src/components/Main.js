import React, { Component } from 'react';
import Logo1 from './layout/Drinks.png'; 
import Logo2 from './layout/Music.png';

/**
 * Main/home page component with options like "search for drinks" and "open spotify player".
 * @extends Component
 */
class Main extends Component {
    /**
     * The size of element is increasing when hover
     * @param {Event} event 
     */
    increaseSize(event) {
        event.target.style.height = "320px";
        event.target.style.margin = "40px 75px";
        event.target.style.cursor = "pointer";
    }

    /**
     * The size of element is decreasing when hover
     * @param {Event} event 
     */
    decreaseSize(event) {
        event.target.style.height = "300px";
        event.target.style.margin = "50px 85px";
        event.target.style.cursor = "none";
    }

    render() {
        /**
         * Shows the logo and link to spotify and to drinkpage. 
         * @returns JSX
         */
        const { spotifyToken, authEndpoint, clientId, redirectUri, scopes } = this.props.spotifyData;
        return (
            <main style={mainStyle}>
                <img
                    onClick={this.props.toDrinkPage}            // When clicking on objekt the user is sent to the drink page.
                    src={Logo1}
                    alt="Logo"
                    style={logoStyle1}
                    onMouseOver={this.increaseSize}             // On hover - the increaseSize method is called.
                    onMouseLeave={this.decreaseSize}            // Leaving hover - the decreaseSize method is called, and the logo goes back to normal size.
                    />
                {!spotifyToken && (
                    <a
                        className="btn btn--loginApp-link"
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`}>
                        <img
                            src={Logo2}
                            alt="Logo"
                            style={logoStyle2}
                            onMouseOver={this.increaseSize}     // On hover - the increaseSize method is called.
                            onMouseLeave={this.decreaseSize}    // Leaving hover - the decreaseSize method is called, and the logo goes back to normal size.
                        />
                    </a>
                )}
                {spotifyToken && (
                    <img
                        onClick={this.props.toggleSpotifyPopUp} 
                        src={Logo2}
                        alt="Logo"
                        style={logoStyle2}
                        onMouseOver={this.increaseSize}         // On hover - the increaseSize method is called.
                        onMouseLeave={this.decreaseSize}        // Leaving hover - the decreaseSize method is called, and the logo goes back to normal size.
                    />
                )}
            </main>
        )
    }
}

/** @type {Object} Styling the main */ 
const mainStyle = {
    margin: "auto",
    textAlign: "center",
}

/** @type {Object} Styling the drink logo */ 
const logoStyle1 = {
    height: "300px",
    margin: "50px 85px",
    transition: "all 0.5s",
    cursor: "pointer"
}

/** @type {Object} Styling the spotify logo */
const logoStyle2 = {
    height: "300px",
    margin: "50px 85px",
    transition: "all 0.5s",
    cursor: "pointer"
}


export default Main;