import React from 'react';
import type { MilestoneCategory } from '../types/index';
import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';

interface RoadmapFilterProps {
    activeTab: 'all' | MilestoneCategory;
    onTabChange: (tab: 'all' | MilestoneCategory) => void;
    counts: Record<'all' | MilestoneCategory, number>;
}

export const RoadmapFilter: React.FC<RoadmapFilterProps> = ({
                                                                activeTab,
                                                                onTabChange,
                                                                counts,
                                                            }) => {
    const tabs = [
        { id: 'all' as const, label: 'Full Roadmap', icon: Sparkles },
        { id: 'industry' as const, label: 'Industry & Experience', icon: Briefcase },
        { id: 'education' as const, label: 'Education & Academics', icon: GraduationCap },
    ];

    return (
        <div className="flex flex-wrap items-center gap-2">
            {tabs.map(({ id, label, icon: Icon }) => {
                const isActive = activeTab === id;
                return (
                    <button
                        key={id}
                        onClick={() => onTabChange(id)}
                        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                            isActive
                                ? 'bg-violet-600 text-white shadow-sm shadow-violet-500/20 dark:bg-violet-500 dark:text-neutral-950'
                                : 'border border-neutral-200 bg-white text-neutral-600 hover:border-violet-200 hover:bg-violet-50/50 hover:text-violet-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-violet-900 dark:hover:bg-violet-950/30 dark:hover:text-violet-200'
                        }`}
                    >
                        <Icon size={14} className={isActive ? 'text-white dark:text-neutral-950' : 'text-violet-500 dark:text-violet-400'} />
                        <span>{label}</span>
                        <span
                            className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                                isActive
                                    ? 'bg-violet-700/50 text-violet-100 dark:bg-violet-600/40 dark:text-neutral-950'
                                    : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'
                            }`}
                        >
              {counts[id]}
            </span>
                    </button>
                );
            })}
        </div>
    );
};