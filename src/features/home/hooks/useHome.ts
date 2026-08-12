import { useState } from 'react';
import type { HomeState } from '../types';

export const useHome = () => {
    const [state, setState] = useState<HomeState>({
        data: null,
        isLoading: false,
        error: null,
    });

    return {
        ...state,
    };
};
