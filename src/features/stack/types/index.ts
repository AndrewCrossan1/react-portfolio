export type TechCategory =
    | 'Languages'
    | 'Frontend'
    | 'Backend & Databases'
    | 'DevOps & Cloud'
    | 'Developer Tooling';

export type TechStatus = 'daily-driver' | 'proficient' | 'exploring' | 'retired';

export interface TechItem {
    id: string;
    name: string;
    category: TechCategory;
    status: TechStatus;
    experience: string;
    summary: string;
    commentary: string; // Your informal take/opinion
    verdict?: 'favorite' | 'solid' | 'cautious' | 'avoid';
    tags: string[];
}