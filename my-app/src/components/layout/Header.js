import React from 'react';
import Logo from './logo2.png'; 

function Header() {
    return (
        <header style={headerStyle}>
            <h1>reactParty</h1>
    
        </header>
    )
}

const headerStyle = {
    height: "200px",
    backgroundColor: "#9e2e50",
    textAlign: "center",
    margin: "auto",
    color: "white",
    fontFamily: 'Monoton'
}

export default Header;