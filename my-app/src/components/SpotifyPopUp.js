import React, { Component } from 'react';
import closingCross from './layout/close.png'
import playbtn from './layout/playbtn.png'
import pausebtn from './layout/pausebtn.png'
import nextsongbtn from './layout/nextsongbtn.png'
import previousbtn from './layout/previousbtn.png'

class Spotifypopup extends Component {
    render() {
        return(
            <div style={spotifyPopUp}> 
            <div style={SpotifyPopUpInner}> 
                <img src={closingCross} alt="ClosingCross" onClick={this.props.closeSpotifyPopUp} style={{height: "50px", padding: "8px", cursor: "pointer"}}/>
                <div>
                <img src={previousbtn} alt="previousbutton" />
                <img src={playbtn} alt="playbutton" />
                <img src={pausebtn} alt="pausebutton" />
                <img src={nextsongbtn} alt="nextsongbutton" />

                </div>
            </div>
            </div> 
        );
    }
}

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

const SpotifyPopUpInner = {
    position: "absolute",  
    left: "25%",  
    right: "25%",  
    top: "15%",   
    margin: "auto",
    borderRadius: "20px",  
    background: "white"
}

export default Spotifypopup 