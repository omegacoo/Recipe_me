import React from 'react';

import RecipeCard from '../RecipeCard/RecipeCard';

import arrow from '../../assets/arrow.png';

import './GuestRecipes.css';

import StoreContext from '../../StoreContext';

export default class GuestRecipes extends React.Component {
    static contextType = StoreContext;

    state = {
        guide: true
    };

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

    renderGuide = () => {
        if(this.state.guide){
            return <img src={arrow} alt='arrow' className='arrow pulse' />
        };
    };

    render(){
        return(
            <div className='Recipes'>
                <h1 className='Recipes_title'>&nbsp;Let's see what you can make!</h1>
                <section className='RecipesList_container'>
                    <ul className='RecipesList'>
                        {this.renderRecipes()}
                    </ul>
                </section>
                { this.renderGuide() }
                <button className='ingredients' onClick={this.handleIngredientsClick} />
            </div>
        );
    };
};