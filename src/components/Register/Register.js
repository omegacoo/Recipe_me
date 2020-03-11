import React from 'react';

import './Register.css';

export default class Register extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: ''
    };

    handleUsernameChange = e => {
        this.setState({
            username: e.target.value
        });
    };

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    };

    handleConfirmPasswordChange = e => {
        this.setState({
            confirmPassword: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render(){
        return(
            <form
                className='Register'
                onSubmit={this.handleSubmit}
            >
                <label htmlFor='Register_username'>Username: </label>
                <input 
                    className='Register_username'
                    type='text'
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                /><br/>
                <label htmlFor='Register_password'>Password: </label>
                <input 
                    className='Register_password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                /><br/>
                <label htmlFor='Register_confirmPassword'>Confirm Password: </label>
                <input 
                    className='Register_confirmPassword'
                    type='password'
                    value={this.state.confirmPassword}
                    onChange={this.handleConfirmPasswordChange}
                />
                <button 
                    type='submit'
                >
                    Register
                </button>
            </form>
        );
    };
};