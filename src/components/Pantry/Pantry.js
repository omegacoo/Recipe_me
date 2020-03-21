import React from 'react';

import StoreContext from '../../StoreContext';

import './Pantry.css';

export default class Pantry extends React.Component {

    render(){
        return(
            <div className='Pantry'>
                <h1 className='Pantry_title'>&nbsp;Let's fill that Pantry, buddy!</h1>
                <section className='Pantry_icons'>
                    <i className='fas fa-drumstick-bite Pantry_meats'></i>
                    <i className='fas fa-carrot Pantry_vegetables'></i>
                    <i className='fas fa-cheese Pantry_dairy'></i>
                    <i className='fas fa-bread-slice Pantry_grains'></i>
                    <i className='fas fa-apple-alt Pantry_fruits'></i>
                    <i className='fas fa-mortar-pestle Pantry_condiments'></i>
                </section>
            </div>
        );
    };
};