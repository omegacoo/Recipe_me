import React from 'react';

import Button from '../Button/Button';

import './Landing.css';

export default class Landing extends React.Component {

    render(){
        return(
            <div className='Landing'>
                <Button 
                    name={'Log in'}
                    target={'login'}
                />
                <Button 
                    name={'Register'}
                    target={'register'}
                />
                <Button 
                    name={'Guest'}
                    target={'inputselect'}
                />
            </div>
        );
    };
};