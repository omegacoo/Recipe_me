import React from 'react';

import './BackButton.css';

export default class BackButton extends React.Component {
    handleClick = () => {
        this.props.history.push('/');
    };

    render(){
        return(
            <button 
                className='BackButton'
                onClick={this.handleClick}
            >
                back
            </button>
        );
    };
};