import React from 'react';

const StoreContext = React.createContext({
    ingredients: [],
    userIngredients: [],
    onLandingPageLogInClick: () => {},
    onLandingPageRegisterClick: () => {},
    onLandingPageGuestClick: () => {},
    handleAddNewIngredient: () => {},
    submitNewIngredient: () => {},
});

export default StoreContext;