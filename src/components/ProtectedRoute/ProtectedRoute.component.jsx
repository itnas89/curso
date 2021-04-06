import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from 'react-redux'
 
export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isLogged = useSelector(state => state.isLogged)
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