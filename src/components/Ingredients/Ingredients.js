import React from 'react';
// import Select from 'react-select';
import { Link } from 'react-router-dom';

import StoreContext from '../../StoreContext';

import './Ingredients.css';

export default class Ingredients extends React.Component {
    static contextType = StoreContext;

    state = {
        leftOverIngredients: this.context.ingredients,
        units: this.context.units,
        currentUnit: this.context.units[0],
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

    handleUnitChange = e => {
        this.setState({
            currentUnit: e.target.value
        });
    };

    addNewIngredient = () => {
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

    handleRemoveNewIngredient = id => {
        let returnedIngredient = this.state.newIngredients.filter(i => i.id === id);
        returnedIngredient = returnedIngredient[0];
        let modifiedNewIngredients = this.state.newIngredients.filter(i => i.id !== id);

        this.setState({
            newIngredients: modifiedNewIngredients,
            leftOverIngredients: [
                ...this.state.leftOverIngredients,
                returnedIngredient
            ]
        });
    };

    renderList = () => {
        let displayList;
        if(this.state.newIngredients.length !== 0){
            displayList = this.state.newIngredients.map(i => 
                <li id={i.id} key={i.id}>
                    <span className='removeNewIngredient' onClick={() => this.handleRemoveNewIngredient(i.id)}>X</span>
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

    submitNewIngredients = () => {
        this.context.submitNewIngredients(this.state.newIngredients);
    };

    render(){
        return(
            <div className='ingredients'>
                <section className='options'>
                    <select 
                        className='newIngredient' 
                        id={this.state.currentIngredient}
                        currentvalue={this.state.currentIngredient}
                        onChange={this.handleNewIngredientChange}
                    >
                        {this.getLeftoverIngredients()}
                    </select>
                    {/* <select
                        className='currentUnit'
                        id={this.state.currentUnit}
                        currentvalue={this.state.currentUnit}
                        onChange={this.handleUnitChange}
                    >
                        {this.state.units.map(u => <option id={u} key={u}>{u}</option>)}
                    </select> */}
                </section>
                <button
                    className='addNewIngredient'
                    onClick={this.addNewIngredient}
                >
                    +
                </button>
                <h3>To add:</h3>
                <ul className='ingredientsToAdd'>
                    {this.renderList()}
                </ul>
                <Link 
                    className='submitIngredients'
                    onClick={this.submitNewIngredients}
                    to={'/recipes'}
                >
                    Submit
                </Link>
            </div>
        );
    };
};