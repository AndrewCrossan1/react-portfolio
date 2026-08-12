import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@components/layout/Navbar';

export const Header: React.FC = () => {
    return (
        <header className="backdrop-blur-md sticky top-0 z-50 transition-colors">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                    Portfolio
                </Link>
                <Navbar />
            </div>
        </header>
    );
};