import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import type { Project } from '../types/index';

interface ProjectCarouselProps {
    projects: Project[];
    autoPlayInterval?: number; // pass 0 to disable
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
                                                                    projects,
                                                                    autoPlayInterval = 5000,
                                                                }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef<number | null>(null);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }, [projects.length]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, [projects.length]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (Math.abs(diff) > 40) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        touchStartX.current = null;
    };

    useEffect(() => {
        if (autoPlayInterval <= 0 || isPaused || projects.length <= 1) return;

        const timer = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [autoPlayInterval, isPaused, nextSlide, projects.length]);

    if (!projects.length) return null;

    return (
        <div
            className="relative w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-roledescription="carousel"
            aria-label="Highlighted Projects"
        >
            {/* Slider Track */}
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                    width: `${projects.length * 100}%`,
                    transform: `translateX(-${(currentIndex / projects.length) * 100}%)`,
                }}
            >
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        style={{ width: `${100 / projects.length}%` }}
                        className="shrink-0 grid grid-cols-1 md:grid-cols-12 min-h-[220px] md:h-[250px]"
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${idx + 1} of ${projects.length}`}
                    >
                        {/* Left Content Area */}
                        <div className="flex flex-col justify-between p-5 md:p-6 md:col-span-7 z-10">
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {project.category}
                  </span>
                                    <span className="text-[11px] text-neutral-500">{project.date}</span>
                                </div>

                                <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                                    {project.title}
                                </h3>

                                <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Bottom Tech Badges & Action CTAs */}
                            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-100 pt-3 dark:border-neutral-800/80">
                                <div className="flex flex-wrap gap-1">
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-mono text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                                        >
                      {tech}
                    </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="text-[10px] text-neutral-400 self-center">
                      +{project.techStack.length - 3}
                    </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-2">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white transition-opacity hover:opacity-90 dark:bg-neutral-100 dark:text-neutral-900"
                                        >
                                            Live <ArrowUpRight size={12} />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                                        >
                                            Code <ArrowUpRight size={12} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Image Thumbnail */}
                        <div className="relative order-first md:order-last md:col-span-5 h-36 md:h-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating Control Pill (Positioned in Top-Right Corner of Image) */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1 rounded-full border border-neutral-200/80 bg-white/90 p-1 shadow-sm backdrop-blur-sm dark:border-neutral-700/80 dark:bg-neutral-900/90">
                <button
                    onClick={prevSlide}
                    aria-label="Previous project"
                    className="flex h-6 w-6 items-center justify-center rounded-full text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                >
                    <ChevronLeft size={14} />
                </button>

                {/* Slide Counter / Dots */}
                <span className="px-1.5 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
          {currentIndex + 1}/{projects.length}
        </span>

                <button
                    onClick={nextSlide}
                    aria-label="Next project"
                    className="flex h-6 w-6 items-center justify-center rounded-full text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                >
                    <ChevronRight size={14} />
                </button>
            </div>
        </div>
    );
};