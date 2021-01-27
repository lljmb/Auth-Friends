import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return(<Route 
    {...rest}
    render={(props) => {
        // see if token exists
        if(localStorage.getItem('token')){
            // if it does, return component passed into app
            return <Component {...props}/>
        } else {
            // if it does not, redirect to login page
            return <Redirect to='/login'/>
        }
    }} />)
}

export default PrivateRoute