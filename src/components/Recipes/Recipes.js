import React from 'react';
import { Link } from 'react-router-dom';

import RecipeCard from '../RecipeCard/RecipeCard';

import './Recipes.css';

import StoreContext from '../../StoreContext';

export default class Recipes extends React.Component {
    static contextType = StoreContext;

    render(){
        return(
            <div className='Recipes'>
                <ul className='RecipesList'>
                    {this.context.recipes.map(r =>
                        <RecipeCard 
                            recipe={r}
                            key={r.id}
                        />
                    )}
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