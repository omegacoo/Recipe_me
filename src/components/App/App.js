import React from 'react';
import { Route } from 'react-router-dom';

import StoreContext from '../../StoreContext';

import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InputSelect from '../InputSelect/InputSelect';
import Ingredients from '../Ingredients/Ingredients';
import Recipes from '../Recipes/Recipes';
import BackButton from '../BackButton/BackButton';
import sampleData from '../../sampleData';

import './App.css';

export default class App extends React.Component {
    state = {
        ingredients: sampleData.sampleIngredients,
        userIngredients: [],
        recipes: sampleData.sampleRecipes,
        availableRecipes: [],
        units: sampleData.sampleUnits
    }

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

    submitNewIngredients = newIngredients => {
        let newFilteredIngredients = newIngredients.filter(i => !this.state.userIngredients.includes(i));
        this.setState({
            userIngredients: [
                ...this.state.userIngredients,
                ...newFilteredIngredients
            ]
        },
            this.setAvailableRecipes
        );
    };

    render(){
        let contextValue = {
            ingredients: this.state.ingredients,
            availableRecipes: this.state.availableRecipes,
            userIngredients: this.state.userIngredients,
            units: this.state.units,
            onLandingPageLoginClick: this.onLandingPageLoginClick,
            submitNewIngredients: this.submitNewIngredients,
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
                        path={'/recipes'}
                        component={Recipes}
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