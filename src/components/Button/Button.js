import React from 'react';
import { Link } from 'react-router-dom';

import StoreContext from '../../StoreContext';

import './Button.css';

class Button extends React.Component {
    static contextType = StoreContext;

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

Button.defaultProps = {
    target: '/'
};

export default Button;