import React, { Component } from 'react';

class PickupLine extends Component {    
    render() {
        return (
            <p style={pStyle}>
                {this.props.pickupLine}
            </p>
        )
    }
}

const pStyle = {
    margin: "0px",
    height: "66px",
    width: "100%",
    position: "absolute",
    top: "30%"
}

export default PickupLine;