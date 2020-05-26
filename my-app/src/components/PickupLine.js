import React, { Component } from 'react';

class PickupLine extends Component {    
    render() {
        return (
            <p>
                {this.props.pickupLine}
            </p>
        )
    }
}

// const pickupLineStyle = {
//     backgroundColor: "white"
// }

export default PickupLine;