import React from 'react';

import StoreContext from '../../StoreContext';

import './Ingredients.css';

export default class Ingredients extends React.Component {
    static contextType = StoreContext;

    state = {
        currentIngredient: null,
        newIngredients: []
    };

    handleAddNewIngredient = () => {
        this.context.handleAddNewIngredient();
    };

    submitNewIngredient = e => {
        // this.context.submitNewIngredient(e);
        console.log(e);
    };

    render(){
        return(
            <>
                <ul className='Ingredients'>
                    {this.context.userIngredients.map(userIngredient => 
                        <li>
                            <select id={userIngredient.name}>
                                {this.context.ingredients.map(ingredient => 
                                    <option value={ingredient.name}>{ingredient.name}</option>
                                )}
                            </select>
                            <button 
                                onClick={e => this.submitNewIngredient(e)}
                            >
                                Add
                            </button>
                        </li>
                    )}
                </ul>
                <button
                    className='addNewIngredient'
                    onClick={this.handleAddNewIngredient}
                >
                    +
                </button>
            </>
        );
    };
};