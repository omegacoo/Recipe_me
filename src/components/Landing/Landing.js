import React from 'react';

import Button from '../Button/Button';

import './Landing.css';

export default class Landing extends React.Component {

    render(){
        return(
            <div className='Landing'>
                <Button 
                    name={'login'}
                />
                <Button 
                    name={'register'}
                />
                <Button 
                    name={'guest'}
                />
            </div>
        );
    };
};