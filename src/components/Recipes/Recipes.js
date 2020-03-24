import React from 'react';

import RecipeCard from '../RecipeCard/RecipeCard';

import './Recipes.css';

import StoreContext from '../../StoreContext';

export default class Recipes extends React.Component {
    static contextType = StoreContext;

    componentDidMount = () => {
        this.context.fetchRecipes();
    };

    renderRecipes = () => {
        if(this.context.availableRecipes.length > 0){
            return this.context.availableRecipes.map(r =>
                <RecipeCard 
                    recipe={r}
                    key={r.id}
                />
            );
        } else {
            return 'Sorry, no recipes found...'
        };
    };

    render(){
        return(
            <div className='Recipes'>
                <h1 className='Recipes_title'>&nbsp;Let's see what you can make!</h1>
                <ul className='RecipesList'>
                    {this.renderRecipes()}
                </ul>
            </div>
        );
    };
};