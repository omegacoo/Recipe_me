import React from 'react';

const StoreContext = React.createContext({
    ingredients: [],
    userIngredients: [],
    recipes: [],
    onLandingPageLogInClick: () => {},
    onLandingPageRegisterClick: () => {},
    onLandingPageGuestClick: () => {},
    handleAddNewIngredient: () => {},
    submitNewIngredient: () => {},
});

export default StoreContext;