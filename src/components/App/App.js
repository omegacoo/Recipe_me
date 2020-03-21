import React from 'react';
import { Route } from 'react-router-dom';

import StoreContext from '../../StoreContext';
import config from '../../config';

import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
import BackButton from '../BackButton/BackButton';
import Pantry from '../Pantry/Pantry';

import sampleData from '../../sampleData';

import './App.css';

export default class App extends React.Component {
    state = {
        baseIngredients: [],
        ingredients: [],
        userIngredients: [],
        recipes: sampleData.sampleRecipes,
        availableRecipes: []
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

    componentDidMount(){
        this.fetchIngredients();
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

    setAvailableIngredients = () => {
        let leftoverUserIngredients = this.state.baseIngredients.filter(i => !this.state.userIngredients.includes(i));
        this.setState({
            ingredients: leftoverUserIngredients
        },
            this.setAvailableRecipes
        );
    };

    submitNewIngredients = newIngredients => {
        let newFilteredIngredients = newIngredients.filter(i => !this.state.userIngredients.includes(i));
        this.setState({
            userIngredients: [
                ...this.state.userIngredients,
                ...newFilteredIngredients
            ]
        },
            this.setAvailableIngredients
        );
    };

    submitRemainingIngredients = remainingIngredients => {
        this.setState({
            userIngredients: remainingIngredients
        },
            this.setAvailableIngredients
        );
    };

    render(){
        let contextValue = {
            ingredients: this.state.ingredients,
            availableRecipes: this.state.availableRecipes,
            userIngredients: this.state.userIngredients,
            onLandingPageLoginClick: this.onLandingPageLoginClick,
            submitNewIngredients: this.submitNewIngredients,
            submitRemainingIngredients: this.submitRemainingIngredients
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
                        path={['/login',
                               '/register', 
                               '/inputselect',
                               '/ingredients',
                               '/recipes',
                               '/available',
                               '/pantry']}
                        component={BackButton}
                    />
                </StoreContext.Provider>
            </div>
        );
    };
};