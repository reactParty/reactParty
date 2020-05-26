import React from 'react';
import Logo from './logo2.png'; 

function Header() {
    return (
        <header>
            <img style={{maxHeight: "400px", objectFit: "cover"}} src={Logo} alt="logo" width="100%"/>
        </header>
    )
}

export default Header;