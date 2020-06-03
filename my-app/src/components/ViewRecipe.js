import React, { Component } from 'react';
import drinkDot from './layout/drinkDot.png';
import removeIcon from "./layout/saveIcon1.png";
import saveIcon from "./layout/saveIcon2.png";

/**
 * Drink-component with title, img, ingrediens and measures.
 * @extends Component
 */
class ViewRecipe extends Component {
    /** @type {Object} current state of component */ state
    
    /**
     * @param {*} props - Costructor requires super(props).
     * @constructor
     */
    constructor(props) {
        super(props);   // Parent-class Component requires props.

        this.state= {
            /** @type {Array<Object>} */    drinks: [],
            /** @type {Object} */           viewRecipe: null
        }
    }

    /**
     * @param {Object} ingredient - Contains unique key, ingredient name and ingredient measure.
     * @returns {JSX.Element} li-tag with information about ingredient.
     */
    getDrinkInfo = (ingredient) => {
        return (
            <li key={ingredient.key} style={{display: "flex", justifyContent: "space-between", fontSize:"20px"}}>
                <div>
                    <img src={drinkDot} alt="drinkingdot" style={{height: "30px", marginRight: "15px"}}/>
                    {ingredient.ingredient}
                </div>
                <div>{ingredient.measure}</div>
            </li>
        )
    }

    /**
     * A drink object contains several properties like strIngredient1, strIngredient2, strMeasure1, strMeasure2.
     * This method loops through all ingredients 1-10 and pushes them to a new array which is then maped through
     * to create li-tags.
     * @returns {JSX.Element} ul-tag
     */
    getIngredients = () => {
        const { drink } = this.props;
        let ingredients = []
        let i = 1;
        while (i <= 10) {
            if (drink["strIngredient" + i] == null) break;
            let ingredientObj = {
                ingredient: drink["strIngredient" + i],
                measure: drink["strMeasure" + i],
                key: "ingredient" + i
            }
            ingredients.push(ingredientObj)
            i++
        }
        return (<ul style={{marginTop: "50px", padding:"0"}}>
                {ingredients.map(this.getDrinkInfo)}
            </ul>
        )
    }

    /**
     * @returns {JSX.Element} Drink-recipe with ingredients. If drink is stored locally, the "saved"-symbol will appear, else "save"-symbol will appear.
     */
    render() {
        const { drink, storedDrinks } = this.props;
        return (
            <div className="row">         
                <div style={drinkInfoContainer} className="col-12 col-sm-10 col-md-10 col-lg-6">
                    <div style={drinkStyle} className="col-10 col-sm-10 col-md-10 col-lg-6">
                        <h2>{drink.strDrink}</h2>
                        <img width="100%" style = {{borderRadius: "10px"}} src={drink.strDrinkThumb} alt={drink.strDrink}/>
                        <div style={imgParent}>
                            {(storedDrinks.filter((storedDrink)=>drink.idDrink === storedDrink.idDrink).length) ?
                                (
                                    <div style={drinkDiv}>
                                        <img
                                            onClick={()=>this.props.removeDrink(drink.idDrink)}
                                            style={drinkImg}
                                            src={removeIcon}
                                            alt="Remove Drink"/>
                                    </div>
                                ) :
                                (
                                    <div style={drinkDiv}>
                                        <img
                                            onClick={()=>this.props.addDrink(drink)}
                                            style={drinkImg}
                                            src={saveIcon}
                                            alt="Save Drink"/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div style={drinkInfo} className="col-10 col-sm-10 col-md-10 col-lg-6">
                        <h2>Ingredients</h2>
                        {
                            this.getIngredients()
                        }
                    </div>
                </div>
            </div>                
        )   
    }
}

/** @type {Object} Style of Component container */
const drinkInfoContainer = {
    width: "46%",
    display: "flex",
    padding: "0",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "50px auto",
    borderRadius: "10px",
    boxShadow: "#333 0px 0px 3px"
}

/** @type {Object} Style of left inner container: title, thumbnail-image and "save"/"remove"-icons */
const drinkStyle = {
    width: "50%",
    backgroundColor: "#fafafa",
    padding: "2%",
}

/** @type {Object} Style of right inner container: list of ingredients and measures */
const drinkInfo = {
    width: "50%",
    backgroundColor: "#fafafa",
    padding: "2%",   
}

/** @type {Object} Style of individual container of "save"/"remove"-icons */
const drinkDiv = {
    cursor: "pointer",
    position: "absolute",
    right: "20px",
    bottom: "10px"
}

/** @type {Object} Style of "save"/"remove"-icons */
const drinkImg = {
    maxHeight: "60px",
}

/** @type {Object} Style of container of individual containers of "save"/"remove"-icons */
const imgParent = {
    width: "100%",
    margin: "0",
    position: "relative",
}

export default ViewRecipe;