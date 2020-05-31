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
                <div style={Spotifybtn}>
                    <img onClick={()=>this.props.modifyPlayer("previous")} src={previousbtn} alt="previousbutton" style={{height: "80px", marginRight: "30px", cursor: "pointer"}} />
                    <img onClick={()=>this.props.modifyPlayer("pause")} src={pausebtn} alt="pausebutton" style={{height: "80px", marginRight: "30px", cursor: "pointer"}}  />
                    <img onClick={()=>this.props.modifyPlayer("play")} src={playbtn} alt="playbutton" style={{height: "80px", cursor: "pointer"}} />
                    <img onClick={()=>this.props.modifyPlayer("next")}src={nextsongbtn} alt="nextsongbutton" style={{height: "80px", marginLeft: "30px", cursor: "pointer"}} />
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