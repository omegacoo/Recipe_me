import React from 'react';
import { Route } from 'react-router-dom';

import StoreContext from '../../StoreContext';
import config from '../../config';

import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
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
        userId: null,
        guestIngredients: sampleData.sampleIngredients,
        guestRecipes: sampleData.sampleRecipes,
        guestUserIngredients: []
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

    fetchUserIngredients = userId => {
        const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        const myHeaders = new Headers();
        myHeaders.append("Cookies", cookie);
        myHeaders.append('user_id', userId);

        fetch(config.API_ENDPOINT + '/api/user_ingredients', { headers: myHeaders })
            .then(res => {
                if(!res.ok){
                    throw new Error(res.statusText)
                };
                return res.json()
            })
            .then(resJson => {
                let newRes = resJson.map(i => i = this.state.ingredients.find(({ id }) => id === i.ingredient_id));
                
                this.setState({
                    userIngredients: newRes
                })
            })
            .catch(err => {
                console.log(err);
            })
    };

    fetchAvailableRecipes = userId => {
        const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        const myHeaders = new Headers();
        myHeaders.append("Cookies", cookie);
        myHeaders.append('user_id', userId);

        fetch(config.API_ENDPOINT + '/api/available_recipes', { headers: myHeaders })
            .then(res => {
                if(!res.ok){
                    throw new Error(res.statusText)
                };
                return res.json();                                
            })
            .then(resJson => {
                this.setState({
                    availableRecipes: resJson
                })
            })
            .catch(err => {
                console.log(err);                
            })
    };

    setAvailableGuestRecipes = () => {
        let availableGuestRecipes = [];
        let ingredients = this.state.guestUserIngredients.map(i => i.id);

        if(this.state.guestUserIngredients.length <= 0){
            return false
        };

        this.state.guestRecipes.map(r => {
            let rKey = r.ingredients.values();
            for(const key of rKey){
                if(!ingredients.includes(key)){
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
        const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

        this.setState({
            userIngredients
        });

        userIngredients = userIngredients.map(i => i = { ingredient_id: i.id, user_id: this.state.userId });
        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");  
        myHeaders.append("user_id", this.state.userId);
        myHeaders.append("cookies", cookie);

        const fetchOptions = {
            method: 'POST',
            body: JSON.stringify(userIngredients),
            headers: myHeaders
        };
        

        fetch(config.API_ENDPOINT + '/api/user_ingredients', fetchOptions)
            .then(res => {
                if(!res.ok){
                    throw new Error(res.statusText)
                };
                this.fetchAvailableRecipes(this.state.userId);
            })
            .catch(err => {
                console.log(err);                
            })
    };

    updateGuestUserIngredients = guestUserIngredients => {
        this.setState({
            guestUserIngredients
        });
    };

    onLogin = (userName, userId) => {
        let properUserName = userName[0].toUpperCase() + userName.slice(1);
        userId = parseInt(userId);

        this.setState({
            loggedIn: true,
            userName: properUserName,
            userId
        },            
            this.fetchUserIngredients(userId),
            this.fetchAvailableRecipes(userId)
        );
    };

    onLogout = () => {
        let cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        };
        
        this.setState({
            loggedIn: false,
            userName: '',
            userId: null
        });
    };

    render(){
        let contextValue = {
            baseIngredients: this.state.baseIngredients,
            availableRecipes: this.state.availableRecipes,
            availableGuestRecipes: this.state.availableGuestRecipes,
            userIngredients: this.state.userIngredients,
            ingredients: this.state.ingredients,
            loggedIn: this.state.loggedIn,
            userName: this.state.userName,
            guestIngredients: this.state.guestIngredients,
            guestUserIngredients: this.state.guestUserIngredients,
            updateUserIngredients: this.updateUserIngredients,
            onLogin: this.onLogin,
            onLogout: this.onLogout,
            updateGuestUserIngredients: this.updateGuestUserIngredients,
            setAvailableGuestRecipes: this.setAvailableGuestRecipes,
            fetchUserIngredients: this.fetchUserIngredients
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
                </StoreContext.Provider>
                <div className='landscape_notice' >
                    <h1>Please rotate your device</h1>
                    <h3>We don't support landscape mode yet. Please go back to portrait mode for the best experience.</h3>
                </div>
            </div>
        );
    };
};