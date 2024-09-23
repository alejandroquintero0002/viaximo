import React from 'react';
import HomePage from './app/page';
import AuthPage from './app/auth/page';
import { SpeedInsights } from "@vercel/speed-insights/next"
const App = () => {
    return (
        <>
            <SpeedInsights />
            <HomePage />
            <AuthPage />
        </>
    );
};

export default App;