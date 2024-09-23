import React from 'react';
import { useRouter } from 'next/router';
import HomePage from './app/page';
import AuthPage from './app/auth/page';

const App = () => {
    const router = useRouter();

    return (
        <div className="container">
            <header className="header">
                <img src="/logo.png" alt="Logo" className="logo" />
            </header>
            <main className="main-content">
                {router.pathname === '/' && <HomePage />}
                {router.pathname === '/auth' && <AuthPage />}
            </main>
            <footer className="footer">
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">Tienda</li>
                        <li className="nav-item">Mis eSIMs</li>
                        <li className="nav-item">Perfil</li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default App;