import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Auth0Provider from './Auth0Propvider';

render(
  <Auth0Provider
    domain="dev-kkhcjgzr.auth0.com"
    client_id="A8wQfHM2yDjMz9Om78vEEwFT6EXxtyGy"
    redirect_uri="http://localhost:7890"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
