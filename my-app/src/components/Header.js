import React, { Component } from 'react';
import Logo from './layout/logo2.png'; 

/**
 * Header component.
 * @extends Component
 */
class Header extends Component {
    /**
     * When clicking on the header-image the user is sent to the homepage.
     * @returns {JSX.Element} header with image.
     */
    render() {
        return (
            <header style={headerStyle}>
                <img onClick={this.props.toHomePage} style={{maxHeight: "400px", objectFit: "cover"}} src={Logo} alt="logo" width="100%"/>
            </header>
        )
    }
}

/** @type {Object} Make the header image look clickable */
const headerStyle = {
    cursor: "pointer"
}

export default Header;