import React from 'react';
import { Briefcase, Award, Code, Building } from 'lucide-react';

export const CVStatsBar: React.FC = () => {
    const stats = [
        { label: 'Industry Experience', value: '1 Year', icon: Briefcase },
        { label: 'Companies & Teams', value: '1 Organisation', icon: Building },
        { label: 'Academic Standing', value: 'BSc Upper Second Class (Hons)', icon: Award },
        { label: 'Core Stack', value: 'TypeScript / Java / .NET', icon: Code },
    ];

    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                    <div
                        key={i}
                        className="rounded-xl border border-neutral-200 bg-gradient-to-br from-white via-neutral-50 to-violet-50/30 p-3.5 transition-all dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-900 dark:to-violet-950/20"
                    >
                        <div className="flex items-center gap-2 text-violet-600 dark:text-violet-300">
                            <Icon size={15} />
                            <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </span>
                        </div>
                        <p className="mt-1.5 text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                            {stat.value}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};