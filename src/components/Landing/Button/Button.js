import React from 'react';

import './Button.css';

export default class Button extends React.Component {

    render(){
        return(
            <div className='Button'>
                {this.props.name}
            </div>
        );
    };
};