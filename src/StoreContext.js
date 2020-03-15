import React from 'react';

const StoreContext = React.createContext({
    ingredients: [],
    userIngredients: [],
    availableRecipes: [],
    units: [],
    onLandingPageLogInClick: () => {},
    onLandingPageRegisterClick: () => {},
    onLandingPageGuestClick: () => {},
    submitNewIngredients: () => {},
    submitRemainingIngredients: () => {},
});

export default StoreContext;