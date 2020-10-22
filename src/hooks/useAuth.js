import React, {
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react';
import fakeAuth from 'fake-auth';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{ children }</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return fakeAuth
      .signin(email, password)
      .then((response) => {
        setUser(response.email);
        return response.email;
      });
  };

  const signup = (email, password) => {
    return fakeAuth
      .signup(email, password)
      .then((response) => {
        setUser(response.email);
        return response.email;
      });
  };

  const signout = () => {
    return fakeAuth
      .signout()
      .then(() => {
        setUser(false);
      });
  };

  const getAccessToken = () => {
    return fakeAuth
      .getAccessToken();
  }

  useEffect(() => {
    const unsubscribe = fakeAuth.onChange((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    getAccessToken,
  };
}
