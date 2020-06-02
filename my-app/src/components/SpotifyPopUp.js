import React, { Component } from 'react';
import closingCross from './layout/close.png'
import playbtn from './layout/playbtn.png'
import pausebtn from './layout/pausebtn.png'
import nextsongbtn from './layout/nextsongbtn.png'
import previousbtn from './layout/previousbtn.png'

class Spotifypopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: undefined
        }
    }

    componentDidMount() {
        this.setState( { intervalId: setInterval(()=>this.props.getSpotifyCurrentlyPlaying(), 1000) });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

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