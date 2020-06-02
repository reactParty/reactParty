import React, { Component } from 'react';
import Logo from './logo2.png'; 

/**
 * @class
 */
class Header extends Component {
    /**
     * @returns IMG
     */
    render() {
        return (
            // When clicking on the header image the user is sent to the homepage
            <header style={headerStyle}>
                <img onClick={this.props.toHomePage} style={{maxHeight: "400px", objectFit: "cover"}} src={Logo} alt="logo" width="100%"/>
            </header>
        )
    }
}

const headerStyle = {
    // Make the header image clickable
    cursor: "pointer"
}

export default Header;