import React from 'react';

import './Login.css';

export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
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

    handleSubmit = e => {
        e.preventDefault();
    };

    render(){
        return(
            <form 
                className='Login'
                onSubmit={this.handleSubmit}
            >
                <label htmlFor='Login_username'>Username: </label>
                <input 
                    className='Login_username'
                    type='text'
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                /><br></br>
                <label htmlFor='Login_password'>Password: </label>
                <input 
                    className='Login_password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <button
                    type='submit'
                >
                    Login
                </button>
            </form>
        );
    };
};