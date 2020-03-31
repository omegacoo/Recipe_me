import React from 'react';
import { Link } from 'react-router-dom';

import registerImage from '../../assets/register.png';

import './Landing.css';

export default class Landing extends React.Component {
    handleRegisterClick = () => {
        this.props.history.push('/register');
    };

    render(){
        return(
            <div className='Landing'>
                <h1 className='description'>&nbsp;Ever wonder what you could throw together with all the odds and ends in your pantry?</h1>
                <Link className='landingButton' to={'/guestpantry'}>
                    Take a tour!
                </Link>
                <img src={registerImage} alt='register image' className='registerButton' onClick={this.handleRegisterClick} />
                <p className='version'>Alpha v2.4.0</p>
            </div>
        );
    };
};