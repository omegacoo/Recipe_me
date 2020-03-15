import React from 'react';

import StoreContext from '../../StoreContext';

export default class Pantry extends React.Component {
    static contextType = StoreContext;

    state = {
        userIngredients: this.context.userIngredients
    };

    handleRemoveIngredient = id => {
        let newIngredients = this.state.userIngredients.filter(i => i.id !== id);
        this.setState({
            userIngredients: newIngredients
        });
    };

    renderPantry = () => {
        return this.state.userIngredients.map(i => 
            <li id={i.id} key={i.id}>
                <span className='removeIngredient' onClick={() => this.handleRemoveIngredient(i.id)}>X</span>
                {i.name}
            </li>
        );
    };

    submitRemainingIngredients = () => {
        this.context.submitRemainingIngredients(this.state.userIngredients);
    };

    render(){
        return(
            <div className='Pantry'>
                <ol className='pantryList'>
                    {this.renderPantry()}
                </ol>
                <button
                    onClick={this.submitRemainingIngredients}
                >
                    Save
                </button>
            </div>
        );
    };
};