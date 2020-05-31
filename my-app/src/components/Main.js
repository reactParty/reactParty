import React, { Component } from 'react';
import Logo1 from './layout/Drinks.png'; 
import Logo2 from './layout/Music.png';

class Main extends Component {
    increaseSize(event) {
        event.target.style.height = "320px"
        event.target.style.margin = "40px 75px"
        event.target.style.cursor = "pointer"
    }

    decreaseSize(event) {
        event.target.style.height = "300px"
        event.target.style.margin = "50px 85px"
        event.target.style.cursor = "none"
    }

    render() {
        const { spotifyToken, authEndpoint, clientId, redirectUri, scopes } = this.props.spotifyData;
        return (
            <main style={mainStyle}>
                <img
                    onClick={this.props.toDrinkPage}
                    src={Logo1}
                    alt="Logo"
                    style={logoStyle1}
                    onMouseOver={this.increaseSize}
                    onMouseLeave={this.decreaseSize}/>
                {!spotifyToken && (
                    <a
                        className="btn btn--loginApp-link"
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`}>
                        <img
                            src={Logo2}
                            alt="Logo"
                            style={logoStyle2}
                            onMouseOver={this.increaseSize}
                            onMouseLeave={this.decreaseSize}
                        />
                    </a>
                )}
                {spotifyToken && (
                    <img
                        onClick={this.props.toggleSpotifyPopUp}
                        src={Logo2}
                        alt="Logo"
                        style={logoStyle2}
                        onMouseOver={this.increaseSize}
                        onMouseLeave={this.decreaseSize}
                    />
                )}
            </main>
        )
    }
}

const mainStyle = {
    margin: "auto",
    textAlign: "center",
}

const logoStyle1 = {
    height: "300px",
    margin: "50px 85px",
    transition: "all 0.5s",
    cursor: "pointer"
}

const logoStyle2 = {
    height: "300px",
    margin: "50px 85px",
    transition: "all 0.5s",
    cursor: "pointer"
}


export default Main;