import React, { Component } from 'react';

/**
 * @returns JSX
 */
class Footer extends Component {
    render() {
        return (
            <footer style={footerStyle}>
                <p>© 2020 Copyright: reactParty</p>
                <ul style={listStyle}>
                    <li><h4>Created by</h4></li>
                    <li>erreCool</li>
                    <li>olaT</li>
                    <li>lukeJoensson</li>
                    <li>vigge13</li>
                </ul>
                <p style={{marginBottom: "0", paddingBottom: "10px"}}>*Please drink responsibly*</p>
            </footer>
        )
    }
}

/** Styling the footer */
const footerStyle = {
    paddingTop: "10px",
    height: "auto",
    backgroundColor: "#404040",
    textAlign: "center",
    color: "#fff",
}

/** Styling the list inside the footer */ 
const listStyle = {
    listStyle: "none",
    textAlign: "center",
    padding: "0 0 10px 0",
    marginBottom: "0"
}

export default Footer;