import React from 'react';
import { Link } from 'react-router-dom';

import RecipeCard from '../RecipeCard/RecipeCard';

import './Recipes.css';

import StoreContext from '../../StoreContext';

export default class Recipes extends React.Component {
    static contextType = StoreContext;

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
                <ul className='RecipesList'>
                    {this.renderRecipes()}
                </ul>
                <Link 
                    className='toIngredients'
                    to={'/ingredients'}
                >
                    Ingredients
                </Link>
            </div>
        );
    };
};