import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';

// App is the root component of our application.
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

