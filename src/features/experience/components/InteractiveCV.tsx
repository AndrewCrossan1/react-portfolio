import React, { useState, useMemo } from 'react';
import type { Milestone, MilestoneCategory } from '../types/index';
import { RoadmapFilter } from './RoadmapFilter';
import { RoadmapTimelineItem } from './RoadmapTimelineItem';
import { CVStatsBar } from './CVStatsBar';
import { Download } from 'lucide-react';

const ROADMAP_DATA: Milestone[] = [
    {
        id: 'exp-1',
        category: 'industry',
        role: 'Graduate Software Engineer',
        organization: 'Versko Limited',
        location: 'Glasgow, UK',
        period: { start: '2025', end: 'Present' },
        summary:
            'Working as a Graduate Software Engineer at Versko Limited, contributing to the development of high traffic booking platforms with WorldPay, internal management tools and POS software with Adyen POS Terminals.',
        achievements: [
            'Optimised SQL queries and implemented Redis caching, reducing average response times by 40% for high-traffic endpoints.',
            'Implemented a CI/CD pipeline using Gitlab CI, reducing deployment times and improving code quality through automated testing.',
            'Rewrote legacy Keycloak themes using React, Keycloakify and Tailwind for 3 individual projects.',
            'Contributed from day 1, bringing previous personal experience into enterprise C# ASP.NET projects'
        ],
        skills: ['React', 'Node.js', 'Redis', 'Podman', 'Java', 'SQL', 'Keycloak', 'Gitlab CI/CD', 'C#', 'ASP.NET', 'Tailwind', 'SQL'],
        isHighlight: true,
        links: [],
    },
    {
        id: 'edu-2',
        category: 'education',
        role: 'BSc (Hons) in Computing Science',
        organization: 'University of Strathclyde',
        location: 'Glasgow, UK',
        period: { start: '2022', end: '2025' },
        summary:
            'Second Class Honours. Specialised in Software Development, Algorithms & Complexity, Database Systems and Web Technologies.',
        achievements: [
            'Dissertation: "CogniCarer: A mobile application to provide rehabilitation and allow people with dementia to connect with their carers"',
            'Mindful Moments: A React Native mobile application enabling users to access a database of charities and food banks, along with a list of' +
            ' requested items, using an open source Rest API, Firebase and Google Cloud Console (Maps)',
            'Built Agentic bots to play Deterministic games using Python, TensorFlow and fundamental AI Algorithms'
        ],
        skills: ['Java', 'Distributed Systems', 'Algorithms', 'React', 'React Native', 'Typescript', 'AI/ML', 'SQL'],
        isHighlight: true,
        links: [],
    },
    {
        id: 'edu-1',
        category: 'education',
        role: 'HND Computing Science with Software Development',
        organization: 'Glasgow Clyde College',
        location: 'Glasgow, UK',
        period: { start: '2020', end: '2022' },
        summary:
            'Grade AA. Specialised in Software Development, Backend Programming, Web Technologies and Multi User Systems like Linux.',
        achievements: [
            'Final Year Project: "Bike King Borders, a PHP driven, secure and interactive E-Commerce website"',
            'Song Recommendation System: "A music recommendation system using a hybrid approach of collaborative filtering and content-based filtering"',
            'Oracle Database Certifications: Database Fundamentals and Database Programming with T/SQL'
        ],
        skills: ['Java', 'C/C++', 'C#', 'React', 'React Native', 'Typescript', 'PHP', 'Bootstrap', 'SQL'],
        isHighlight: false,
        links: [],
    },
];

export const InteractiveCV: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | MilestoneCategory>('all');

    const filteredMilestones = useMemo(() => {
        if (activeTab === 'all') return ROADMAP_DATA;
        return ROADMAP_DATA.filter((m) => m.category === activeTab);
    }, [activeTab]);

    const counts = useMemo(
        () => ({
            all: ROADMAP_DATA.length,
            industry: ROADMAP_DATA.filter((m) => m.category === 'industry').length,
            education: ROADMAP_DATA.filter((m) => m.category === 'education').length,
            certification: 0,
        }),
        []
    );

    return (
        <div className="space-y-8">
            {/* Top Stats Ribbon */}
            <CVStatsBar />

            {/* Control Strip (Filter Pills + Download CV) */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
                <RoadmapFilter activeTab={activeTab} onTabChange={setActiveTab} counts={counts} />

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-violet-200 bg-violet-50/60 px-3.5 py-1.5 text-xs font-medium text-violet-900 transition-colors hover:bg-violet-100 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300 dark:hover:bg-violet-900/50"
                >
                    <Download size={14} />
                    <span>Export PDF Resume</span>
                </a>
            </div>

            {/* Chronological Timeline Nodes */}
            <div className="pt-2">
                {filteredMilestones.map((milestone, index) => (
                    <RoadmapTimelineItem
                        key={milestone.id}
                        milestone={milestone}
                        isLast={index === filteredMilestones.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};