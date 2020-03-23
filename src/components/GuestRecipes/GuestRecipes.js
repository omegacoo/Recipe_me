import React from 'react';

import RecipeCard from '../RecipeCard/RecipeCard';

import './GuestRecipes.css';

import StoreContext from '../../StoreContext';

export default class GuestRecipes extends React.Component {
    static contextType = StoreContext;

    renderRecipes = () => {
        if(this.context.availableGuestRecipes.length > 0){
            return this.context.availableGuestRecipes.map(r =>
                <RecipeCard 
                    recipe={r}
                    key={r.id}
                />
            );
        } else {
            return 'Sorry, no recipes found...'
        };
    };

    handleIngredientsClick = () => {
        this.props.history.push('/guestpantry')
    };

    render(){
        return(
            <div className='Recipes'>
                <h1 className='Recipes_title'>&nbsp;Let's see what you can make!</h1>
                <ul className='RecipesList'>
                    {this.renderRecipes()}
                </ul>
                <button className='guest_ingredients' onClick={this.handleIngredientsClick}>Ingredients</button>
            </div>
        );
    };
};