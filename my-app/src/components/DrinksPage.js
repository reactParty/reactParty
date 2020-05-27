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
                            <img width="100%" style = {{borderRadius: "10px"}}
                                src={result.strDrinkThumb}
                                alt={result.strDrink}
                                onMouseEnter={(event)=>this.handleHover(event, true)}
                                onMouseLeave={(event)=>this.handleHover(event, false)}
                                onClick={()=>this.setState( { viewRecipe: result } )}/>
                            <div style={drinkTitleStyle}>
                                <div style={drinkTitleChild}>
                                    {result.strDrink}
                                </div>
                            </div>
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
    width: "80%",
    display: "flex",
    padding: "0",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "50px auto"
}

const drinkItem = {
    display: "flex",
    width: "31%",
    justifyContent: "center",
    margin: "10px",
    padding: "2%",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
    flexDirection: "column",
    position: "relative",
    boxShadow: "#333 0px 0px 3px"
}

const drinkTitleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "6.4%",
    width: "87.2%",
    backgroundColor: "rgba(0,0,0 , 0.3)",
    color: "white",
    height: "20%",
    borderRadius: "0 0 10px 10px"
}

const drinkTitleChild = {
    position: "absolute"
}

export default DrinksPage;