import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Search extends Component {
    render() {
        return (
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Large text" />
            </Form.Group>
        )
    }
}

const searchStyle = {
    width: "80%",
    marginLeft: "20px"
}

export default Search;