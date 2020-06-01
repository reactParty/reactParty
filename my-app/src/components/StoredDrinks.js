import React, { Component } from 'react';
import ViewRecipe from './ViewRecipe';
import backbtn from './layout/backbtn.png';
// import drinkDot from './layout/drinkDot.png'

class StoredDrinks extends Component {
    constructor(props) {
        super(props);
        this.state= {
            drinks: [],
            viewRecipe: null
        }
    }

    render() {
        const { drinks } = this.props;
        return (
            <div>
                {(this.state.viewRecipe) ?
                    (
                        <div>
                            <img src={backbtn} alt="backbutton" style={stylebackbtn} onClick={()=>this.setState( { viewRecipe: null } )} />
                            <ViewRecipe drink={this.state.viewRecipe}/>
                        </div>
                    ) : 
                    (
                        <div>
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

const stylebackbtn = {
    height: "80px",
    marginLeft: "4%",
    cursor: "pointer"
}

export default StoredDrinks;