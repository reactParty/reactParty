import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <input style={searchStyle} type="text" placeholder="Search..." />
            </div>
        )
    }
}

const searchStyle = {
    width: "80%",
    marginLeft: "20px"
}

export default Search;