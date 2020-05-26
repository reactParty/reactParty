import React from 'react';
import Logo from './danicng.png'; 

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={h1Style}>react</h1>
            <img src={Logo} alt="Logo" style={logoStyle}/>
            <h1 style={h1PartyStyle}>Party</h1>
    
        </header>
    )
}

const h1PartyStyle = {
    fontFamily: "Monoton",
    color: "white",
    display: "inline-block",
    fontFont: "120px"

}

const h1Style = {
    display: "inline-block",
    color: "white",
    fontFamily: 'Monoton',
    fontSize: "100px",
    paddingTop: "30px",
    
}

const headerStyle = {
    height: "200px",
    backgroundColor: "#9e2e50",
    textAlign: "center",
    margin: "auto",
}

const logoStyle ={
    height: "80px"
}

export default Header;