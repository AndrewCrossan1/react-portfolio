export interface ExperienceState {
    data: unknown | null;
    isLoading: boolean;
    error: string | null;
}

export type MilestoneCategory = 'industry' | 'education' | 'certification';

export interface Milestone {
    id: string;
    category: MilestoneCategory;
    role: string;
    organization: string;
    location: string;
    period: {
        start: string;
        end: string | 'Present';
    };
    summary: string;
    achievements: string[];
    skills: string[];
    links?: {
        label: string;
        url: string;
    }[];
    isHighlight?: boolean;
}