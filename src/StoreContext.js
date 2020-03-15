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
});

export default StoreContext;