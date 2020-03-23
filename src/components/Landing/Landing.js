import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.css';

export default class Landing extends React.Component {

    render(){
        return(
            <div className='Landing'>
                <h1 className='description'>&nbsp;Ever wonder what you could throw together with all the odds and ends in your pantry?</h1>
                <Link className='landingButton' to={'/guestpantry'}>
                    Take a tour!
                </Link>
                <Link className='landingButton' to={'/register'}>
                    Register
                </Link>
            </div>
        );
    };
};