import React from 'react';

import './Register.css';

export default class Register extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
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
    
    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('implement registration!');
    };

    render(){
        return(
            <>
                <h1 className='Register_title'>You are on your way to some great meals! So close now...</h1>
                <form
                    className='Register'
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor='Register_username'>Username: </label>
                    <br/>
                    <input 
                        className='Register_username'
                        type='text'
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                    <br/>
                    <label htmlFor='Register_password'>Password: </label>
                    <br/>
                    <input 
                        className='Register_password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <br/>
                    <label htmlFor='Register_confirmPassword'>Confirm Password: </label>
                    <br/>
                    <input 
                        className='Register_confirmPassword'
                        type='password'
                        value={this.state.confirmPassword}
                        onChange={this.handleConfirmPasswordChange}
                    />
                    <br/>
                    <label htmlFor='Register_email'>Email: </label>
                    <br/>
                    <input 
                        className='Register_email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <br/>
                    <button 
                        type='submit'
                    >
                        Register
                    </button>
                </form>
            </>
        );
    };
};