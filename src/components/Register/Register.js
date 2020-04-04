import React from 'react';

import config from '../../config';

import './Register.css';

export default class Register extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        error: null
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
        
        if(this.state.password !== this.state.confirmPassword){
            this.setState({
                error: 'passwords must match'
            });
            return false
        };
        
        const myBody = {
            user_name: this.state.username,
            password: this.state.password,
            email: this.state.email
        };

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const fetchOptions = {
            method: 'POST',
            body: JSON.stringify(myBody),
            headers: myHeaders
        };

        fetch(config.API_ENDPOINT + '/api/register', fetchOptions)
            .then(res => {
                if(!res.ok){
                    throw new Error(res.statusText)
                };
                console.log('User created successfully');
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    };

    render(){
        return(
            <div className='Register_main'>
                <h1 className='Register_title'>&nbsp;You are on your way to some great meals! So close now...</h1>
                <form
                    className='Register'
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor='Register_username'>Username</label>
                    <br/>
                    <input 
                        className='Register_username'
                        type='text'
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                    <br/>
                    <label htmlFor='Register_password'>Password</label>
                    <br/>
                    <input 
                        className='Register_password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <br/>
                    <label htmlFor='Register_confirmPassword'>Confirm Password</label>
                    <br/>
                    <input 
                        className='Register_confirmPassword'
                        type='password'
                        value={this.state.confirmPassword}
                        onChange={this.handleConfirmPasswordChange}
                    />
                    <br/>
                    <label htmlFor='Register_email'>Email</label>
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
            </div>
        );
    };
};