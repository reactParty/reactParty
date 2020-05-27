import React, { Component } from 'react';
import closingCross from './layout/close.png'


class Popup extends Component {  
    render() {  
        return (  
            <div style={popUp}> 
            <div style={popUpInner}>  
                <img src={closingCross} alt="ClosingCross" onClick={this.props.closePopup} style={{height: "50px", padding: "8px"}}/>
                <article style={{margin: "0 20px 20px 20px", textAlign: "center"}}>
                    <h2>
                        Hi, welcome to reactParty!
                    </h2>
                    <p>
                        This app opens up the oppertunity for you and your friends to have the perfect cocktail night. 
                    </p>
                    <p>    
                        Don't know what to mix?
                    </p>
                    <p>    
                        No problem - just klick on the drink icon and search for whatever liqour
                        you have availible at home. 
                    </p>
                    <p>    
                        Don't have time to make the drinks right away? 
                    </p>
                    <p>    
                        Save your favorite cocktails to your personal home and make them whenever you've got time.
                    </p>
                    <p>    
                        Need some good tunes as well? We got that covered! The Spotify icon will start some good 
                        party music for ya'll!
                    </p>
                    <h5 style={h5Style}>
                        Have fun and drink responsibly.
                    </h5>
                </article>
            </div>  
            </div>  
            );  
        }  
    }  

const popUp = {
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

const popUpInner = {
    position: "absolute",  
    left: "25%",  
    right: "25%",  
    top: "25%",   
    margin: "auto",
    borderRadius: "20px",  
    background: "white"
}

const h5Style = {
    textDecoration: "underline black",
    fontWeight: "bold",
    color: "black"
}
  
export default Popup;