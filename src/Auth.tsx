import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/themes';
import AuthRoutes from './routes/authRoutes';

const Auth: React.FC = () => {
    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthRoutes/>
        </ThemeProvider>
    );
};

export default Auth;
