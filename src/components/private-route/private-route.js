import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();

  return (
    <Route { ...rest } render={(props) => (
      auth.getAccessToken()
        ? <Component { ...props} />
        : <Redirect to={{
            pathname: "/",
            state: { from: props.location }
          }} />
    )} />  
  );
};

export default PrivateRoute;

