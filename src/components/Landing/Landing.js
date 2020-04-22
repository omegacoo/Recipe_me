import React from 'react';

import registerImage from '../../assets/register.png';
import tourImage from '../../assets/tour.png';

import './Landing.css';

export default class Landing extends React.Component {
    handleRegisterClick = () => {
        this.props.history.push('/register');
    };

    handleTourClick = () => {
        this.props.history.push('/guestpantry');
    };

    render(){
        return(
            <div className='Landing'>
                <h1 className='description'>&nbsp;Ever wonder what you could throw together with all the odds and ends in your pantry?</h1>
                <img src={tourImage} alt='tour' className='tourButton' onClick={this.handleTourClick} />
                <img src={registerImage} alt='register' className='registerButton' onClick={this.handleRegisterClick} />
                <p className='version'>Beta v1.0.0</p>
            </div>
        );
    };
};