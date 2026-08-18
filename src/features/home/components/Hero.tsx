import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@components/ui/button';
import developerIllustration from '../assets/undraw_programming_j1zw.svg';
import {Link} from "react-router-dom";

export const Hero: React.FC = () => {
    return (
        <section className="py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Text & Content */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-6">

                    {/* Name Header */}
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            Andrew Crossan
                        </h1>
                        <p className="text-xl sm:text-2xl font-medium text-neutral-600 dark:text-neutral-400">
                            Software Engineer & Computer Enthusiast
                        </p>
                    </div>

                    {/* Subtext / Pitch */}
                    <p className="max-w-xl text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        I craft high-performance web applications, intuitive interfaces, and scalable backend services. Dedicated to clean code, performance optimization, and great user experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Button className="gap-2 cursor-pointer">
                            <Link to="/projects" className="flex items-center gap-2">
                                View Projects <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" className="gap-2 cursor-pointer">
                            <Link to="/experience" className="flex items-center gap-2">
                                View Experience <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 pt-4 text-neutral-500 dark:text-neutral-400">
                        <a
                            href="https://github.com/andrewcrossan1"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="GitHub Profile"
                        >
                            Github
                        </a>
                        <a
                            href="https://linkedin.com/in/andrewcrossan1"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:alex@example.com"
                            className="p-2 rounded-lg hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="Email Contact"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Right Column: Developer Illustration */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-tr from-neutral-100 to-neutral-200/50 dark:from-neutral-900 dark:to-neutral-800/50 p-8 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm flex items-center justify-center">
                        {/* Background glow effect */}
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl -z-10" />

                        <img
                            src={developerIllustration}
                            alt="Software Developer Illustration"
                            className="w-full h-auto max-h-72 object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};