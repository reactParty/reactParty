import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import searchLogo from './layout/search1.png';

class Search extends Component {
    render() {
        return (
            <div style={divStyle}>
            
                <Form.Group>
                    <Form.Control style={searchStyle} size="lg" type="text" placeholder="Search.." />
                </Form.Group>

                <img 
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

const searchStyle = {
  height: "50px",
  fontSize: "50px",
  boxShadow: "none"
}

const logoStyle = {
    height:"40px",
    marginLeft: "-55px",
    marginTop: "5px"
}

export default Search;