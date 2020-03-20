import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './Header.css';

export default class Header extends React.Component {
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
        console.log('add login functionality');
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
        if(this.props.location.pathname === '/' && this.state.logingIn){
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
                            <li><Link className='navLink' onClick={this.toggleNav} to={'/recipes'}>Recipes</Link></li>
                            <li><Link className='navLink' onClick={this.toggleNav} to={'/ingredients'}>Ingredients</Link></li>
                            <li><Link className='navLink' onClick={this.toggleNav} to={'/'}>Home</Link></li>
                        </ul>
                    </span>
                </div>
            )
        }
    };

    render(){
        const { location } = this.props;

        return(
        <header className='Header'>
            <img 
                src={logo} 
                className='logo'
                alt='Pantry Buddy logo'    
            />
            {   location.pathname === '/' 
                ?  <i className='fas fa-key login_icon' onClick={this.toggleLogin} />
                : <i className='fas fa-bars hamburger' onClick={this.toggleNav}></i> 
            }
            { this.renderPopup() }
        </header>
        );
    };
};