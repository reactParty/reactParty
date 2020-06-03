import React, { Component } from 'react';
import ViewRecipe from './ViewRecipe';
import backbtn from './layout/backbtn.png';
import drinkDot from './layout/drinkDot.png';

/**
 * Saved drink-recipes page component.
 * @extends Component
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
        if (this.props.resetViewRecipe === true) {
            this.props.reResetViewRecipe();
            this.setState( { viewRecipe: null } );
        }
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
                        <div style={savedRecipesContainer} className="col-10 col-sm-11 col-md-8 col-lg-4">
                            <h2>Saved recipes</h2>
                            {(drinks.length) ?
                                (
                                    <div>
                                        {drinks.map((drink) => {
                                            return (
                                                <div onClick={()=>this.setState( { viewRecipe: drink } )} style={savedRecipesListItem} key={"drinkId" + drink.idDrink}> 
                                                    <img src={drinkDot} alt="drinkingdot" style={{height: "30px", marginRight: "15px"}}/>
                                                    {drink.strDrink}
                                                </div>
                                            )
                                        })}
                                    </div>
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

/** @type {Object} Style the back arrow button */
const stylebackbtn = {
    height: "80px",
    marginLeft: "4%",
    cursor: "pointer"
}

const savedRecipesContainer = {
    width: "25%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FFCCB4",
    padding: "2%",
    marginBottom: "50px",
    borderRadius: "10px"
}

const savedRecipesListItem = {
    cursor: "pointer",
    marginTop: "15px",
    marginBottom: "15px",
    padding: "2%",
    fontSize: "22px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    textDecoration: "underline",
    borderRadius: "10px"
}


export default StoredDrinks;