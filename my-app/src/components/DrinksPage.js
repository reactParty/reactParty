import React, { Component } from 'react';
import Search from './Search';
import danceImg from './layout/danicng.png';
import removeIcon from "./layout/saveIcon1.png";
import saveIcon from "./layout/saveIcon2.png";
import ViewRecipe from "./ViewRecipe";
import backbtn from "./layout/backbtn.png";

/**
 * Page that allows users to search and store drink recipes
 * @extends Component
 */
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
     * @returns {JSX.Element} Div when no results are found
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
    * Checks if results are found
    * @returns {JSX.Element} Divs for displaying search result
    */
    getResults = () => {
        const { storedDrinks } = this.props;
        if (this.props.searchResults == null) return this.getNoResults();
        if (!this.props.searchResults.length) return;
        let strAlcoholic = (this.state.nonAlcoholic) ? "Non alcoholic" : "Alcoholic";
        return ( 
            <div className="row" style={drinkContainer}>
                {this.props.searchResults.filter((result) => result.strAlcoholic === strAlcoholic).map((result) => { // Loops through every specific result item
                    return ( // Returns HTML for each individual search result
                        <div className="col-10 col-sm-10 col-md-4 col-lg-4 col-xl-3" style={drinkItem} key={result.idDrink}>
                            <img width="100%" style = {{borderRadius: "10px 10px 0 0", cursor: "pointer", borderTop: "1px solid #999", borderRight: "1px solid #999", borderLeft: "1px solid #999"}}
                                src={result.strDrinkThumb}
                                alt={result.strDrink}
                                onClick={()=>this.setState( { viewRecipe: result } )}/>
                            <figcaption style={drinkTitleStyle}>
                                <p style={{margin: "0px"}}>{result.strDrink}</p>
                                {(storedDrinks.filter((storedDrink)=>result.idDrink === storedDrink.idDrink).length) ?
                                (
                                    <div style={drinkDiv}>
                                        <img
                                            onClick={()=>this.props.removeDrink(result.idDrink)}
                                            style={saveDrinkIcon}
                                            src={removeIcon}
                                            alt="Remove Drink"/>
                                    </div>
                                ) :
                                (
                                    <div style={drinkDiv}>
                                        <img
                                            onClick={()=>this.props.addDrink(result)}
                                            style={saveDrinkIcon}
                                            src={saveIcon}
                                            alt="Save Drink"/>
                                    </div>
                                )
                            }
                            </figcaption>
                        </div>
                    )
                })}
            </div>
        )
    }

    /**
     * If you click on a drink it returns a ViewRecipe object, otherwise it continues to show search results
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div>
                <Search handleHover={this.handleHover} getDrinksFromSearch={(search)=>this.props.getDrinksFromSearch(search, this)} autoFocus/>
                {(this.state.viewRecipe) ? 
                    (
                        <div>
                            <img src={backbtn} alt="backbutton" style={stylebackbtn} onClick={()=>this.setState( { viewRecipe: null } )} />
                            <ViewRecipe addDrink={this.props.addDrink} removeDrink={this.props.removeDrink} storedDrinks={this.props.storedDrinks} drink={this.state.viewRecipe}/>
                        </div>
                    ) :
                    (
                        <div>
                            <div style={{width: "100%", margin: "20px 0", display: "flex", justifyContent: "center"}}>
                                <label style={{cursor: "pointer"}}><input style={{cursor: "pointer"}} onChange={()=>this.setState( { nonAlcoholic: !this.state.nonAlcoholic } )} name="nonAlcoholic" type="checkbox"/>Non alcoholic</label>
                            </div>
                            <div>
                                {this.getResults()}
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

/** Styling of div containing all drinks */ 
const drinkContainer = {
    display: "flex",
    padding: "0",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "50px auto"
}

/** Styling of drink image */ 
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


/** Styling for container of drink title inside image */ 
const drinkTitleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
    borderTop: "1px solid rgba(0,0,0,0.1)",
    borderBottom: "1px solid #999",
    borderRight: "1px solid #999",
    borderLeft: "1px solid #999",
    fontWeight: "bold",
    padding: "20px 0 20px 0",
    borderRadius: "0 0 10px 10px"
}

/** Styling of drink title */
/**const drinkTitleChild = {
    position: "absolute"
}*/

/** Styling div containing save icon */ 
const drinkDiv = {
    cursor: "pointer",
    position: "absolute",
    right: "10%",
}

/** Styling save icon */
const saveDrinkIcon = {
    maxHeight: "50px",
}

/** Styling of back-button */ 
const stylebackbtn = {
    height: "80px",
    marginLeft: "4%",
    cursor: "pointer"
}

export default DrinksPage;