import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Auth from './Auth';
import { AuthProvider, useAuth } from './hooks/auth';
import { ThemeProvider } from './hooks/themes';

const RenderComponent = () => {
    const { logged } = useAuth();
    return logged ? <App /> : <Auth />;
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
    );
    
    root.render(
    <ThemeProvider>
        <AuthProvider>
            <RenderComponent />
        </AuthProvider>
    </ThemeProvider>
);