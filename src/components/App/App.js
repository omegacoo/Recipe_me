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
                name: 'bouillan',
                id: '6'
            },
            {
                name: 'carrot',
                id: '7'
            },
            {
                name: 'chicken',
                id: '8'
            },
            {
                name: 'egg',
                id: '9'
            },
            {
                name: 'flour',
                id: '10'
            },
            {
                name: 'bacon',
                id: '11'
            }
        ],
        userIngredients: [],
        recipes: [
            {
                name: 'Soup',
                id: '1',
                ingredients: [
                    {
                        name: 'bouillan',
                        id: '6'
                    },
                    {
                        name: 'carrot',
                        id: '7'
                    },
                    {
                        name: 'chicken',
                        id: '8'
                    }
                ]
            },
            {
                name: 'Souffle',
                id: '2',
                ingredients: [
                    {
                        name: 'egg',
                        id: '9'
                    },
                    {
                        name: 'flour',
                        id: '10'
                    },
                    {
                        name: 'bacon',
                        id: '11'
                    }
                ]
            }
        ],
        availableRecipes: [],
        units: [
            'cups',
            'lbs',
            'Tbsps',
            'tsps',
            'ounces'
        ]
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
        this.setState({
            userIngredients: newIngredients
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