import React, { Component } from 'react';
import closingCross from './layout/close.png'
import dancingPinapple from './layout/dancing.png'

/**
 * Information popup component.
 * @extends Component
 */
class Popup extends Component {
    /**
     * This function runs when klicking on the info-icon.
     * An info-box shows up and tells what the user can do on the page
     * @returns JSX
     */
    render() {  
        return (  
            <div style={popUp}> 
            <div style={popUpInner}>  
                <img src={closingCross} alt="ClosingCross" onClick={this.props.closePopup} style={{height: "50px", padding: "8px", cursor: "pointer"}}/>
                <article style={{margin: "0 20px 20px 20px", textAlign: "center"}}>
                    <h2>
                        Hi, welcome to reactParty!
                    </h2>
                    <p>
                        This app opens up the oppertunity for you and your friends to have the perfect cocktail night. 
                    </p>
                    <p style={pStyle}>    
                        Don't know what to mix?
                    </p>
                    <p>    
                        No problem - just klick on the drink icon and search for whatever liqour
                        you have availible at home. 
                    </p>
                    <p style={pStyle}>    
                        Don't have time to make the drinks right away? 
                    </p>
                    <p>    
                        Save your favorite cocktails to your personal drink folder and make them whenever you've got time.
                    </p>
                    <p style={pStyle}>   
                        Need some good tunes as well? 
                    </p>
                    <p>
                        We got that covered! The Spotify icon will start some good 
                        party music for ya'll!
                    </p>
                    <h5 style={h5Style}>
                        Have fun and drink responsibly!
                    </h5>
                    <img src={dancingPinapple} alt="dancing Pineapple" style={{height: "100px", padding: "8px"}}/>
                </article>
            </div>  
            </div>  
            );  
        }  
    }  

/** @type {Object} Styling for the pop up box */ 
const popUp = {
    position: "fixed",  
    width: "100%",  
    height: "100%",  
    top: "0",  
    left: "0",  
    right: "0",  
    bottom: "0",  
    margin: "auto",  
    backgroundColor:"rgba(0,0,0, 0.5)",
    overflowX: "scroll"
}

/** @type {Object} Styling for the content inside pop up box */
const popUpInner = {
    position: "absolute",  
    left: "25%",  
    right: "25%",  
    top: "15%",   
    margin: "auto",
    borderRadius: "20px",  
    background: "white"
}

/** @type {Object} Style for the font in pop up box */ 
const pStyle = {
    fontStyle: "italic"
}

/** @type {Object} Styling h5 element inside pop up box */
const h5Style = {
    fontWeight: "bold",
    color: "black",
}
  
export default Popup;