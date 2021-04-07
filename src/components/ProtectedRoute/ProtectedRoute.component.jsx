import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={ props => {
                if(isLogged) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/' />
                }
            }}
        />
    );
};
