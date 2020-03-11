import React from 'react';

import Button from '../Button/Button';

import './InputSelect.css';

export default class InputSelect extends React.Component {

    render(){
        return(
            <div className='InputSelect'>
                <Button 
                    name={'ingredients'}
                />
                <Button 
                    name={'recipes'}
                />
            </div>
        );
    };
};