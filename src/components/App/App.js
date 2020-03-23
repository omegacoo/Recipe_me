import React from 'react';
import { Route } from 'react-router-dom';

import StoreContext from '../../StoreContext';
import config from '../../config';

import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
import BackButton from '../BackButton/BackButton';
import Pantry from '../Pantry/Pantry';
import Recipes from '../Recipes/Recipes';
import GuestPantry from '../GuestPantry/GuestPantry';

import sampleData from '../../sampleData';

import './App.css';

export default class App extends React.Component {
    state = {
        baseIngredients: [],
        userIngredients: [],
        recipes: sampleData.sampleRecipes,
        availableRecipes: [],
        loggedIn: false,
        userName: ''
    };

    componentDidMount = () => {
        this.fetchIngredients();
    };

    fetchIngredients(){
        fetch(config.API_ENDPOINT + '/api/ingredients')
            .then(res => {
                if(!res.ok){
                    throw new Error(res.statusText)
                };
                return res.json()
            })
            .then(resJson => {
                this.setState({
                    baseIngredients: resJson,
                    ingredients: resJson
                });
            })
            .catch(err => {
                console.log(err)
            })
    };

    onLandingPageLoginClick = () => {
        console.log('onLandingPageLoginClick()');
    };

    setAvailableRecipes = () => {
        let availableRecipes = [];
        let ing = this.state.userIngredients.map(i => i.id);

        if(this.state.userIngredients.length <= 0){
            return false
        };

        this.state.recipes.map(r => {
            let rKey = r.ingredients.values();
            for(const key of rKey){
                if(!ing.includes(key.id)){
                    return false
                };
            };
            availableRecipes.push(r);
            return true
        });
        
        this.setState({
            availableRecipes
        });
    };

    updateUserIngredients = userIngredients => {
        this.setState({
            userIngredients
        });
    };

    onLogin = userName => {
        let properUserName = userName[0].toUpperCase() + userName.slice(1);
        this.setState({
            loggedIn: true,
            userName: properUserName
        });
    };

    render(){
        let contextValue = {
            baseIngredients: this.state.baseIngredients,
            availableRecipes: this.state.availableRecipes,
            userIngredients: this.state.userIngredients,
            loggedIn: this.state.loggedIn,
            userName: this.state.userName,
            onLandingPageLoginClick: this.onLandingPageLoginClick,
            updateUserIngredients: this.updateUserIngredients,
            onLogin: this.onLogin,
        };

        return(
            <div className='App'>
                <StoreContext.Provider value={contextValue}>
                    <Route 
                        path={'/'}
                        component={Header}
                    />
                    <Route 
                        exact path={'/'}
                        component={Landing}
                    />
                    <Route 
                        path={'/register'}
                        component={Register}
                    />
                    <Route 
                        path={'/pantry'}
                        component={Pantry}
                    />
                    <Route 
                        path={'/recipes'}
                        component={Recipes}
                    />
                    <Route 
                        path={'/guestpantry'}
                        component={GuestPantry}
                    />
                    <Route 
                        path={['/login',
                               '/register', 
                               '/inputselect',
                               '/ingredients',
                               '/recipes',
                               '/available',
                               '/pantry',
                               '/guestpantry',
                               '/guestrecipes']}
                        component={BackButton}
                    />
                </StoreContext.Provider>
            </div>
        );
    };
};