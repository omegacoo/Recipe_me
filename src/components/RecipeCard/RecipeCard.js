import React from 'react';

import StoreContext from '../../StoreContext';

import './RecipeCard.css';

export default class RecipeCard extends React.Component {
    static contextType = StoreContext;

    state = {
        currentRecipe: '',
        cardOpen: false
    };

    toggleCardOpen = e => {
        this.setState({
            currentRecipe: e.target.id,
            cardOpen: !this.state.cardOpen
        });
    };

    renderIngredients = () => {
        let ingredients = this.props.recipe.ingredients;

        if(this.context.loggedIn){
            ingredients = this.props.recipe.ingredients;
            ingredients = ingredients.map(i => i = {...i, ...this.context.ingredients.find(I => I.id === i.ingredient_id)});
            
            return ingredients.map(i => 
                <li key={i.ingredient_id} id={i.ingredient_id}>{i.quantity} {i.unit} {i.title}</li>    
            )
        } else {
            ingredients = ingredients.map(i => i = this.context.guestIngredients.find(gI => gI.id === i));
            
            return ingredients.map(i => 
                <li key={i.id} id={i.id}>{i.title}</li>
            );
        };
    };

    renderInstructions = () => {
        const instructions = this.props.recipe.instructions;
        let newInstructions = [];
        let count = 2;
        newInstructions.push('<mark>');
        for(let i = 0; i < instructions.length; i++){
            if(instructions[i] === count.toString() && instructions[i + 1] === '.'){
                newInstructions.push('\n\n<mark>' + instructions[i]);
                count++;
            } else if(instructions[i] === ':'){
                newInstructions.push(':</mark>');
            } else {
                newInstructions.push(instructions[i])
            };
        };
        return <p className='Recipe_instructions' dangerouslySetInnerHTML={{ __html: newInstructions.join('')}} />
    };
    // :&lt;/b&gt;

    renderView = () => {
        if(!this.state.cardOpen){
            return( 
                <li 
                    className='RecipeCard' 
                    id={this.props.recipe.id}
                    onClick={this.toggleCardOpen}
                >
                    <section className='RecipeCard_title' id={this.props.recipe.id}>{this.props.recipe.title}</section>
                    <section className='RecipeCard_description' id={this.props.recipe.id}>{this.props.recipe.description}</section>
                </li>
            )
        } else {
            return(
                <div className='RecipeCard_full'>
                    <i className='closePopup far fa-times-circle' onClick={this.toggleCardOpen} />
                    <div className='title_container'><h2 className='RecipeCard_full_title'>{this.props.recipe.title}</h2></div>
                    <section className='Recipe_times'>
                        <span className='prep_time'>prep time: {this.props.recipe.prep_time}</span>
                        <span className='cook_time'>cook time: {this.props.recipe.cook_time}</span>
                    </section>
                    <label className='Recipe_ingredients_label' htmlFor='Recipe_ingredients'>Ingredients</label>
                    <ul className='Recipe_ingredients'>
                        {this.renderIngredients()}
                    </ul>
                    <label className='Recipe_instructions_label' htmlFor='Recipe_instructions'>Instructions</label>
                    {this.renderInstructions()}
                </div>
            )
        };
    };

    render(){
        return <>{this.renderView()}</>
    };
};