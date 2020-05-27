import React, { Component } from 'react';
import Logo from './logo2.png'; 

class Header extends Component {
    render() {
        return (
            <header>
                <img onClick={this.props.toHomePage} style={{maxHeight: "400px", objectFit: "cover"}} src={Logo} alt="logo" width="100%"/>
            </header>
        )
    }
}

export default Header;