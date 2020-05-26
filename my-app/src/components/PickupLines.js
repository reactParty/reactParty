import React, { Component } from 'react';

class PickupLines extends Component {    
    getPickupLines = () => {
        let pickupLinesContainer = [];

        this.props.pickupLines.forEach(
            (pickupLine) => {
                pickupLinesContainer.push(<div key={pickupLine._id} style={{backgroundColor: "#f00"}}>{pickupLine.tweet}</div>);
            }
        )
                
        return pickupLinesContainer;
    }

    render() {
        return (
            <div style={pickupLineStyle}>
                {this.getPickupLines()}
            </div>
        )
    }
}

const pickupLineStyle = {
    width: "100%"
}

export default PickupLines;