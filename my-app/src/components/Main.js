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
        return (
            <main style={mainStyle}>
                <img
                    onClick={this.props.toDrinkPage}
                    src={Logo1}
                    alt="Logo"
                    style={logoStyle1}
                    onMouseOver={this.increaseSize}
                    onMouseLeave={this.decreaseSize}/>
                <img
                    src={Logo2}
                    alt="Logo"
                    style={logoStyle2}
                    onMouseOver={this.increaseSize}
                    onMouseLeave={this.decreaseSize}/>
            </main>
        )
    }
}

const mainStyle = {
    backgroundColor: "#fee",
    margin: "auto",
    textAlign: "center",
}

const logoStyle1 = {
    height: "300px",
    margin: "50px 85px",
    transition: "all 0.5s"
}

const logoStyle2 = {
    height: "300px",
    margin: "50px 85px",
    transition: "all 0.5s"
}

export default Main;