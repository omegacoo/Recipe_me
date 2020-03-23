import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from '../../config';
import StoreContext from '../../StoreContext';

import logo from '../../assets/logo.png';

import './Header.css';

// TODO: There is going to need to be a state in the App component which keeps track
// TODO: of whether or not the user is logged in, this will control what they see and
// TODO: make some of the code on this component simpler.

export default class Header extends React.Component {
    static contextType = StoreContext;
    static propTypes = {
        location: PropTypes.object.isRequired
    };

    state = {
        username: '',
        password: '',
        logingIn: false,
        navigating: false
    };

    toggleLogin = () => {
        this.setState({
            logingIn: !this.state.logingIn
        });
    };

    toggleNav = () => {
        this.setState({
            navigating: !this.state.navigating
        });
    };

    handleLoginSubmit = e => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const myBody = JSON.stringify({ "user_name": this.state.username, "password": this.state.password });

        fetch(config.API_ENDPOINT + '/api/auth/login',  { method: 'POST', body: myBody, headers: myHeaders, credentials: 'include' })
            .then(res => {
                if(!res.ok){
                    throw new Error(res.status) 
                };
                return res.text()
            })
            .then(resText => {
                this.context.onLogin(this.state.username);
                this.toggleLogin();
                this.props.history.push('/pantry');
            })
            .catch(err => {
                console.log(err, myBody);
            })
            
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
                            />
                            <label htmlFor='login_password'>Password: </label>
                            <input
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                type='password'
                            />
                            <button className='login_button' type='submit'>login</button>
                            <Link className='forgotInfo' to={'/forgotinfo'}>forgot username/password?</Link>
                        </form>
                    </span>
                </div>
            )
        } else if(this.state.navigating){
            return(
                <div className='popupContainer'>
                    <span className='popup'>
                        <i className='closePopup far fa-times-circle' onClick={this.toggleNav} />
                            <ul className='navList'>
                                <li><Link className='navLink' onClick={this.toggleNav} to={'/pantry'}>Pantry</Link></li>
                                
                                <li><Link className='navLink' onClick={this.toggleNav} to={'/recipes'}>Recipes</Link></li>
                                
                                <li><Link className='navLink' onClick={this.toggleNav} to={'/'}>Home</Link></li>
                            </ul>
                    </span>
                </div>
            )
        }
    };

    renderLoginOrHamburger = () => {
        if(!this.context.loggedIn){
            return <i className='fas fa-key login_icon' onClick={this.toggleLogin} />
        }
        console.log();
        
        return <i className='fas fa-bars hamburger' onClick={this.toggleNav} />
    };

    render(){
        return(
        <header className='Header'>
            <img 
                src={logo} 
                className='logo'
                alt='Pantry Buddy logo'    
            />
            { this.renderLoginOrHamburger() }
            { this.renderPopup() }
        </header>
        );
    };
};