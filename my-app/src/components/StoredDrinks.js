import React, { Component } from 'react';
import ViewRecipe from './ViewRecipe';
import backbtn from './layout/backbtn.png';

/**
 * @class
 */
class StoredDrinks extends Component {
    /**
     * @constructor
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state= {
            drinks: [],
            viewRecipe: null
        }
    }

    /**
     * @returns JSX
     */
    render() {
        const { drinks } = this.props;
        return (
            <div>
                {(this.state.viewRecipe) ?
                    (
                        <div>
                            <img src={backbtn} alt="backbutton" style={stylebackbtn} onClick={()=>this.setState( { viewRecipe: null } )} />
                            <ViewRecipe addDrink={this.props.addDrink} removeDrink={this.props.removeDrink} storedDrinks={drinks} drink={this.state.viewRecipe}/>
                        </div>
                    ) : 
                    (
                        <div style={savedRecipesContainer}>
                            <h2>Saved recipes</h2>
                            {(drinks.length) ?
                                (
                                    <ul>
                                        {drinks.map((drink) => {
                                            return (
                                                <li onClick={()=>this.setState( { viewRecipe: drink } )} style={{cursor: "pointer"}} key={"drinkId" + drink.idDrink}>
                                                    {drink.strDrink}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                ) :
                                (
                                    <p>You have no saved drink recipes!</p>
                                )
                            }
                        </div>              
                    )

                }
            </div>
        )
    }
}

/** Style the back arrow button */
const stylebackbtn = {
    height: "80px",
    marginLeft: "4%",
    cursor: "pointer"
}

const savedRecipesContainer = {
    
}

export default StoredDrinks;