import React, { Component } from 'react';
import Search from './Search';
import danceImg from './layout/danicng.png'

class DrinksPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            nonAlcoholic: false,
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

    getNoResults() {
        return (
            <div style={{width: "100%", fontSize: "1.3em", textAlign: "center", padding: "50px"}}>
                <div style={{width: "100%", marginBottom: "20px"}}>No results! Perhaps you've had enough ...</div>
                <img src={danceImg} alt="dance" width="100px"/>
            </div>
        )
    }

    getResults = () => {
        if (this.props.searchResults == null) return this.getNoResults();
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
            <div style={drinkInfoContainer}>
                <div style={drinkStyle}>
                    <h2>{this.state.viewRecipe.strDrink}</h2>
                    <img width="100%" style = {{borderRadius: "10px"}} src={this.state.viewRecipe.strDrinkThumb} alt={this.state.viewRecipe.strDrink}/>
                </div>
                <div style={drinkInfo}>
                    <h2>Ingredients</h2>
                    <ul>
                        <li style = {{display: "flex", justifyContent: "space-between"}}>
                            <div>{this.state.viewRecipe.strIngredient1}</div>
                            <div>{this.state.viewRecipe.strMeasure1}</div>
                        </li>
                    </ul>
                </div>
            </div>
        ) :
        (
            <div>
                <Search handleHover={this.handleHover} getDrinksFromSearch={(search)=>this.props.getDrinksFromSearch(search, this.state.nonAlcoholic)}/>
                {this.getResults()}
                <div style={{width: "100%", margin: "20px 0", display: "flex", justifyContent: "center"}}>
                    <label><input onChange={()=>this.setState( { nonAlcoholic: !this.state.nonAlcoholic } )} name="nonAlcoholic" type="checkbox"/>Non alcoholic</label>
                </div>
            </div>
        )
    }
}

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

const drinkStyle = {
    width: "50%",
    backgroundColor: "#fafafa",
    padding: "2%",
}

const drinkInfo = {
    width: "50%",
    backgroundColor: "#fafafa",
    padding: "2%",   
}

export default DrinksPage;