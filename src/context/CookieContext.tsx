import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
}

interface CookieContextType {
    preferences: CookiePreferences;
    isBannerOpen: boolean;
    isPreferencesModalOpen: boolean;
    acceptAll: () => void;
    rejectAll: () => void;
    savePreferences: (custom: CookiePreferences) => void;
    openPreferencesModal: () => void;
    closePreferencesModal: () => void;
}

const STORAGE_KEY = 'site_cookie_consent_v1';

declare global {
    interface Window {
        dataLayer?: any[];
        gtag?: (...args: any[]) => void;
    }
}

const defaultPreferences: CookiePreferences = {
    necessary: true,
    analytics: false,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
    const [isBannerOpen, setIsBannerOpen] = useState(false);
    const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setPreferences(parsed);
                updateGoogleConsent(parsed.analytics);
            } catch {
                setIsBannerOpen(true);
            }
        } else {
            setIsBannerOpen(true);
        }
    }, []);

    const updateGoogleConsent = (granted: boolean) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                analytics_storage: granted ? 'granted' : 'denied',
            });
        }
    };

    const saveAndApply = (prefs: CookiePreferences) => {
        setPreferences(prefs);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
        updateGoogleConsent(prefs.analytics);
        setIsBannerOpen(false);
        setIsPreferencesModalOpen(false);
    };

    const acceptAll = () => {
        saveAndApply({ necessary: true, analytics: true });
    };

    const rejectAll = () => {
        saveAndApply({ necessary: true, analytics: false });
    };

    const savePreferences = (custom: CookiePreferences) => {
        saveAndApply({ ...custom, necessary: true });
    };

    return (
        <CookieContext.Provider
            value={{
                preferences,
                isBannerOpen,
                isPreferencesModalOpen,
                acceptAll,
                rejectAll,
                savePreferences,
                openPreferencesModal: () => setIsPreferencesModalOpen(true),
                closePreferencesModal: () => setIsPreferencesModalOpen(false),
            }}
        >
            {children}
        </CookieContext.Provider>
    );
};

export const useCookieConsent = () => {
    const context = useContext(CookieContext);
    if (!context) {
        throw new Error('useCookieConsent must be used within a CookieProvider');
    }
    return context;
};