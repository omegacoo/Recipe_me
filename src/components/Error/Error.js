import React from 'react';

import { BrowserHistory } from 'react-router';

import './Error.css';

export default class Error extends React.Component {

    goHome = () => {
        this.props.history.push('/');
    };

    render(){
        return(
            <div className='Error'>
                An error has occured.
                <button onClick={this.goHome}>Return Home</button>
            </div>
        );
    };
};