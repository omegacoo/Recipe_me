import React from 'react';

import StoreContext from '../../StoreContext';
import sampleData from '../../sampleData';

import meat from '../../assets/sausage.webp';
import vegetable from '../../assets/broccoli.webp';
import grain from '../../assets/loaf.webp';
import dairy from '../../assets/milk.webp';
import condiment from '../../assets/Salt_n_Pepper.webp';
import fruit from '../../assets/strawberry.webp';
import book from '../../assets/book.webp';

import '../Pantry/Pantry.css';

export default class GuestPantry extends React.Component {
    static contextType = StoreContext;

    state = {
        currentList: '',
        listOpen: false,
        baseIngredients: this.context.guestIngredients,
        userIngredients: this.context.guestUserIngredients
    };

    handleIngredientClick = e => {
        let item = this.state.baseIngredients.find(i => i.id == e.target.id);
        if(this.state.userIngredients.find(i => i.id == item.id)){
            let newUserList = this.state.userIngredients.filter(i => i.id !== item.id);
            this.context.updateGuestUserIngredients(newUserList);
            this.setState({
                userIngredients: newUserList
            });
        } else {
            this.context.updateGuestUserIngredients([...this.state.userIngredients, item]);
            this.setState({
                userIngredients: [
                    ...this.state.userIngredients,
                    item
                ]
            });
        };
    };

    renderList = () => {
        return(
            sampleData.sampleIngredients.map(i => {
                if(i.category === this.state.currentList){
                    return(
                        <li 
                            key={i.id} 
                        >
                            <input 
                                type='checkbox'
                                id={i.id} 
                                className='Pantry_checkbox'
                                onChange={this.handleIngredientClick}
                                checked={ this.state.userIngredients.find(item => item.id === i.id) 
                                                                        ? true
                                                                        : false
                                }
                            />
                            <label className='checkbox_label' htmlFor={i.id}>{i.title}</label>
                        </li>
                    )
                };
            })
        )
    };

    renderPopup = () => {
        return(
            <div className='popupContainer'>
                <span className='Pantry_popup'>
                    <i className='closePopup far fa-times-circle' onClick={this.togglePopup} />
                    <h1 className='popup_title'>{this.state.currentList === 'dairy' || this.state.currentList === 'fruit' ? this.state.currentList : this.state.currentList + 's'}</h1>
                    <ul className='Pantry_list'>
                        { this.renderList() }
                    </ul>
                </span>
            </div>
        )
    };

    togglePopup = e => {
        this.setState({
            currentList: e.target.id,
            listOpen: !this.state.listOpen
        });
    };

    handleRecipesClick = () => {
        this.context.setAvailableGuestRecipes();
        this.props.history.push('/guestrecipes');
    };

    render(){
        return(
            <div className='Pantry'>
                <h1 className='Pantry_title'>&nbsp;Let's fill that Pantry, Guest!</h1>
                <section className='Pantry_icons'>
                    <img src={meat} alt='meat' id='meat' onClick={this.togglePopup} />
                    <img src={vegetable} alt='vegetable' id='vegetable' onClick={this.togglePopup} />
                    <img src={dairy} alt='dairy' id='dairy' onClick={this.togglePopup} />
                    <img src={grain} alt='grain' id='grain' onClick={this.togglePopup} />
                    <img src={fruit} alt='fruit' id='fruit' onClick={this.togglePopup} />
                    <img src={condiment} alt='condiment' id='condiment' onClick={this.togglePopup} />
                </section>
                { this.state.listOpen ? this.renderPopup() : null }
                <img src={book} alt='recipe_book' className='recipes' onClick={this.handleRecipesClick} />
            </div>
        );
    };
};