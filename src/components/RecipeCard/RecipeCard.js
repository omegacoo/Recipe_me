import React from 'react';

import './RecipeCard.css';

export default class RecipeCard extends React.Component {
    render(){
        return( 
            <li 
                className='RecipeCard' 
                id={this.props.recipe.id}
            >
                <section className='RecipeCard_title'>{this.props.recipe.title}</section>
                <section className='RecipeCard_description'>{this.props.recipe.description}</section>
            </li>
        );
    };
};