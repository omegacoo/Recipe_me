import React from 'react';

import StoreContext from '../../StoreContext';
import sampleData from '../../sampleData';

import './GuestPantry.css';

export default class GuestPantry extends React.Component {
    state = {
        currentList: '',
        listOpen: false,
        baseIngredients: sampleData.sampleIngredients,
        userIngredients: []
    };

    handleIngredientClick = e => {
        let item = this.state.baseIngredients.find(i => i.id == e.target.id);
        if(this.state.userIngredients.find(i => i.id == item.id)){
            let newUserList = this.state.userIngredients.filter(i => i.id !== item.id);
            this.setState({
                userIngredients: newUserList
            });
        } else {
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
                            id={i.id} 
                            key={i.id} 
                            onClick={this.handleIngredientClick}
                            style={
                                this.state.userIngredients.find(item => item.id === i.id) 
                                                                        ? {backgroundColor: '#16a085'} 
                                                                        : {backgroundColor: '#c0392b'}
                            }
                        >
                            {i.title}
                        </li>
                    )
                };
            })
        )
    };

    renderPopup = () => {
        return(
            <div className='popupContainer'>
                <span className='popup'>
                    <i className='closePopup far fa-times-circle' onClick={this.togglePopup} />
                    <h1 className='popup_title'>{this.state.currentList === 'dairy' ? this.state.currentList : this.state.currentList + 's'}</h1>
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
        this.props.history.push('/guestrecipes');
    };

    render(){
        return(
            <div className='Pantry'>
                <h1 className='Pantry_title'>&nbsp;Let's fill that Pantry, Guest!</h1>
                <section className='Pantry_icons'>
                    <i className='fas fa-drumstick-bite' id='meat' onClick={this.togglePopup}></i>
                    <i className='fas fa-carrot' id='vegetable' onClick={this.togglePopup}></i>
                    <i className='fas fa-cheese' id='dairy' onClick={this.togglePopup}></i>
                    <i className='fas fa-bread-slice' id='grain' onClick={this.togglePopup}></i>
                    <i className='fas fa-apple-alt' id='fruit' onClick={this.togglePopup}></i>
                    <i className='fas fa-mortar-pestle' id='condiment' onClick={this.togglePopup}></i>
                </section>
                { this.state.listOpen ? this.renderPopup() : null }
                <button className='guest_recipes' onClick={this.handleRecipesClick}>Recipes</button>
            </div>
        );
    };
};