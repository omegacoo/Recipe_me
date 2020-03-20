import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import StoreContext from '../../StoreContext';

import './Button.css';

export default class Button extends React.Component {
    static contextType = StoreContext;
    static propTypes = {
        target: PropTypes.string.isRequired
    };

    render(){
        return(
            <Link 
                className='Button'
                to={this.props.target}
            >
                {this.props.name}
            </Link>
        );
    };
};