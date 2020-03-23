import React from 'react';

import './RecipeCard.css';

export default class RecipeCard extends React.Component {
    render(){
        return( 
            <li 
                className='RecipeCard' 
                id={this.props.recipe.id}
            >
                {this.props.recipe.title}
                <ol>
                    {this.props.recipe.ingredients.map(i => 
                        <li 
                            id={i.id} 
                            key={i.id}
                        >
                            {i.title}
                        </li>
                    )}
                </ol>
            </li>
        );
    };
};