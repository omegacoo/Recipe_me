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
            username: e.target.value,
            error: null
        });
    };

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value,
            error: null
        });
    };

    handleConfirmPasswordChange = e => {
        this.setState({
            confirmPassword: e.target.value,
            error: null
        });
    };
    
    handleEmailChange = e => {
        this.setState({
            email: e.target.value,
            error: null
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        
        if(this.state.password !== this.state.confirmPassword){
            this.setState({
                error: 'passwords must match'
            });
            return false
        } else if(this.state.username.length < 3){
            this.setState({
                error: 'username must be at least 3 characters'
            });
            return false
        } else if(this.state.password.length < 6){
            this.setState({
                error: 'password must be at least 6 characters'
            });
            return false
        } else if(!this.validateEmail(this.state.email)){
            this.setState({
                error: 'please enter a valid email address'
            });
            return false
        };
        
        const myBody = {
            user_name: this.state.username.toLowerCase(),
            password: this.state.password,
            email: this.state.email.toLowerCase()
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
                if(res.ok){
                    console.log('User created successfully');
                    this.props.history.push('/');
                };
                res = res.json()
                    .then(resJson => {
                        if(!res.ok){
                            throw new Error(resJson.error.message)   
                        };
                    })
                    .catch(err => {
                        if(err.message === 'Username or email is already in use'){
                            this.setState({
                                error: err.message
                            });
                        };
                    })
            })
    };

    validateEmail(email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return true
        }
            return false
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
                    {this.state.error ? <h3 id='Register_error' role='error'>{this.state.error}</h3> : null}
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