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
    padding: "20px",
    backgroundColor: "#fee",
    fontSize: "25px",
}

export default PickupLine;