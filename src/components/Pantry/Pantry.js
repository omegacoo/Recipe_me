import React from 'react';

import Error from '../Error/Error';

import StoreContext from '../../StoreContext';

import meat from '../../assets/sausage.png';
import vegetable from '../../assets/broccoli.png';
import grain from '../../assets/loaf.png';
import dairy from '../../assets/milk.png';
import other from '../../assets/Salt_n_Pepper.png';
import fruit from '../../assets/strawberry.png';
import book from '../../assets/book.png';

import './Pantry.css';

export default class Pantry extends React.Component {
    static contextType = StoreContext;

    state = {
        currentList: '',
        listOpen: false,
        baseIngredients: [],
        userIngredients: []
    };

    componentDidMount = () => {
        this.setState({
            baseIngredients: this.context.baseIngredients,
            userIngredients: this.context.userIngredients
        });
    };

    handleIngredientClick = e => {
        let item = this.state.baseIngredients.find(i => i.id == e.target.id);
        if(this.state.userIngredients.find(i => i.id == item.id)){
            let newUserList = this.state.userIngredients.filter(i => i.id !== item.id);
            this.context.updateUserIngredients(newUserList);
            this.setState({
                userIngredients: newUserList
            });
        } else {
            this.context.updateUserIngredients([...this.state.userIngredients, item]);
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
            this.context.baseIngredients.map(i => {
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
            listOpen: !this.state.listOpen,
            userIngredients: this.context.userIngredients
        });
    };

    handleRecipesClick = () => {
        this.props.history.push('/recipes');
    };

    renderView = () => {
        if(this.context.loggedIn){
            return(
                <div className='Pantry'>
                    <h1 className='Pantry_title'>&nbsp;Let's fill that Pantry, { this.context.userName !== '' ? this.context.userName : 'buddy' }!</h1>
                    <section className='Pantry_icons'>
                    <img src={meat} alt='meat' id='meat' onClick={this.togglePopup} />
                    <img src={vegetable} alt='vegetable' id='vegetable' onClick={this.togglePopup} />
                    <img src={dairy} alt='dairy' id='dairy' onClick={this.togglePopup} />
                    <img src={grain} alt='grain' id='grain' onClick={this.togglePopup} />
                    <img src={fruit} alt='fruit' id='fruit' onClick={this.togglePopup} />
                    <img src={other} alt='other' id='other' onClick={this.togglePopup} />
                    </section>
                    { this.state.listOpen ? this.renderPopup() : null }
                    <img src={book} alt='recipe_book' className='recipes' onClick={this.handleRecipesClick} />
                </div>
            )        
        } else {
            return  <Error 
                        history={this.props.history}
                    />
        }
    };

    render(){
        return <>{this.renderView()}</>
    };
};