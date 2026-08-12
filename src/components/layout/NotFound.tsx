import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@components/ui/SEO';

export const NotFound: React.FC = () => {
    return (
        <>
            <SEO
                title="404 - Page Not Found"
                description="The page you are looking for does not exist."
            />
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
                    404 Error
                </span>
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
                    Page not found
                </h1>
                <p className="mt-3 text-sm text-neutral-400 max-w-sm">
                    Sorry, the page you are looking for doesn't exist or has been relocated.
                </p>
                <div className="mt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-neutral-950 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </>
    );
};