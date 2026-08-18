import React from 'react';
import { SEO } from '@components/ui/SEO';
import { InteractiveCV } from './components/InteractiveCV';

export const ExperiencePage: React.FC = () => {
    return (
        <>
            <SEO
                title="Interactive CV & Roadmap"
                description="Explore my journey across computing science education and software engineering in industry."
            />

            <div className="space-y-8 py-16">
                {/* Header Title Banner */}
                <div className="border-b border-neutral-200 pb-5 dark:border-neutral-800">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-violet-500" />
                        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            Interactive Roadmap & CV
                        </h1>
                    </div>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        A chronological timeline of my academic background, technical roles, and core engineering contributions.
                    </p>
                </div>

                {/* Interactive CV Component */}
                <InteractiveCV />
            </div>
        </>
    );
};