import React, { Component } from 'react';
import PickupLine from './PickupLine';
import { Carousel } from 'react-responsive-carousel';

class PickupLines extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0
        };
    }

    render() {
        if (this.props.pickupLines.length === 0) return <div></div>;
        setTimeout(() => { if ( this.state.currentSlide === 0) this.setState({currentSlide: 1}) }, 1000)
        return (
            <Carousel
                showArrows={false}
                selectedItem={this.state.currentSlide}
                infiniteLoop={true}
                autoPlay={true}
                stopOnHover={false}
                showIndicators={false}
                showStatus={false}
                transitionTime={10000}
                interval={10000}
                showThumbs={false}>
                {this.props.pickupLines.filter(pickupLine => pickupLine.tweet != null).map(
                    (pickupLine, i) => {
                        return (
                            <div key={"pickupLineparent" + i} style={carouselItemStyle}>
                                <PickupLine key={"slide" + i} pickupLine={pickupLine.tweet}/>
                            </div>
                        )
                    })
                }
            </Carousel>
        );
    }
}

const carouselItemStyle = {
    backgroundColor: "white",
    height: "66px",
    borderBottom: "5px black",
    borderBottomStyle: "double"
}

// const pickupLineStyle = {
//     width: "100%"
// }

export default PickupLines;