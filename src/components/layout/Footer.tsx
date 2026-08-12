import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-950 py-8 mt-auto transition-colors">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600 dark:text-neutral-400">
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};