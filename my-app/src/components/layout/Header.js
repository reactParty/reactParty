import React from 'react';
import Logo from './logo.png'; 

function Header() {
    return (
        <header style={headerStyle}>
    
        </header>
    )
}

const headerStyle = {
    height: "400px",
    backgroundImage: "url(" + Logo + ")"
}

export default Header;