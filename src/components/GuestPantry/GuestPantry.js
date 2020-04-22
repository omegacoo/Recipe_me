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
import arrow from '../../assets/arrow.png';
import arrowAlt from '../../assets/arrowAlt.png';

import './GuestPantry.css';

export default class GuestPantry extends React.Component {
    static contextType = StoreContext;

    state = {
        currentList: '',
        listOpen: false,
        baseIngredients: this.context.guestIngredients,
        userIngredients: this.context.guestUserIngredients,
        guideStep: 1
    };

    renderGuide = () => {
        let element;

        switch (this.state.guideStep) {
            case 1:
                element = <img src={arrow} alt='arrow' className='arrow_one pulse' />
                break;
            case 2:
                element = <img src={arrow} alt='arrow' className='arrow_two pulse' />
                break;
            case 3:
                element = <img src={arrow} alt='arrow' className='arrow_three pulse' />
                break;  
            case 4:
                element = <img src={arrow} alt='arrow' className='arrow_four pulse' />
                break; 
            case 5:
                element = <img src={arrowAlt} alt='arrow' className='arrow_five pulse' />
                break;
            case 6:
                element = <img src={arrow} alt='arrow' className='arrow_six pulse' />
                break;
            case 7:
                element = <img src={arrow} alt='arrow' className='arrow_seven pulse' />
                break;
            case 8:
                element = <img src={arrowAlt} alt='arrow' className='arrow_eight pulse' />
                break;
            case 9:
                element = <img src={arrow} alt='arrow' className='arrow_nine pulse' />
                break;
            case 10:
                element = <img src={arrow} alt='arrow' className='arrow_ten pulse' />
                break;
            case 11:
                element = <img src={arrow} alt='arrow' className='arrow_eleven pulse' />
                break;
            case 12:
                element = <img src={arrowAlt} alt='arrow' className='arrow_twelve pulse' />
                break;
            case 13:
                element = <img src={arrow} alt='arrow' className='arrow_thirteen pulse' />
                break;
            default:
                break;
        };
        return element
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
            
            if(item.title === 'egg' && this.state.guideStep === 2){
                this.setState({
                    guideStep: 3
                });
            } else if(item.title === 'milk' && this.state.guideStep === 3){
                this.setState({
                    guideStep: 4
                });
            } else if(item.title === 'butter' && this.state.guideStep === 4){
                this.setState({
                    guideStep: 5
                });
            } else if(item.title === 'bread' && this.state.guideStep === 7){
                this.setState({
                    guideStep: 8
                });
            } else if(item.title === 'cinnamon' && this.state.guideStep === 10){
                this.setState({
                    guideStep: 11
                })
            } else if(item.title === 'maple syrup' && this.state.guideStep === 11){
                this.setState({
                    guideStep: 12
                });
            };
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
        if(this.state.guideStep === 1 && e.target.id === 'dairy'){
            this.setState({
                guideStep: 2
            });
        } else if(this.state.guideStep === 5){
            this.setState({
                guideStep: 6
            });
        } else if(this.state.guideStep === 6 && e.target.id === 'grain'){
            this.setState({
                guideStep: 7
            });
        } else if(this.state.guideStep === 8){
            this.setState({
                guideStep: 9
            });
        } else if(this.state.guideStep === 9 && e.target.id === 'condiment'){
            this.setState({
                guideStep: 10
            });
        } else if(this.state.guideStep === 12){
            this.setState({
                guideStep: 13
            });
        };

        this.setState({
            currentList: e.target.id,
            listOpen: !this.state.listOpen
        });
    };

    handleRecipesClick = () => {
        this.setState({
            guideStep: 1
        });

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
                { this.renderGuide() }
                <img src={book} alt='recipe_book' className='GuestPantry_recipes' onClick={this.handleRecipesClick} />
            </div>
        );
    };
};