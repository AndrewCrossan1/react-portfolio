import React from 'react';
import { SEO } from '@components/ui/SEO';
import { useCookieConsent } from '../context/CookieContext';

export const PrivacyLayout: React.FC = () => {
    const { openPreferencesModal } = useCookieConsent();

    return (
        <>
            <SEO
                title="Privacy Policy"
                description="Privacy policy and data collection practices for this portfolio."
            />
            <div className="space-y-8 max-w-4xl py-16">
                {/* Header Banner */}
                <div className="border-b border-neutral-200 dark:border-neutral-800 pb-5">
                    <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Privacy Policy
                    </h1>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        Last updated: August 2026
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-6 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            1. Overview
                        </h2>
                        <p>
                            This Privacy Policy explains how information is collected, used, and protected when you visit this personal portfolio website. We respect your privacy and adhere to UK and EU data protection standards (UK GDPR / PECR).
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            2. Information We Collect
                        </h2>
                        <p>
                            We only collect minimal technical data necessary to operate and improve the website:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong className="text-neutral-900 dark:text-neutral-200">Essential Storage:</strong> Local storage keys strictly required for site settings (e.g., your selected light/dark theme preference and cookie consent choices).
                            </li>
                            <li>
                                <strong className="text-neutral-900 dark:text-neutral-200">Analytics Data:</strong> Anonymized metrics regarding page views, referring URLs, and browser types via Google Analytics 4 (only activated if you provide explicit consent).
                            </li>
                            <li>
                                <strong className="text-neutral-900 dark:text-neutral-200">Direct Inquiries:</strong> Any information (e.g., your name and email address) you choose to provide when reaching out via email.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            3. Cookies and Analytics
                        </h2>
                        <p>
                            This website uses Google Analytics 4 with Google Consent Mode v2. Tracking scripts and analytics storage remain blocked by default until you choose to accept them.
                        </p>
                        <p>
                            You can review or adjust your preferences at any time via{' '}
                            <button
                                type="button"
                                onClick={openPreferencesModal}
                                className="font-medium text-neutral-900 underline dark:text-neutral-100 hover:text-violet-600 dark:hover:text-violet-400"
                            >
                                Cookie Settings
                            </button>.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            4. Third-Party Services
                        </h2>
                        <p>
                            This website may include links to third-party platforms such as GitHub, LinkedIn, and external project demos. We are not responsible for the privacy practices or policies of external sites.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            5. Contact
                        </h2>
                        <p>
                            If you have questions about this Privacy Policy, you can reach out directly via email at{' '}
                            <a
                                href="mailto:andrew.crossan23@outlook.com"
                                className="font-medium text-neutral-900 underline dark:text-neutral-100 hover:text-violet-600 dark:hover:text-violet-400"
                            >
                                andrew.crossan23@outlook.com
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};