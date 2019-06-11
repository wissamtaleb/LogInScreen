import React from 'react';
import {Component} from 'react';
import Route from 'react-router-dom/Route';
import {Redirect} from 'react-router-dom';
import Auth from './../services/auth';

const PrivateRoute = ({component: Component, ...rest}) => {

   
    let auth = new Auth();
    return (
        <Route
          {...rest}
          render={props => {
            if (auth.isAuthenticated()) {
              return <Component {...props} />;
            } else {
              return (
                <Redirect
                  to={{
                    pathname: "/",
                    state: {
                      from: props.location
                    }
                  }}
                />
              );
            }
          }}
        />
      );
    
}

export default PrivateRoute;

