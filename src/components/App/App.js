import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StoreContext from '../../StoreContext';
import config from '../../config';

import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
import BackButton from '../BackButton/BackButton';
import Pantry from '../Pantry/Pantry';
import Recipes from '../Recipes/Recipes';
import GuestPantry from '../GuestPantry/GuestPantry';
import GuestRecipes from '../GuestRecipes/GuestRecipes';

import sampleData from '../../sampleData';

import './App.css';

export default class App extends React.Component {
    state = {
        baseIngredients: [],
        userIngredients: [],
        availableRecipes: [],
        recipes: [],
        availableGuestRecipes: [],
        loggedIn: false,
        userName: '',
        guestIngredients: sampleData.sampleIngredients,
        guestRecipes: sampleData.sampleRecipes,
        guestUserIngredients: []
    };

    componentDidMount = () => {
        this.fetchIngredients();
    };

    handleTokenRefresh = () => {
        if(this.state.loggedIn){
            console.log('logged in!');
        };
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

    setAvailableGuestRecipes = () => {
        let availableGuestRecipes = [];
        let ing = this.state.guestUserIngredients.map(i => i.id);

        if(this.state.guestUserIngredients.length <= 0){
            return false
        };

        this.state.guestRecipes.map(r => {
            let rKey = r.ingredients.values();
            for(const key of rKey){
                if(!ing.includes(key.id)){
                    return false
                };
            };
            availableGuestRecipes.push(r);
            return true
        });
        
        this.setState({
            availableGuestRecipes
        });
    };

    updateUserIngredients = userIngredients => {
        this.setState({
            userIngredients
        });
    };

    updateGuestUserIngredients = guestUserIngredients => {
        this.setState({
            guestUserIngredients
        });
    };

    onLogin = userName => {
        let properUserName = userName[0].toUpperCase() + userName.slice(1);
        
        this.setState({
            loggedIn: true,
            userName: properUserName
        });
    };

    // Goal is to POST updated userIngredients and receive updated available recipes
    fetchRecipes = () => {
        const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        const myHeaders = new Headers();
        myHeaders.append("Cookies", cookie);

        fetch(config.API_ENDPOINT + '/api/recipes', { headers: myHeaders })
            .then(res => {
                if(!res.ok){
                    this.setState({
                        loggedIn: false
                    });
                    throw new Error(res.statusText)
                };
                return res.json()
            })
            .then(resJson => {
                this.setState({
                    recipes: resJson
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    render(){
        let contextValue = {
            baseIngredients: this.state.baseIngredients,
            availableRecipes: this.state.availableRecipes,
            availableGuestRecipes: this.state.availableGuestRecipes,
            userIngredients: this.state.userIngredients,
            loggedIn: this.state.loggedIn,
            userName: this.state.userName,
            guestIngredients: this.state.guestIngredients,
            guestUserIngredients: this.state.guestUserIngredients,
            updateUserIngredients: this.updateUserIngredients,
            onLogin: this.onLogin,
            updateGuestUserIngredients: this.updateGuestUserIngredients,
            setAvailableGuestRecipes: this.setAvailableGuestRecipes,
            fetchRecipes: this.fetchRecipes,
        };

        return(
            <div className='App'>
                <StoreContext.Provider value={contextValue}>
                    <Route 
                        component={Header}
                    />
                    <Route 
                        exact path={'/'}
                        component={Landing}
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
                        path={'/register'}
                        component={Register}
                    /> 
                    <Route 
                        path={'/guestpantry'}
                        component={GuestPantry}
                    />
                    <Route 
                        path={'/guestrecipes'}
                        component={GuestRecipes}
                    />
                    <Route 
                        path={['/register',
                            '/guestpantry',
                            '/guestrecipes']}
                        component={BackButton}
                    />
                </StoreContext.Provider>
            </div>
        );
    };
};