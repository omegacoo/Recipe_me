import React from 'react';

const StoreContext = React.createContext({
    ingredients: [],
    userIngredients: [],
    availableGuestRecipes: [],
    guestIngredients: [],
    guestUserIngredients: [],
    loggedIn: Boolean,
    userName: '',
    onLandingPageLogInClick: () => {},
    onLandingPageRegisterClick: () => {},
    onLandingPageGuestClick: () => {},
    updateUserIngredients: () => {},
    onLogin: () => {},
    updateGuestUserIngredients: () => {},
    setAvailableGuestRecipes: () => {},
});

export default StoreContext;