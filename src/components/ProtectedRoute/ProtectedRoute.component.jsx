<<<<<<< HEAD
import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
=======
import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from 'react-redux'
 
export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isLogged = useSelector(state => state.isLogged)
>>>>>>> origin/tema_8
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
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/tema_8
