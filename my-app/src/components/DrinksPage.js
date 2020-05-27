import React, { Component } from 'react';
import Search from './Search';

class DrinksPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            viewRecipe: null
        }
    }

    handleHover = (event, enter) => {
        if (enter) {
            event.target.style.cursor = "pointer";
        } else {
            event.target.style.cursor = "none";
        }
    }

    getResults = () => {
        if (!this.props.searchResults.length) return;
        return (
            <div style={drinkContainer}>
                {this.props.searchResults.map((result) => {
                    return (
                        <div style={drinkItem} key={result.idDrink}>
                            {/* {result.strDrink} */}
                            <img width="100%"
                                src={result.strDrinkThumb}
                                alt={result.strDrink}
                                onMouseEnter={(event)=>this.handleHover(event, true)}
                                onMouseLeave={(event)=>this.handleHover(event, false)}
                                onClick={()=>this.setState( { viewRecipe: result } )}/>
                        </div>
                    )
                })}
            </div>
        )

    }

    render() {
        return (this.state.viewRecipe) ? 
        (
            <div>
                <h2>{this.state.viewRecipe.strDrink}</h2>
                <img src={this.state.viewRecipe.strDrinkThumb} alt={this.state.viewRecipe.strDrink}/>
            </div>
        ) :
        (
            <div>
                <Search handleHover={this.handleHover} getDrinksFromSearch={this.props.getDrinksFromSearch}/>
                {this.getResults()}
            </div>
        )
    }
}

const drinkContainer = {
    width: "100%",
    display: "flex",
    padding: "0",
    listStyle: "none",
    flexWrap: "wrap",
    margin: "0"
}

const drinkItem = {
    display: "flex",
    width: "31%",
    justifyContent: "center",
    margin: "10px",
    padding: "2%",
    backgroundColor: "red"
}

export default DrinksPage;