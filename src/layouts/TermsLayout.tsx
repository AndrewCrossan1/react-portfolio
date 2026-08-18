import React from 'react';
import { SEO } from '@components/ui/SEO';

export const TermsLayout: React.FC = () => {
    return (
        <>
            <SEO
                title="Terms of Service"
                description="Terms and conditions governing the use of this portfolio website."
            />
            <div className="space-y-8 max-w-4xl py-16">
                {/* Header Banner */}
                <div className="border-b border-neutral-200 dark:border-neutral-800 pb-5">
                    <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Terms of Service
                    </h1>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        Last updated: August 2026
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-6 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing and using this portfolio website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue using the site.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            2. Intellectual Property
                        </h2>
                        <p>
                            All original written materials, branding, design assets, and content on this website are the personal property of Andrew Crossan unless otherwise specified. Open-source code repositories linked throughout this portfolio are governed by their respective software licenses (e.g., MIT, Apache 2.0).
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            3. Usage & Permitted Rights
                        </h2>
                        <p>
                            You are permitted to browse this site, link to public pages, and review source code where published. Direct replication, redistribution, or misrepresentation of this site’s personal branding as your own work is prohibited.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            4. Disclaimer of Warranties
                        </h2>
                        <p>
                            This website, its live demos, and associated materials are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied. We do not warrant that the website or its services will operate uninterrupted or error-free.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            5. Limitation of Liability
                        </h2>
                        <p>
                            In no event shall the author be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, this site or referenced third-party links.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            6. Contact
                        </h2>
                        <p>
                            For inquiries concerning project licensing or these terms, please get in touch at{' '}
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