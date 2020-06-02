import React, { Component } from 'react';
import drinkDot from './layout/drinkDot.png';
import removeIcon from "./layout/saveIcon1.png";
import saveIcon from "./layout/saveIcon2.png";

/**
 * Drink-component with title, img, ingrediens and measures.
 * @extends Component
 */
class ViewRecipe extends Component {
    /** Object */ state
    
    /**
     * @param {*} props - Required for super().
     * @constructor
     */
    constructor(props) {
        super(props); // Parent-class Component requires props.
        this.state= {
            /** {Array<Object>} */ drinks: [],
            /** {Object} */viewRecipe: null
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
            <div style={drinkInfoContainer}>
                <div style={drinkStyle}>
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
                <div style={drinkInfo}>
                    <h2>Ingredients</h2>
                    {
                        this.getIngredients()
                    }
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

const drinkDiv = {
    cursor: "pointer",
    position: "absolute",
    right: "20px",
    bottom: "10px"
}

const drinkImg = {
    maxHeight: "60px",
}

const imgParent = {
    width: "100%",
    margin: "0",
    position: "relative",
}

export default ViewRecipe;