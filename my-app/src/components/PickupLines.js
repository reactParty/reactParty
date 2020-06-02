import React, { Component } from 'react';
import PickupLine from './PickupLine';
import { Carousel } from 'react-responsive-carousel';

class PickupLines extends Component {
    /**
     * 
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };
    }

    /**
     * Render pickuplines in React Bootstrap Carousel
     * @returns JSX 
     */
    render() {
        if (this.props.pickupLines.length === 0) return <div></div>; // Creates an empty div elememt if pickuplines is empty
        setTimeout(() => { if ( this.state.currentSlide === 0) this.setState({currentSlide: 1}) }, 1000) // Sets timer for pickupline
        return ( // Returns the Bootstrap Carousel with set attributes
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
                {this.props.pickupLines.filter(pickupLine => pickupLine.tweet != null).map( {/** Maps through pickuplines */}
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

// Styles the div containing a pickupline
const carouselItemStyle = {
    backgroundColor: "white",
    height: "66px",
    borderBottom: "5px black",
    borderBottomStyle: "double"
}

export default PickupLines;