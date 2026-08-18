import React from 'react';
import { SEO } from '@components/ui/SEO';
import {Hero} from "@features/home/components/Hero.tsx";

export const HomePage: React.FC = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <SEO title="Home" description="Testing shadcn components with Tailwind v4." />
            <Hero />
        </main>
    );
};