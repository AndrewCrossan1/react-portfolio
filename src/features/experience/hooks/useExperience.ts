import { useState } from 'react';
import type { ExperienceState } from '../types';

export const useExperience = () => {
    const [state, setState] = useState<ExperienceState>({
        data: null,
        isLoading: false,
        error: null,
    });

    return {
        ...state,
    };
};
