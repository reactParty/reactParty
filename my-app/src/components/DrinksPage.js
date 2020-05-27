import React, { Component } from 'react';
import Search from './Search';

class DrinksPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            viewRecipe: null
        }
    }

    drinkHover = (event, enter) => {
        if (enter) {
            event.target.style.cursor = "pointer";
        } else {
            event.target.style.cursor = "none";
        }
    }

    getResults = () => {
        if (!this.props.searchResults.length) return;
        return (
            <ul>
                {this.props.searchResults.map((result) => {
                    return (
                        <li key={result.idDrink}>
                            {result.strDrink}
                            <img
                                src={result.strDrinkThumb}
                                alt={result.strDrink}
                                onMouseEnter={(event)=>this.drinkHover(event, true)}
                                onMouseLeave={(event)=>this.drinkHover(event, false)}
                                onClick={()=>this.setState( { viewRecipe: result } )}/>
                        </li>
                    )
                })}
            </ul>
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
                <button onClick={()=>this.props.getDrinksFromSearch("margarita")}>KÖR</button>
                <Search />
                <div>{this.getResults()}</div>
            </div>
        )
    }
}

export default DrinksPage;