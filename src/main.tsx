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
  </React.StrictMode>
);
