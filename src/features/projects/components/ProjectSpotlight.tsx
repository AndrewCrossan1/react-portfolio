import React from 'react';
import {
    Sparkles,
    ArrowUpRight,
    BookOpen,
    CheckCircle2,
    Layers
} from 'lucide-react';
import type { Project } from '../types/index';

interface ProjectSpotlightProps {
    project: Project;
}

export const ProjectSpotlight: React.FC<ProjectSpotlightProps> = ({ project }) => {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50/50 p-6 sm:p-8 lg:p-12 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950 shadow-sm">

            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/15" />

            {/* Header Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2">
          <span className="flex h-6 items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
            <Sparkles size={12} className="animate-pulse" />
            Latest Spotlight
          </span>
                    <span className="text-xs text-neutral-400">•</span>
                    <span className="text-xs font-medium text-neutral-500">{project.category}</span>
                </div>
                <span className="text-xs font-mono text-neutral-500">Released: {project.date}</span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">

                {/* Left Column: Context & Narrative */}
                <div className="space-y-6 lg:col-span-7">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
                            {project.title}
                        </h2>
                        <p className="mt-2 text-base font-medium text-neutral-700 dark:text-neutral-300">
                            {project.tagline}
                        </p>
                    </div>

                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {project.longDescription || project.description}
                    </p>

                    {/* Key Metrics / Highlights */}
                    {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 pt-2">
                            {project.metrics.map((metric) => (
                                <div
                                    key={metric.label}
                                    className="rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50"
                                >
                                    <p className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                                        {metric.value}
                                    </p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Architectural Key Takeaways */}
                    {project.highlights && (
                        <div className="space-y-2.5 pt-2">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                                Core Architectural Highlights
                            </h4>
                            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                                {project.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tech Stack List */}
                    <div className="space-y-2 pt-2">
                        <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                            <Layers size={13} />
                            Engineered With
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-xs font-mono font-medium text-neutral-800 shadow-sm dark:border-neutral-700/80 dark:bg-neutral-800 dark:text-neutral-200"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-neutral-100 dark:text-neutral-900 shadow-sm"
                            >
                                Launch Application <ArrowUpRight size={16} />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700/60"
                            >
                                <ArrowUpRight size={16} /> Repository
                            </a>
                        )}
                        {project.docsUrl && (
                            <a
                                href={project.docsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                            >
                                <BookOpen size={16} /> Case Study
                            </a>
                        )}
                    </div>
                </div>

                {/* Right Column: Visual Frame */}
                <div className="lg:col-span-5 space-y-4">
                    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};