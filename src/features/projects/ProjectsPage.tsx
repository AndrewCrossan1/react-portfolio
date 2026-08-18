import React from 'react';
import { SEO } from '@components/ui/SEO';
import { ProjectCarousel } from './components/ProjectCarousel';
import { ProjectSpotlight } from './components/ProjectSpotlight';
import type { Project } from './types';
import Portfolio from './assets/portfolio.png';
import my5aside from './assets/1024.png';
import CogniCarer from './assets/cognicarer.png';

const SPOTLIGHT_PROJECT: Project = {
    id: 'cognicarer',
    title: 'CogniCarer',
    tagline: 'A simple and intuitive application for carers and people with dementia',
    description:
        'Built as part of my dissertation project, CogniCarer aims to provide an accessible platform to allow' +
        'people living with dementia and carers to connect, share memories, play interactive games and document' +
        'memories and events.',
    longDescription:
        'A React Native with Expo and Tailwind application Developed to help people suffering with Dementia and those ' +
        'caring for them connect and document memories, play ' +
        'interactive, personalised games together and to understand more about the condition through articles supplied by' +
        'a custom-made Django REST API.',
    category: 'Mobile',
    date: 'August 2025',
    image: CogniCarer,
    techStack: ['React Native', 'TypeScript', 'Python', 'Django', 'Postgres', 'WebSockets', 'Docker', 'Tailwind', 'Expo', 'Redux', 'AWS'],
    metrics: [
        { label: 'API Response Time', value: '<100ms' },
        { label: 'Concurrent User Ability', value: '1000+' },
        { label: 'Feasibility Testers', value: '20+'}
    ],
    highlights: [
        'Performance focused API designed with Django REST Framework.',
        'AWS S3 Bucket for image storing and caching',
        'Markdown Article Parser built-in',
        'WCAG 2.1 AA compliant',
    ],
    githubUrl: 'https://github.com/andrewcrossan1/CogniCarer',
};

const CAROUSEL_PROJECTS: Project[] = [
    {
        id: 'react-portfolio',
        title: 'React Portfolio',
        tagline: 'A modern, responsive portfolio template built with React and TailwindCSS.',
        description:
            'My new portfolio built with a minimalistic design and a focus on performance and accessibility.',
        category: 'Full Stack',
        date: 'September 2026',
        image: Portfolio,
        techStack: ['React', 'Tailwind', 'Oxfmt/Oxlint', 'Redux', 'TypeScript'],
        liveUrl: '/',
        githubUrl: 'https://github.com/andrewcrossan1/react-portfolio',
    },
    {
        id: 'my5aside',
        title: 'my5aside',
        tagline: 'Making 5-aside management easier.',
        description:
            'A simple but powerful react native application designed to make the organisation and management of football teams and games easier' +
            'by allowing players to chat, organise and schedule games, as well as take payments and manage rosters.',
        category: 'Full Stack',
        date: 'Late 2026',
        image: my5aside,
        techStack: ['React Native', 'Tailwind', 'Spring Boot 4', 'Postgres', 'TypeScript', 'React Query'],
    },
];

export const ProjectsPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Projects & Engineering Showcases"
                description="Explore technical projects, distributed systems, open source tooling, and architecture case studies."
            />

            <div className="space-y-12 py-16">

                {/* Page Header */}
                <div className="border-b border-neutral-200 dark:border-neutral-800 pb-5">
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Featured Projects
                    </h1>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                        A curated selection of production applications, developer tools, and open-source contributions.
                    </p>
                </div>

                {/* 1. Carousel: Highlights Overview */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                            Quick Highlights
                        </h2>
                    </div>
                    <ProjectCarousel projects={CAROUSEL_PROJECTS} autoPlayInterval={6000} />
                </section>

                {/* 2. Spotlight: In-Depth Deep Dive on the Latest Project */}
                <section className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                            Deep Dive
                        </h2>
                    </div>
                    <ProjectSpotlight project={SPOTLIGHT_PROJECT} />
                </section>

            </div>
        </>
    );
};