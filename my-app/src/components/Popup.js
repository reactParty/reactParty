import React, { Component } from 'react';
import closingCross from './layout/close.png'


class Popup extends Component {  
    render() {  
        return (  
            <div style={popUp}> 
            <div style={popUpInner}>  
                <img src={closingCross} alt="ClosingCross" onClick={this.props.closePopup} style={{height: "50px", padding: "8px"}}/>
                <article style={{margin: "20px", textAlign: "center"}}>
                    <h2>
                        Tjaaaaa
                    </h2>
                    <p>
                        tjeeeenaaaaaa
                    </p>
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
    bottom: "25%",  
    margin: "auto",  
    borderRadius: "20px",  
    background: "white"
}
  
export default Popup;