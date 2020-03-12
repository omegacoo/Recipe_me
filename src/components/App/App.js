import React from 'react';
import { Route } from 'react-router-dom';

import StoreContext from '../../StoreContext';

import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InputSelect from '../InputSelect/InputSelect';
import Ingredients from '../Ingredients/Ingredients';
import BackButton from '../BackButton/BackButton';

import './App.css';

export default class App extends React.Component {
    state = {
        ingredients: [
            {
                name: 'tomato',
                id: '1'
            },
            {
                name: 'radish',
                id: '2'
            },
            {
                name: 'ham',
                id: '3'
            },
            {
                name: 'parsley',
                id: '4'
            },
            {
                name: 'bread',
                id: '5'
            },
            {
                name: 'tomato',
                id: '6'
            },
            {
                name: 'radish',
                id: '7'
            },
            {
                name: 'ham',
                id: '8'
            },
            {
                name: 'parsley',
                id: '9'
            },
            {
                name: 'bread',
                id: '10'
            },
            {
                name: 'tomato',
                id: '11'
            },
            {
                name: 'radish',
                id: '12'
            },
            {
                name: 'ham',
                id: '13'
            },
            {
                name: 'parsley',
                id: '14'
            },
            {
                name: 'bread',
                id: '15'
            },
            {
                name: 'tomato',
                id: '16'
            },
            {
                name: 'radish',
                id: '17'
            },
            {
                name: 'ham',
                id: '18'
            },
            {
                name: 'parsley',
                id: '19'
            },
            {
                name: 'bread',
                id: '20'
            },
        ],
        userIngredients: [],
    }

    onLandingPageLoginClick = () => {
        console.log('onLandingPageLoginClick()');
    };

    handleAddNewIngredient = () => {
        this.setState({
            userIngredients: [
                ...this.state.userIngredients,
                {
                    name: '',
                    id: ''
                }
            ]
        });
    };

    submitNewIngredient = newIngredient => {
        let newUserIngredient = this.state.ingredients.find(i => i.name === newIngredient.name);

        this.setState({
            userIngredients: [
                ...this.state.userIngredients,
                newUserIngredient
            ]
        });
        console.log('here');
    };

    render(){
        let contextValue = {
            ingredients: this.state.ingredients,
            userIngredients: this.state.userIngredients,
            onLandingPageLoginClick: this.onLandingPageLoginClick,
            handleAddNewIngredient: this.handleAddNewIngredient,
            submitNewIngredient: this.submitNewIngredient,
        };

        return(
            <div className='App'>
                <StoreContext.Provider value={contextValue}>
                    <Header />
                    <Route 
                        exact path={'/'}
                        component={Landing}
                    />
                    <Route 
                        path={'/login'}
                        component={Login}
                    />
                    <Route 
                        path={'/register'}
                        component={Register}
                    />
                    <Route 
                        path={'/inputselect'}
                        component={InputSelect}
                    />
                    <Route 
                        path={'/ingredients'}
                        component={Ingredients}
                    />
                    <Route 
                        path={['/login',
                               '/register', 
                               '/inputselect',
                               '/ingredients',
                               '/recipes',
                               '/available']}
                        component={BackButton}
                    />
                </StoreContext.Provider>
            </div>
        );
    };
};