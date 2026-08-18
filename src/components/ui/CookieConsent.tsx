import React, { useState, useEffect } from 'react';
import { useCookieConsent } from '../../context/CookieContext';
import { ShieldCheck, X, SlidersHorizontal, Check } from 'lucide-react';

export const CookieConsent: React.FC = () => {
    const {
        isBannerOpen,
        isPreferencesModalOpen,
        preferences,
        acceptAll,
        rejectAll,
        savePreferences,
        openPreferencesModal,
        closePreferencesModal,
    } = useCookieConsent();

    const [tempAnalytics, setTempAnalytics] = useState(preferences.analytics);

    useEffect(() => {
        setTempAnalytics(preferences.analytics);
    }, [preferences.analytics, isPreferencesModalOpen]);

    return (
        <>
            {/* 1. Bottom Toast Banner */}
            {isBannerOpen && !isPreferencesModalOpen && (
                <div
                    role="region"
                    aria-label="Cookie consent banner"
                    className="fixed bottom-4 right-4 z-50 max-w-md rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl transition-all dark:border-neutral-800 dark:bg-neutral-900 mx-4 sm:mx-0"
                >
                    <div className="flex items-start gap-3.5">
                        <div className="rounded-xl bg-violet-100 p-2.5 text-violet-700 dark:bg-violet-950 dark:text-violet-300 shrink-0">
                            <ShieldCheck size={20} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                                Privacy & Cookies
                            </h3>
                            <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                                This portfolio uses essential storage for theme preferences and optional anonymous analytics to measure performance.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-end gap-2 border-t border-neutral-100 pt-3 dark:border-neutral-800">
                        <button
                            onClick={openPreferencesModal}
                            type="button"
                            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 transition-colors"
                        >
                            <SlidersHorizontal size={13} />
                            Customize
                        </button>
                        <button
                            onClick={rejectAll}
                            type="button"
                            className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700/50 transition-colors"
                        >
                            Decline
                        </button>
                        <button
                            onClick={acceptAll}
                            type="button"
                            className="rounded-lg bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90 dark:bg-neutral-100 dark:text-neutral-900"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            )}

            {/* 2. Preferences Modal */}
            {isPreferencesModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-lg rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">

                        <div className="flex items-center justify-between border-b border-neutral-100 pb-4 dark:border-neutral-800">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={18} className="text-violet-600 dark:text-violet-400" />
                                <h3 className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                                    Cookie Preferences
                                </h3>
                            </div>
                            <button
                                onClick={closePreferencesModal}
                                type="button"
                                className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="mt-4 space-y-4 text-xs">
                            {/* Essential */}
                            <div className="flex items-start justify-between gap-4 rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-3.5 dark:border-neutral-800 dark:bg-neutral-950/40">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">Strictly Necessary</span>
                                        <span className="rounded bg-neutral-200 px-1.5 py-0.5 text-[10px] font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                      Always Active
                    </span>
                                    </div>
                                    <p className="text-neutral-500 dark:text-neutral-400">
                                        Required for core website functionality, dark/light theme persistence, and security.
                                    </p>
                                </div>
                                <div className="h-5 w-9 shrink-0 rounded-full bg-neutral-300 p-0.5 dark:bg-neutral-700 cursor-not-allowed">
                                    <div className="h-4 w-4 rounded-full bg-white shadow transform translate-x-4 dark:bg-neutral-200" />
                                </div>
                            </div>

                            {/* Analytics */}
                            <div className="flex items-start justify-between gap-4 rounded-xl border border-neutral-200/80 bg-white p-3.5 dark:border-neutral-800 dark:bg-neutral-900">
                                <div className="space-y-1">
                                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">Performance & Analytics</span>
                                    <p className="text-neutral-500 dark:text-neutral-400">
                                        Helps understand page performance and visitor engagement anonymously without cross-site tracking.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setTempAnalytics((prev) => !prev)}
                                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                                        tempAnalytics ? 'bg-violet-600' : 'bg-neutral-200 dark:bg-neutral-700'
                                    }`}
                                >
                  <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200 ease-in-out mt-0.5 ml-0.5 ${
                          tempAnalytics ? 'translate-x-4' : 'translate-x-0'
                      }`}
                  />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-2 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                            <button
                                onClick={rejectAll}
                                type="button"
                                className="rounded-lg px-3.5 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                            >
                                Reject All
                            </button>
                            <button
                                onClick={() => savePreferences({ necessary: true, analytics: tempAnalytics })}
                                type="button"
                                className="inline-flex items-center gap-1.5 rounded-lg bg-violet-600 px-4 py-2 text-xs font-medium text-white hover:bg-violet-700 dark:bg-violet-500 dark:text-neutral-950 dark:hover:bg-violet-400"
                            >
                                <Check size={14} />
                                Save Preferences
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};