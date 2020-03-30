import React from 'react';

const StoreContext = React.createContext({
    ingredients: [],
    userIngredients: [],
    availableRecipes: [],
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
    onLogout: () => {},
    updateGuestUserIngredients: () => {},
    setAvailableGuestRecipes: () => {},
    fetchUserIngredients: () => {},
});

export default StoreContext;