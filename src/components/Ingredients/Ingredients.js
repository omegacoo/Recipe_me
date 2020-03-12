import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

import StoreContext from '../../StoreContext';

import './Ingredients.css';

export default class Ingredients extends React.Component {
    static contextType = StoreContext;

    state = {
        currentIngredient: '',
        newIngredients: []
    };

    handleNewIngredientChange = currentIngredient => {
        this.setState({
            currentIngredient
        });
    };

    submitNewIngredient = () => {
        if(this.state.currentIngredient !== ''){
            this.setState({
                newIngredients: [
                    ...this.state.newIngredients,
                    this.state.currentIngredient
                ]
            });
        };
    };

    checkForIngredient = () => {
        for(let i = 0; i < this.state.newIngredients.length; i++){
            if(this.state.currentIngredient.id === this.state.newIngredients[i].id){
                return false
            };
        };
        this.submitNewIngredient();
        return true
    };

    renderList = () => {
        let displayList;
        if(this.state.newIngredients.length !== 0){
            displayList = this.state.newIngredients.map(i => 
                <li id={i.id} key={i.id}>
                    {i.name}
                </li>    
            )
        } else {
            displayList = ['Nothing added...'];
        };
        return displayList
    };

    render(){
        return(
            <div className='ingredients'> 
                <Select 
                    className='newIngredient' 
                    id={this.state.currentIngredient}
                    value={this.state.currentIngredient}
                    onChange={this.handleNewIngredientChange}
                    options={this.context.ingredients.map(i => i = { ...i, label: i.name })}
                />
                <button
                    className='addNewIngredient'
                    onClick={this.checkForIngredient}
                >
                    +
                </button>
                <h3>To add:</h3>
                <ul className='ingredientsToAdd'>
                    {this.renderList()}
                </ul>
                <Link 
                    className='submitIngredients'
                    to={'/recipes'}
                >
                    Submit
                </Link>
            </div>
        );
    };
};