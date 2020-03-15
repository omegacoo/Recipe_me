import React from 'react';

import Button from '../Button/Button';

import './InputSelect.css';

export default class InputSelect extends React.Component {

    render(){
        return(
            <div className='InputSelect'>
                <Button 
                    name={'My Pantry'}
                    target={'pantry'}
                />
                <Button 
                    name={'Add Ingredients'}
                    target={'ingredients'}
                />
                <Button 
                    name={'My Makeable Recipes'}
                    target={'recipes'}
                />
            </div>
        );
    };
};