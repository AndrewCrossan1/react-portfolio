import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {Code, CodeXml, Home, Menu, User, X} from 'lucide-react';
import { ThemeToggle } from '@components/layout/ThemeToggle';

interface NavItem {
    label: string;
    path: string;
    exact?: boolean;
    subText?: string;
    icon?: React.ReactNode
}

const leftLinks: NavItem[] = [
    { label: 'Home', path: '/', exact: true, subText: 'Welcome to my portfolio', icon: <Home className="h-5 w-5" /> },
    { label: 'Projects', path: '/projects', subText: 'My latest projects', icon: <Code className="h-5 w-5" /> },
];

const rightLinks: NavItem[] = [
    { label: 'Tech Stack', path: '/stack', subText: 'My tech stack', icon: <CodeXml className="h-5 w-5" /> },
    { label: 'Experience', path: '/experience', subText: 'Learn more about me', icon: <User className="h-5 w-5" /> },
];

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const location = useLocation();

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    useEffect(() => {
        closeMobileMenu();
    }, [location.pathname]);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
                toggleButtonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                !toggleButtonRef.current?.contains(e.target as Node)
            ) {
                closeMobileMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `relative text-sm font-medium transition-colors duration-150 py-1 ${
            isActive
                ? 'text-neutral-900 dark:text-neutral-100'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
        } after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:bg-neutral-900 dark:after:bg-neutral-100 after:transition-all after:duration-200 ${
            isActive ? 'after:w-full' : 'after:w-0'
        }`;

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 h-fit sm:px-6 lg:px-8 py-3">

                    {/* Desktop Left Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-8 md:flex-1 md:justify-end">
                        {leftLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.exact}
                                className={navLinkClass}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Center Brand / Logo */}
                    <div className="flex items-center justify-center px-6">
                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                            className="flex flex-col items-center gap-2 rounded-xl text-neutral-900 dark:text-neutral-100 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
                            aria-label="Home"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 dark:text-white text-white dark:text-neutral-900 shadow-sm">
                                AC
                            </div>
                            {/*<span className="sm:inline text-sm font-medium tracking-tight">*/}
                            {/*    Andrew Crossan*/}
                            {/*</span>*/}
                        </Link>
                    </div>

                    {/* Desktop Right Navigation & Theme Toggle */}
                    <div className="hidden md:flex md:items-center md:gap-8 md:flex-1 md:justify-start">
                        {rightLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.exact}
                                className={navLinkClass}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <div className="ml-auto pl-4 border-l border-neutral-200 dark:border-neutral-800">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Right Controls */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            ref={toggleButtonRef}
                            onClick={toggleMobileMenu}
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-lg p-2 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-nav-menu"
                            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 stroke-[2.5]" />
                            ) : (
                                <Menu className="h-6 w-6 stroke-[2.5]" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Rendered outside the backdrop-blur container so position:fixed covers the screen */}
            <div
                id="mobile-nav-menu"
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className={`md:hidden fixed inset-x-0 top-16 h-fit z-40 bg-white dark:bg-neutral-950 transition-all duration-200 ease-in-out border border-neutral-200 dark:border-neutral-800 drop-shadow-md drop-shadow-violet-200 rounded-b-lg overflow-hidden ${
                    isMobileMenuOpen
                        ? 'opacity-100 visible pointer-events-auto'
                        : 'opacity-0 invisible pointer-events-none'
                }`}
            >
                <nav className="flex flex-col gap-1 px-4 pt-6 pb-4">
                    {[...leftLinks, ...rightLinks].map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.exact}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `block rounded-lg px-3 py-3 text-lg font-medium transition-colors duration-150 ${
                                    isActive
                                        ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100'
                                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900/50 dark:hover:text-neutral-100'
                                }`
                            }
                        >
                            <div className={"flex items-center gap-x-4"}>
                                <div className="flex-shrink-0">
                                    {link.icon}
                                </div>
                                <div>
                                    <span className="font-medium font-semibold">{link.label}</span>

                                    {link.subText && (
                                        <span className="block mt-1 text-xs font-normal text-neutral-500 dark:text-neutral-400">
                                            {link.subText}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>
    );
};