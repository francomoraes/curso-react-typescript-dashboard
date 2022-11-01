import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Auth from './Auth';
import { ThemeProvider } from './hooks/themes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider>
    {/* <App /> */}
    <Auth />
  </ThemeProvider>
);
