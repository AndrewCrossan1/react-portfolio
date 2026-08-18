import React, { useState } from 'react';
import type { Milestone } from '../types/index';
import {
    Briefcase,
    GraduationCap,
    ChevronDown,
    ArrowUpRight,
    MapPin,
    Calendar,
    Sparkles
} from 'lucide-react';

interface RoadmapTimelineItemProps {
    milestone: Milestone;
    isLast?: boolean;
}

export const RoadmapTimelineItem: React.FC<RoadmapTimelineItemProps> = ({
                                                                            milestone,
                                                                            isLast = false,
                                                                        }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const isEducation = milestone.category === 'education';

    return (
        <div className="relative flex gap-4 sm:gap-6 group">

            {/* Central Timeline Spine */}
            <div className="flex flex-col items-center">
                {/* Node Icon */}
                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-sm transition-all duration-300 ${
                        milestone.isHighlight
                            ? 'border-violet-400 bg-violet-100 text-violet-700 dark:border-violet-500/50 dark:bg-violet-950 dark:text-violet-200 ring-4 ring-violet-500/10'
                            : 'border-neutral-200 bg-white text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 group-hover:border-violet-300 dark:group-hover:border-violet-700'
                    }`}
                >
                    {isEducation ? <GraduationCap size={18} /> : <Briefcase size={18} />}
                </div>

                {/* Connecting Line */}
                {!isLast && (
                    <div className="w-[2px] grow bg-gradient-to-b from-neutral-200 via-neutral-200 to-transparent dark:from-neutral-800 dark:via-neutral-800" />
                )}
            </div>

            {/* Main Content Card */}
            <div className={`w-full pb-10 ${isLast ? 'pb-2' : ''}`}>
                <div
                    className={`rounded-2xl border transition-all duration-200 ${
                        milestone.isHighlight
                            ? 'border-violet-200/80 bg-gradient-to-b from-white to-violet-50/30 p-5 dark:border-violet-800/40 dark:from-neutral-900 dark:to-violet-950/20 shadow-sm'
                            : 'border-neutral-200/80 bg-white p-5 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700'
                    }`}
                >
                    {/* Card Header */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                                    {milestone.role}
                                </h3>
                                {milestone.isHighlight && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700 dark:bg-violet-950 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
                    <Sparkles size={10} /> Key Milestone
                  </span>
                                )}
                            </div>
                            <p className="text-sm font-medium text-violet-700 dark:text-violet-300">
                                {milestone.organization}
                            </p>
                        </div>

                        {/* Date & Location Badges */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} className="text-violet-500 dark:text-violet-400" />
                  {milestone.period.start} — {milestone.period.end}
              </span>
                            <span className="inline-flex items-center gap-1">
                <MapPin size={12} className="text-neutral-400" />
                                {milestone.location}
              </span>
                        </div>
                    </div>

                    {/* Role Summary */}
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {milestone.summary}
                    </p>

                    {/* Collapsible Key Achievements */}
                    {milestone.achievements.length > 0 && (
                        <div className="mt-4 border-t border-neutral-100 pt-3 dark:border-neutral-800/80">
                            <button
                                onClick={() => setIsExpanded((prev) => !prev)}
                                className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-violet-600 dark:text-neutral-300 dark:hover:text-violet-300 transition-colors"
                            >
                                <span>Key Deliverables & Impact</span>
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${
                                        isExpanded ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            {isExpanded && (
                                <ul className="mt-2.5 space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                                    {milestone.achievements.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 dark:bg-violet-400" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    {/* Skills & Tech Pill Badges */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-3 dark:border-neutral-800/80">
                        <div className="flex flex-wrap gap-1.5">
                            {milestone.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-md border border-neutral-200/80 bg-neutral-50 px-2 py-0.5 text-[10px] font-mono text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/70 dark:text-neutral-300"
                                >
                  {skill}
                </span>
                            ))}
                        </div>

                        {/* External Reference Links */}
                        {milestone.links && milestone.links.length > 0 && (
                            <div className="flex items-center gap-2">
                                {milestone.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-[11px] font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                                    >
                                        {link.label} <ArrowUpRight size={12} />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};