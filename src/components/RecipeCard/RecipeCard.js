import React from 'react';

import './RecipeCard.css';

export default class RecipeCard extends React.Component {
    state = {
        currentRecipe: '',
        cardOpen: false
    };

    handleCardClick = e => {
        this.context.recipes
        this.setState({

        });
    };

    render(){
        return( 
            <li 
                className='RecipeCard' 
                id={this.props.recipe.id}
                onClick={this.handleCardClick}
            >
                <section className='RecipeCard_title' id={this.props.recipe.id}>{this.props.recipe.title}</section>
                <section className='RecipeCard_description' id={this.props.recipe.id}>{this.props.recipe.description}</section>
            </li>
        );
    };
};