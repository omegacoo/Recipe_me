import React from 'react';
import { Route } from 'react-router-dom';

import StoreContext from '../../StoreContext';

import Landing from '../Landing/Landing';

import './App.css';

export default class App extends React.Component {

    render(){
        let contextValue = {

        };

        return(
            <StoreContext.Provider value={contextValue}>
                <header>
                    <h1>Recipe Me</h1>
                </header>
                <Route 
                    exact path={'/'}
                    component={Landing}
                />
            </StoreContext.Provider>
        );
    };
};