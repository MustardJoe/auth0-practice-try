import React from 'react';
import Play from './Play';
import PlayHooks from './PlayHooks';
import { useAuth0 } from '../Auth0Propvider';


export default function App() {
  const { isAuthenticated, user, loading, auth0Client } = useAuth0;
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();



  return (
    <>
      <h1>Hello World</h1>;
      <Play />
      <PlayHooks />
    </>
    
  );
}
