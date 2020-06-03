import React, { Component } from 'react';
import closingCross from './layout/close.png'
import playbtn from './layout/playbtn.png'
import pausebtn from './layout/pausebtn.png'
import nextsongbtn from './layout/nextsongbtn.png'
import previousbtn from './layout/previousbtn.png'


/**
 * Spotify player component allowing user to manipulate their Spotify activity.
 * @extends Component
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
            <div className="row">
                <div style={spotifyPopUp} className="col-12 col-sm-12 col-md-12 col-lg-12"> 
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
                            <img onClick={()=>this.props.modifyPlayer("previous")} src={previousbtn} alt="previousbutton" style={styleBtn} />
                            <img onClick={()=>this.props.modifyPlayer("pause")} src={pausebtn} alt="pausebutton" style={styleBtn}  />
                            <img onClick={()=>this.props.modifyPlayer("play")} src={playbtn} alt="playbutton" style={styleBtn} />
                            <img onClick={()=>this.props.modifyPlayer("next")}src={nextsongbtn} alt="nextsongbutton" style={styleBtn} />
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

const styleBtn = {
    maxWidth: "15%",
    height: "auto",
    margin: "15px",
    cursor: "pointer",
    padding: "5px"
}

/** @type {Object} Style properites for the outer div, aka the outlines of the popup box */ 
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

/** @type {Object} Style properites for the inner div, aka the inside of the box */
const SpotifyPopUpInner = {
    position: "absolute",  
    left: "15%",  
    right: "15%",  
    top: "15%",   
    margin: "15px auto auto auto",
    borderRadius: "20px",  
    background: "white"
}

/** @type {Object} Style properites for the Spotify buttons */
const Spotifybtn = {
    display: "flex",
    justifyContent: "center",
    margin: "50px",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "30px",
    backgroundColor: "#dbdbdb"
}

export default Spotifypopup 