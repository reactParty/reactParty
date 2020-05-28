import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import searchLogo from './layout/search1.png';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState( { value: event.target.value } )
        if (event.keyCode === 13) {
            this.props.getDrinksFromSearch(this.state.value);
        }
    }

    render() {
        return (
            <div style={divStyle}>
            
                <Form.Group style={searchContainer}>
                    <Form.Control
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

const divStyle = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "10px"
}

const searchContainer = {
  height: "50px",
  fontSize: "30px",
  boxShadow: "none",
  width: "60%",
}

const logoStyle = {
    height:"40px",
    marginLeft: "-55px",
    marginTop: "12px",
    cursor: "pointer"
}

const searchStyle = {
    padding: "30px",
    borderRadius: "40px"
}

export default Search;