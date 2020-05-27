import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import searchLogo from './layout/search1.png';

class Search extends Component {
    render() {
        return (
            <div style={divStyle}>
            
                <Form.Group style={searchContainer}>
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

const searchContainer = {
  height: "50px",
  fontSize: "30px",
  boxShadow: "none",
  width: "60%",
}

const logoStyle = {
    height:"40px",
    marginLeft: "-60px",
    marginTop: "10px"
}

const searchStyle = {
    padding: "30px",
    borderRadius: "40px"
}

export default Search;