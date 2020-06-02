import React, { Component } from 'react';
import closingCross from './layout/close.png'
import playbtn from './layout/playbtn.png'
import pausebtn from './layout/pausebtn.png'
import nextsongbtn from './layout/nextsongbtn.png'
import previousbtn from './layout/previousbtn.png'


    /**
     * @class
     */
class Spotifypopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: undefined
        }
    }

    /**
     * When the Spotify compenent opens
     * Starts a loop which fetches the artis name and title of the song every second
     */
    componentDidMount() {
        this.setState( { intervalId: setInterval(()=>this.props.getSpotifyCurrentlyPlaying(), 1000) });
    }

    /**
     * When the Spotify compenent closes
     * Breaks the loop
     */
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    /**
     * Opens and closes the popup window when clicking on the Spotify icon
     * Displays artist and title of the song currently playing
     * Allows user to play music
     * Allows user to pauses music
     * Allows user to play next song
     * Allows user to play previous song
     * @returns JSX
     */
    render() {
        return(
            <div style={spotifyPopUp}> 
            <div style={SpotifyPopUpInner}> 
                <img src={closingCross} alt="ClosingCross" onClick={this.props.closeSpotifyPopUp} style={{height: "50px", padding: "8px", cursor: "pointer"}}/>
                
                    {this.props.spotifyCurrentlyPlaying && (
                        
                        <p style={{fontSize: "20px", fontWeight: "bold", textAlign: "center", color: (typeof this.props.spotifyCurrentlyPlaying !== "string") ? "black" : "red"}}>
                            {(typeof this.props.spotifyCurrentlyPlaying !== "string") ?
                                this.props.spotifyCurrentlyPlaying.artists.map((artist)=>artist.name).join(", ") + " - " + this.props.spotifyCurrentlyPlaying.name :
                                this.props.spotifyCurrentlyPlaying
                            }
                        </p>
                    )}
                <div style={Spotifybtn}>
                    <img onClick={()=>this.props.modifyPlayer("previous")} src={previousbtn} alt="previousbutton" style={{maxWidth: "15%", height: "auto", marginRight: "6%", cursor: "pointer"}} />
                    <img onClick={()=>this.props.modifyPlayer("pause")} src={pausebtn} alt="pausebutton" style={{maxWidth: "15%", height: "auto", marginRight: "6%", cursor: "pointer"}}  />
                    <img onClick={()=>this.props.modifyPlayer("play")} src={playbtn} alt="playbutton" style={{maxWidth: "15%", height: "auto", cursor: "pointer"}} />
                    <img onClick={()=>this.props.modifyPlayer("next")}src={nextsongbtn} alt="nextsongbutton" style={{maxWidth: "15%", height: "auto", marginLeft: "6%", cursor: "pointer"}} />
                </div>
            </div>
            </div> 
        );
    }
}

// Style properites for the outer div, aka the outlines of the popup box 
const spotifyPopUp = {
    position: "fixed",  
    width: "100%",  
    height: "100%",  
    top: "0",  
    left: "0",  
    right: "0",  
    bottom: "0",  
    margin: "auto",  
    backgroundColor:"rgba(0,0,0, 0.5)"
}

// Style properites for the inner div, aka the inside of the box
const SpotifyPopUpInner = {
    position: "absolute",  
    left: "25%",  
    right: "25%",  
    top: "15%",   
    margin: "auto",
    borderRadius: "20px",  
    background: "white"
}

// Style properites for the Spotify buttons
const Spotifybtn = {
    display: "flex",
    justifyContent: "center",
    margin: "50px",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#dbdbdb"
}

export default Spotifypopup 