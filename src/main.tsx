<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppRouter from './routes/AppRouter';
import { FakeAuthContextProvider } from './store/FakeAuthContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <FakeAuthContextProvider>
            <AppRouter />
        </FakeAuthContextProvider> */}
>>>>>>> 78772f68ea1b34cf6efa3b470840c3d51870df50
  </React.StrictMode>
);
