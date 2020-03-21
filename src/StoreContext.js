import React from 'react';

const StoreContext = React.createContext({
    ingredients: [],
    userIngredients: [],
    availableRecipes: [],
    loggedIn: Boolean,
    userName: '',
    onLandingPageLogInClick: () => {},
    onLandingPageRegisterClick: () => {},
    onLandingPageGuestClick: () => {},
    updateUserIngredients: () => {},
    onLogin: () => {},
});

export default StoreContext;