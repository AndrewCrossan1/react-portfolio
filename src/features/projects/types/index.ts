export interface ProjectsState {
    data: unknown | null;
    isLoading: boolean;
    error: string | null;
}


export interface Project {
    id: string;
    title: string;
    tagline: string;
    description: string;
    longDescription?: string;
    category: 'Full Stack' | 'Dev Tool' | 'AI / ML' | 'Mobile' | 'Open Source';
    featured?: boolean;
    image: string;
    techStack: string[];
    metrics?: {
        label: string;
        value: string;
    }[];
    highlights?: string[];
    liveUrl?: string;
    githubUrl?: string;
    docsUrl?: string;
    date: string;
}