import React, { Component } from 'react';
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
                {(drinks.length) ?
                    (
                        <ul>
                            {drinks.map((drink) => {
                                return (
                                    <li key={"drinkId" + drink.idDrink}>
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
}

export default StoredDrinks;