import React from 'react';
import { Link } from 'react-router-dom';

import StoreContext from '../../../StoreContext';

import './Button.css';

export default class Button extends React.Component {
    static contextType = StoreContext;

    render(){
        return(
            <Link 
                className='Button'
                to={this.props.name === 'guest' ? '/inputSelect' : `/${this.props.name}`}
            >
                {this.props.name}
            </Link>
        );
    };
};