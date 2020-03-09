import React from 'react';
import { Route } from 'react-router-dom';

import StoreContext from '../../StoreContext';

import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';

import './App.css';

export default class App extends React.Component {

    onLandingPageLoginClick = () => {
        console.log('onLandingPageLoginClick()');
    };

    render(){
        let contextValue = {
            onLandingPageLoginClick: this.onLandingPageLoginClick,
        };

        return(
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
            </StoreContext.Provider>
        );
    };
};