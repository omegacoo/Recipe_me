import React from 'react';
import { Link } from 'react-router-dom';

import StoreContext from '../../StoreContext';

import './Pantry.css';

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
                <span className='removeNewIngredient' onClick={() => this.handleRemoveIngredient(i.id)}>X</span>
                {i.title}
            </li>
        );
    };

    submitRemainingIngredients = () => {
        this.context.submitRemainingIngredients(this.state.userIngredients);
    };

    render(){
        return(
            <div className='Pantry'>
                <ul className='pantryList'>
                    {this.renderPantry()}
                </ul>
                <Link
                    className='saveList'
                    onClick={this.submitRemainingIngredients}
                    to={'/recipes'}
                >
                    Save
                </Link>
            </div>
        );
    };
};