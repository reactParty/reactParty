import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import searchLogo from './layout/search1.png';

/**
 * Search component allows user to search for drink recipes.
 * @extends Component
 */
class Search extends Component {
    /** @type {Object} current state of component */ state

    /**
     * @constructor
     * @param {*} props - Costructor requires super(props).
     */
    constructor(props) {
        super(props);   // Parent-class Component requires props.

        this.state = {
            /** @type {String} */ value: "" // The user input.
        }
    }

    /**
     * Updates this.state.value to the users input when typing in searchform.
     * The search starts when the user presses enter.
     * @param {Event} event keyboard event keyup.
     */
    handleChange = (event) => {
        this.setState( { value: event.target.value } )
        if (event.keyCode === 13) {
            this.props.getDrinksFromSearch(this.state.value);
        }
    }

    /**
     * Search form fetched from Bootstrap.
     * Fetches user search input when clicking on the magnifying glass icon.
     * Changes the current state value.
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div style={divStyle}>
            
                <Form.Group style={searchContainer}>
                    <Form.Control autoFocus
                        onKeyUp={this.handleChange}
                        style={searchStyle}
                        size="lg"
                        type="text"
                        placeholder="Search.." />
                </Form.Group>

                <img
                    onClick={()=>this.props.getDrinksFromSearch(this.state.value)}
                    style={logoStyle}
                    src={searchLogo}
                    alt="logo"/>
            </div>
        )
    }
}

/** @type {Object} Style properites for div */
const divStyle = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "10px"
}

/** @type {Object} Style properites for the search container */
const searchContainer = {
  height: "50px",
  fontSize: "30px",
  boxShadow: "none",
  width: "60%",
}

/** @type {Object} Style properites for the magnifying glass icon/img */
const logoStyle = {
    height:"40px",
    marginLeft: "-55px",
    marginTop: "12px",
    cursor: "pointer"
}

/** @type {Object} Style properites for form search */
const searchStyle = {
    padding: "30px",
    borderRadius: "40px"
}

export default Search;