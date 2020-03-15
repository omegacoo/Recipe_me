import React from 'react';
// import Select from 'react-select';
import { Link } from 'react-router-dom';

import StoreContext from '../../StoreContext';

import './Ingredients.css';

export default class Ingredients extends React.Component {
    static contextType = StoreContext;

    state = {
        leftOverIngredients: this.context.ingredients,
        newIngredients: []
    };

    state = {
        ...this.state,
        currentIngredient: this.state.leftOverIngredients[0]
    };

    handleNewIngredientChange = e => {
        let ingredient = this.context.ingredients.find(i => i.name === e.target.value);
        this.setState({
            currentIngredient: ingredient
        });
    };

    submitNewIngredient = () => {
        if(this.state.leftOverIngredients.length > 0){
            let newLeftOverIngredients = this.state.leftOverIngredients.filter(i => i !== this.state.currentIngredient);
            this.setState({
                newIngredients: [
                    ...this.state.newIngredients,
                    this.state.currentIngredient
                ],
                leftOverIngredients: newLeftOverIngredients,
                currentIngredient: newLeftOverIngredients[0]
            });
            return false
        };
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

    getLeftoverIngredients = () => {
        let newArray = this.state.leftOverIngredients.map(i => i = { ...i, label: i.name });
        newArray = newArray.map(i => <option id={i.id} key={i.id}>{i.name}</option>);

        return newArray
    };

    render(){
        return(
            <div className='ingredients'> 
                <select 
                    className='newIngredient' 
                    id={this.state.currentIngredient}
                    currentvalue={this.state.currentIngredient}
                    onChange={this.handleNewIngredientChange}
                >
                    {this.getLeftoverIngredients()}
                </select>
                <button
                    className='addNewIngredient'
                    onClick={this.submitNewIngredient}
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