import React from 'react';
import { SEO } from '@components/ui/SEO';
import {Sparkles, Star} from 'lucide-react';

interface TechItem {
    name: string;
    note: string;
    isDailyDriver?: boolean;
    isExploring?: boolean;
    isFavorite?: boolean;
}

interface TechGroup {
    category: string;
    items: TechItem[];
}

const STACK_GROUPS: TechGroup[] = [
    {
        category: 'Languages',
        items: [
            { name: 'TypeScript', note: 'Strict typing everywhere. Refactoring without it feels like walking a tightrope.', isDailyDriver: true, isFavorite: true },
            { name: 'Java', note: 'Fast, simple standard library, and easy concurrency for services. Framework Rich.', isDailyDriver: true, isFavorite: true },
            { name: 'C#', note: 'Great for integrating with heavy microsoft-based flows and services.', isDailyDriver: true },
            { name: 'Swift', note: 'Currently exploring for native iOS development.', isExploring: true },
            { name: 'Python', note: 'Great for data analysis, machine learning, and automation, Django is also great to work with.', isExploring: true },
        ],
    },
    {
        category: 'Frontend & UI',
        items: [
            { name: 'React', note: 'My preferred frontend framework for personal projects', isDailyDriver: false, isFavorite: true },
            { name: 'Tailwind CSS', note: 'Utility classes save hours of context switching and CSS naming fatigue.', isDailyDriver: true, isFavorite: true },
            { name: 'React Native', note: 'Mobile development with a focus on performance and native feel. Good for rapid prototyping without heavy native code.', isDailyDriver: false },
            { name: 'Vue', note: 'What I use in work, similar to React, but less preferred personally.', isDailyDriver: true },
            { name: 'Svelte', note: 'A new framework that feels like a natural extension of React. I am still exploring it.', isExploring: true },
        ],
    },
    {
        category: 'Backend & Data',
        items: [
            { name: 'PostgreSQL', note: 'Reliable, powerful indexing, and my default choice for 95% of personal projects.', isDailyDriver: false, isFavorite: true },
            { name: 'MySQL', note: 'Easy, familiar, performant database I use in my professional career', isDailyDriver: true },
            { name: 'Redis', note: 'Caching, rate limiting, and pub/sub session state.', isExploring: true },
            { name: 'ASP.net', note: 'Similar architecture to Spring, but slightly worse in my opinion, still a great tool.', isDailyDriver: true },
            { name: 'Spring Boot', note: 'My preferred backend framework for personal projects, feels nice to use, lots of support, and extremely powerful', isDailyDriver: false, isFavorite: true },
        ],
    },
    {
        category: 'DevOps & Tooling',
        items: [
            { name: 'Docker', note: 'Repeatable environments and multi-stage container builds.', isDailyDriver: true },
            { name: 'Gitlab CI', note: 'Automated CI/CD pipelines and linting checks.', isDailyDriver: true },
            { name: 'Vite', note: 'Fast builds and near-instant HMR.', isDailyDriver: true },
            { name: 'IntelliJ Suite', note: 'Outstanding full IDE which I love using.', isDailyDriver: true, isFavorite: true },
            { name: 'Visual Studio Code', note: 'Lightweight editor with a rich ecosystem of extensions.', isDailyDriver: true },
        ],
    },
];

export const StackPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Tech Stack"
                description="A look at the tools, languages, and technologies I use daily."
            />

            <div className="space-y-8 py-16">
                {/* Header */}
                <div className="border-b border-neutral-200 pb-5 dark:border-neutral-800">
                    <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Tech Stack
                    </h1>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        The software, languages, and daily tools I rely on to build things.
                    </p>
                </div>

                {/* Candid Commentary / Notes */}
                <div className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-5 dark:border-neutral-800 dark:bg-neutral-900/50 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                        <Sparkles size={14} />
                        <span>Honest Opinions & Preferences</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        I am very curious and enjoy picking up new tools, but I prefer <strong className="text-neutral-900 dark:text-neutral-100">pragmatic, boring technologies</strong> over chasing every new framework. I love strict typing and fast compilers; I try to avoid heavy boilerplate, massive ORMs with hidden queries, and unnecessary micro-architectures.
                    </p>
                </div>

                {/* Clean Stack Groupings */}
                <div className="space-y-8">
                    {STACK_GROUPS.map((group) => (
                        <section key={group.category} className="space-y-3">
                            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                                {group.category}
                            </h2>

                            <div className="divide-y divide-neutral-200/80 rounded-xl border border-neutral-200/80 bg-white dark:divide-neutral-800/80 dark:border-neutral-800/80 dark:bg-neutral-900/40 shadow-sm">
                                {group.items.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6 p-4 text-xs sm:text-sm transition-colors hover:bg-neutral-50/80 dark:hover:bg-neutral-900"
                                    >
                                        <div className="flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-100 shrink-0">
                                            <span>{tech.name}</span>
                                            {tech.isFavorite && (
                                                <Star size={14} className="text-yellow-500" />
                                            )}
                                            {tech.isDailyDriver && (
                                                <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-medium text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                                                  Daily Driver
                                                </span>
                                            )}
                                            {tech.isExploring && (
                                                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                                                  Exploring
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400 sm:text-right">
                                            {tech.note}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </>
    );
};