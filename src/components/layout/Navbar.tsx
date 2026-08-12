import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '@components/layout/ThemeToggle';

export const Navbar: React.FC = () => {
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `text-sm transition-colors ${
            isActive
                ? 'text-neutral-900 dark:text-neutral-100 font-medium'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
        }`;

    return (
        <nav className="flex items-center gap-6">
            <NavLink to="/" className={navLinkClass} end>
                Home
            </NavLink>
            <ThemeToggle />
        </nav>
    );
};