import React from 'react';
import Logo from './logo2.png'; 

function Header() {
    return (
        <header style={headerStyle}>
    
        </header>
    )
}

const headerStyle = {
    height: "400px",
    width: "100%",
    backgroundImage: "url(" + Logo + ")",
    backgroundpostion: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

export default Header;