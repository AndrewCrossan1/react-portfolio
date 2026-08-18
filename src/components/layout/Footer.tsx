import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useCookieConsent } from '../../context/CookieContext';

/* =========================================================================
   Brand SVGs (GitHub & LinkedIn - styled via currentColor)
   ========================================================================= */

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
}

const GitHubIcon: React.FC<IconProps> = ({ size = 18, className, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
    </svg>
);

const LinkedInIcon: React.FC<IconProps> = ({ size = 18, className, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        {...props}
    >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46V10.9M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
);

/* =========================================================================
   Footer Navigation Data
   ========================================================================= */

const FOOTER_LINKS = {
    navigation: [
        { label: 'Projects', href: '/projects' },
        { label: 'Experience', href: '/experience' },
    ],
    resources: [
        { label: 'Source Code', href: 'https://github.com/andrewcrossan1/portfolio', external: true },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
    ],
};

/* =========================================================================
   Footer Component
   ========================================================================= */

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const { openPreferencesModal } = useCookieConsent();

    return (
        <footer className="mt-auto border-t border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors dark:border-neutral-800/80 dark:bg-neutral-950 dark:text-neutral-400">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                    {/* Brand & Availability Column */}
                    <div className="space-y-4 lg:col-span-2">
                        <div className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                            Andrew Crossan
                        </div>
                        <p className="max-w-sm text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                            Junior Software Developer building performant web applications, design systems, and scalable backend services. Passionate about clean code, performance optimization, and creating great user experiences.
                        </p>

                        {/* Live Availability Status */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Open to opportunities
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://github.com/andrewcrossan1"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub Profile"
                                className="rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100"
                            >
                                <GitHubIcon size={16} />
                            </a>
                            <a
                                href="https://linkedin.com/in/andrewcrossan1"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn Profile"
                                className="rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100"
                            >
                                <LinkedInIcon size={16} />
                            </a>
                            <a
                                href="mailto:andrew.crossan23@outlook.com"
                                aria-label="Send Email"
                                className="rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100"
                            >
                                <Mail size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                            Navigation
                        </p>
                        <ul className="mt-3 space-y-2 text-xs">
                            {FOOTER_LINKS.navigation.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                            Resources
                        </p>
                        <ul className="mt-3 space-y-2 text-xs">
                            {FOOTER_LINKS.resources.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                                        className="inline-flex items-center gap-1 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                                    >
                                        {link.label}
                                        {link.external && <ArrowUpRight size={12} className="opacity-70" />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Compliance Column */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                            Legal
                        </p>
                        <ul className="mt-3 space-y-2 text-xs">
                            {FOOTER_LINKS.legal.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button
                                    type="button"
                                    onClick={openPreferencesModal}
                                    className="text-left text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                                >
                                    Cookie Settings
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Baseline */}
                <div className="mt-10 border-t border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-neutral-800/80 dark:text-neutral-400">
                    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                        <p>© {currentYear} Andrew Crossan. All rights reserved.</p>
                        <p>Designed & built with React and Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};