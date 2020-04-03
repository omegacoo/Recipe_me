import React from 'react';

import Error from '../Error/Error';
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

    handleIngredientsClick = () => {
        this.props.history.push('/pantry');
    };

    renderView = () => {
        if(this.context.loggedIn){
            return(
                <div className='Recipes'>
                    <h1 className='Recipes_title'>&nbsp;Let's see what you can make!</h1>
                    <section className='RecipesList_container'>
                        <ul className='RecipesList'>
                            {this.renderRecipes()}
                        </ul>
                    </section>
                    <button className='ingredients' onClick={this.handleIngredientsClick}></button>
                </div>
            )
        } else {
            return  <Error  
                        history={this.props.history}
                    />
        }
    };

    render(){
        return <>{this.renderView()}</>
    };
};