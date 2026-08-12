import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="border-b border-neutral-800/80 bg-neutral-900/40 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-sm font-medium tracking-tight text-neutral-100">Portfolio</div>
                <nav className="flex items-center gap-6 text-sm text-neutral-400">
                    <a href="/" className="hover:text-neutral-100 transition-colors">
                        Dashboard
                    </a>
                    <a href="/settings" className="hover:text-neutral-100 transition-colors">
                        Settings
                    </a>
                </nav>
            </div>
        </header>
    );
};
