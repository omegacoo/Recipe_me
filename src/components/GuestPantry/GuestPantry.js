import React from 'react';

import StoreContext from '../../StoreContext';
import sampleData from '../../sampleData';

import meat from '../../assets/sausage.png';
import vegetable from '../../assets/broccoli.png';
import grain from '../../assets/loaf.png';
import dairy from '../../assets/milk.png';
import condiment from '../../assets/Salt_n_Pepper.png';
import fruit from '../../assets/strawberry.png';
import book from '../../assets/book.png';

import './GuestPantry.css';

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
                                className='GuestPantry_checkbox'
                                onChange={this.handleIngredientClick}
                                checked={ this.state.userIngredients.find(item => item.id === i.id) 
                                                                        ? true
                                                                        : false
                                }
                            />
                            <label className='GuestPantry_checkbox_label' htmlFor={i.id}>{i.title}</label>
                        </li>
                    )
                };
            })
        )
    };

    renderPopup = () => {
        return(
            <div className='GuestPantry_popupContainer'>
                <span className='GuestPantry_popup'>
                    <i className='GuestPantry_closePopup far fa-times-circle' onClick={this.togglePopup} />
                    <h1 className='GuestPantry_popup_title'>{this.state.currentList === 'dairy' || this.state.currentList === 'fruit' ? this.state.currentList : this.state.currentList + 's'}</h1>
                    <ul className='GuestPantry_list'>
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
            <div className='GuestPantry'>
                <h1 className='GuestPantry_title'>&nbsp;Let's fill that Pantry, Guest!</h1>
                <section className='GuestPantry_icons'>
                    <img src={meat} alt='meat' id='meat' onClick={this.togglePopup} />
                    <img src={vegetable} alt='vegetable' id='vegetable' onClick={this.togglePopup} />
                    <img src={dairy} alt='dairy' id='dairy' onClick={this.togglePopup} />
                    <img src={grain} alt='grain' id='grain' onClick={this.togglePopup} />
                    <img src={fruit} alt='fruit' id='fruit' onClick={this.togglePopup} />
                    <img src={condiment} alt='condiment' id='condiment' onClick={this.togglePopup} />
                </section>
                { this.state.listOpen ? this.renderPopup() : null }
                <img src={book} alt='recipe_book' className='GuestPantry_recipes' onClick={this.handleRecipesClick} />
            </div>
        );
    };
};