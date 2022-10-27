import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import Dashboard from './Pages/Dashboard';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
                <Dashboard />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
