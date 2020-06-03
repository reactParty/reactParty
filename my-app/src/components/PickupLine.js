import React, { Component } from 'react';

/**
 * Pickupline component displays a pickupline.
 * @extends Component
 */
class PickupLine extends Component {    
    render() {
        return (
            <p style={pStyle}>
                {this.props.pickupLine}
            </p>
        )
    }
}

/** @type {Object} Styling of pickupline paragraph */
const pStyle = {
    margin: "0px",
    height: "66px",
    width: "100%",
    padding: "20px",
    fontSize: "25px",
}

export default PickupLine;