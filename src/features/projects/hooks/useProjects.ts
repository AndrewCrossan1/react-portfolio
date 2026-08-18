import { useState } from 'react';
import type { ProjectsState } from '../types';

export const useProjects = () => {
    const [state] = useState<ProjectsState>({
        data: null,
        isLoading: false,
        error: null,
    });

    return {
        ...state,
    };
};
