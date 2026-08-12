import React from 'react';
import { SEO } from '@components/ui/SEO';
import { useHome } from './hooks/useHome';

export const HomePage: React.FC = () => {
    useHome();

    return (
        <>
            <SEO title="Home" description="Explore home details and features." />
            <div className="space-y-6">
                <div className="border-b border-neutral-800 pb-5">
                    <h1 className="text-2xl font-semibold tracking-tight text-neutral-100">Home</h1>
                    <p className="mt-1 text-sm text-neutral-400">
                        Welcome to the home feature page.
                    </p>
                </div>
            </div>
        </>
    );
};
