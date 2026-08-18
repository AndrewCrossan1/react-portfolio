import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookieConsent } from '../../context/CookieContext';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const AnalyticsTracker: React.FC = () => {
    const location = useLocation();
    const { preferences } = useCookieConsent();

    useEffect(() => {
        if (preferences.analytics && typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_view', {
                page_path: location.pathname + location.search,
                page_title: document.title,
                send_to: GA_MEASUREMENT_ID,
            });
        }
    }, [location.pathname, location.search, preferences.analytics]);

    return null;
};