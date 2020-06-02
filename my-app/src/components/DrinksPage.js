import React, { Component } from 'react';
import Search from './Search';
import danceImg from './layout/danicng.png'
import drinkDot from './layout/drinkDot.png'

class DrinksPage extends Component {
    /**
     * @constructor
     * @param {*} props - Costructor requires super(props)
     */
    constructor(props) {
        super(props);
        this.state= {
            nonAlcoholic: false, // Sets default filter
            viewRecipe: null // ViewRecipe is null before search has been made
        }
    }

    /**
     * Returns HTML when no results are found
     * @returns JSX
     */
    getNoResults() {
        return (
            <div style={{width: "100%", fontSize: "1.3em", textAlign: "center", padding: "50px"}}>
                <div style={{width: "100%", marginBottom: "20px"}}>No results! Perhaps you've had enough ...</div>
                <img src={danceImg} alt="dance" width="100px"/>
            </div>
        )
    }

    /** 
    * Checks if results are found then returns HTML for displaying the result
    * @returns JSX
    */
    getResults = () => {
        if (this.props.searchResults == null) return this.getNoResults();
        if (!this.props.searchResults.length) return;
        let strAlcoholic = (this.state.nonAlcoholic) ? "Non alcoholic" : "Alcoholic";
        return ( 
            <div style={drinkContainer}>
                {this.props.searchResults.filter((result) => result.strAlcoholic === strAlcoholic).map((result) => { // Loops through every specific result item
                    return ( // Returns HTML for each individual search result
                        <div style={drinkItem} key={result.idDrink}>
                            <img width="100%" style = {{borderRadius: "10px", cursor: "pointer"}}
                                src={result.strDrinkThumb}
                                alt={result.strDrink}
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

    /**
     * @param {Object}
     * @returns JSX
     * Contains a key, an ingredient and a measure to an ingredient
     * Returns HTML to display ingredients and measures
     */
    getDrinkInfo = (ingredient) => {
        return (
            <li key = {ingredient.key} style = {{display: "flex", justifyContent: "space-between", fontSize:"20px"}}>
                <div>
                    <img src={drinkDot} alt="drinkingdot" style={{height: "30px", marginRight: "15px"}}/>
                    {ingredient.ingredient}
                </div>
                <div>{ingredient.measure}</div>
            </li>
        )
    }

    /**
     * Creates an Object ingredientObj (key, ingredient, measure)
     * Loops through all objects and pushes these to ingredients list
     * @returns JSX
     */
    getIngredients = () => {
        let ingredients = []
        let i = 1;
        while (i <= 10) {
            if (this.state.viewRecipe["strIngredient" + i] == null) break;
            let ingredientObj = {
                ingredient: this.state.viewRecipe["strIngredient" + i],
                measure: this.state.viewRecipe["strMeasure" + i],
                key: "ingredient" + i
            }
            ingredients.push(ingredientObj)
            i++
        }
        return (<ul style={{marginTop: "50px", padding:"0"}}> {/** Returns an ul element */}
                {ingredients.map(this.getDrinkInfo)} {/** Maps ingredients and calls function getDrinkInfo */}
            </ul>
        )
    }


    /**
     * Returns JSX for rendering search results and recipes
     * @returns JSX
     */
    render() {
        return (
            <div>
                <Search handleHover={this.handleHover} getDrinksFromSearch={(search)=>this.props.getDrinksFromSearch(search, this)} autoFocus/>
                <div style={{width: "100%", margin: "20px 0", display: "flex", justifyContent: "center"}}>
                    <label style={{cursor: "pointer"}}><input style={{cursor: "pointer"}} onChange={()=>this.setState( { nonAlcoholic: !this.state.nonAlcoholic } )} name="nonAlcoholic" type="checkbox"/>Non alcoholic</label>
                </div>
                {(this.state.viewRecipe) ? 
                    (
                        <div style={drinkInfoContainer}>
                            <div style={drinkStyle}>
                                <h2>{this.state.viewRecipe.strDrink}</h2>
                                <img width="100%" style = {{borderRadius: "10px"}} src={this.state.viewRecipe.strDrinkThumb} alt={this.state.viewRecipe.strDrink}/>
                            </div>
                            <div style={drinkInfo}>
                                <h2>Ingredients</h2>
                                {
                                    this.getIngredients()
                                }
                            </div>
                        </div>
                    ) :
                    (
                        <div>
                            {this.getResults()}
                        </div>
                    )}
            </div>
        )
    }
}

// Styling container of drinkInfo
const drinkInfoContainer = {
    width: "60%",
    display: "flex",
    padding: "0",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "50px auto",
    borderRadius: "10px",
    boxShadow: "#333 0px 0px 3px"
}

// Styling container of recipes and image
const drinkContainer = {
    width: "80%",
    display: "flex",
    padding: "0",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "50px auto"
}

// Styling of drink image
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

// Styling for container of drink title inside image
const drinkTitleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "6.4%",
    width: "87.2%",
    backgroundColor: "rgba(0,0,0 , 0.3)",
    color: "white",
    textShadow: "2px 2px 4px #000000",
    fontWeight: "bold",
    height: "20%",
    borderRadius: "0 0 10px 10px"
}

// Styling of drink title
const drinkTitleChild = {
    position: "absolute"
}

// Styling drink image container
const drinkStyle = {
    width: "50%",
    backgroundColor: "#fafafa",
    padding: "2%",
}

// Styling drink info container
const drinkInfo = {
    width: "50%",
    backgroundColor: "#fafafa",
    padding: "2%",   
}

export default DrinksPage;