import React, { Component } from 'react';
import PickupLine from './PickupLine';
import { Carousel } from 'react-responsive-carousel';

class PickupLines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showIndex: 0,
            pickupLine: this.props.pickupLines
        }
    }

    getPickupLine(pickupLine, i) {
        if (pickupLine.tweet == null) return;
        return <PickupLine key={"slide" + i} pickupLine={pickupLine.tweet}/>
    }

    getCarousel() {
        if (this.props.pickupLines.length === 0) return <div></div>;
        let i = 0;
        return (
            <Carousel showArrows={false} infiniteLoop autoPlay showIndicators={false} showStatus={false} transitionTime={10000} interval={10000}>
                {this.props.pickupLines.map((pickupLine)=> {
                    i++;
                    return (
                        <div style={carouselItemStyle}>
                            {this.getPickupLine(pickupLine, i)}
                        </div>
                    )
                })}
            </Carousel>
        )
    }

    render() {
        return this.getCarousel();
    }
}

const carouselItemStyle = {
    backgroundColor: "white",
    height: "66px"
}

// const pickupLineStyle = {
//     width: "100%"
// }

export default PickupLines;