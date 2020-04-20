import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import StoreContext from '../../StoreContext';

import logo from '../../assets/pantry.webp';

import './Header.css';

export default class Header extends React.Component {
    static contextType = StoreContext;

    state = {
        username: '',
        password: '',
        userId: null,
        logingIn: false,
        error: null,
    };

    toggleLogin = () => {
        this.setState({
            logingIn: !this.state.logingIn
        });
    };

    handleLoginSubmit = e => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const myBody = JSON.stringify({ "user_name": this.state.username, "password": this.state.password });

        fetch(config.API_ENDPOINT + '/api/auth/login',  { method: 'POST', body: myBody, headers: myHeaders })
            .then(res => {
                if(res.status === 401){
                    throw new Error('Incorrect user_name or password') 
                };
                this.setState({
                    error: null
                });
                
                const Xtoken = res.headers.get('X-token');
                const userId = res.headers.get('user_id');

                this.setState({
                    userId
                });
                
                document.cookie = `token=${Xtoken}`;
                                 
                return res.text()
            })
            .then(resText => {    
                this.context.onLogin(this.state.username, this.state.userId);
                this.toggleLogin();
                this.props.history.push('/pantry');
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            })
            
    };

    logOut = () => {
        this.setState({
            user_name: '',
            password: '',
            userId: null,
            logingIn: false
        },
            this.context.onLogout()
        );
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

    renderPopup = () => {
        if(!this.context.loggedIn && this.state.logingIn){
            return(
                <div className='popupContainer'>
                    <span className='popup'>
                        <i className='closePopup far fa-times-circle' onClick={this.toggleLogin} />
                        <form 
                            className='login_form'
                            onSubmit={this.handleLoginSubmit}
                        >
                            <label htmlFor='login_username'>Username: </label>
                            <input 
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                                type='text'
                                autoFocus
                            />
                            <label htmlFor='login_password'>Password: </label>
                            <input
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                type='password'
                            />
                            {this.state.error ? <h3 id='Login_error' role='error'>{this.state.error}</h3> : null}
                            <button className='login_button' type='submit'>login</button>
                        </form>
                    </span>
                </div>
            )
        };
    };

    renderLoginOrLogout = () => {
        if(!this.context.loggedIn && !this.state.logingIn){
            return <i className='fas fa-key login_icon' onClick={this.toggleLogin} />
        } else if(this.context.loggedIn && !this.state.logingIn){
            return <Link className='log_out' onClick={this.logOut} to={'/'}>logout</Link>
        };    
    };

    render(){
        return(
        <header className='Header'>
            <img 
                src={logo} 
                className='logo'
                alt='Pantry Buddy logo'
                onClick={() => this.props.history.push('/')}  
            />
            { this.renderLoginOrLogout() }
            { this.renderPopup() }
        </header>
        );
    };
};