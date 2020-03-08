import React from 'react';

const StoreContext = React.createContext({
    onLandingPageLogInClick: () => {},
    onLandingPageRegisterClick: () => {},
    onLandingPageGuestClick: () => {},
});

export default StoreContext;