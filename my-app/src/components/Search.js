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

export default Search;