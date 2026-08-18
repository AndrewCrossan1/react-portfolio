import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import { Footer } from '@components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Navbar } from '@components/layout/Navbar';
import {CookieProvider} from "@/context/CookieContext.tsx";
import {AnalyticsTracker} from "@components/analytics/AnalyticsTracker.tsx";
import {CookieConsent} from "@components/ui/CookieConsent.tsx";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
    <div className="p-8 text-center border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20 rounded-xl my-8 transition-colors">
        <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">Something went wrong</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-mono">
            {error instanceof Error ? error.message : String(error)}
        </p>
        <button
            onClick={resetErrorBoundary}
            className="mt-4 px-4 py-2 text-xs font-medium bg-neutral-200 hover:bg-neutral-300 text-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 rounded-lg transition-colors cursor-pointer"
        >
            Try again
        </button>
    </div>
);

export const MainLayout = () => {
    const location = useLocation();

    return (
        <CookieProvider>
            <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans transition-colors">
                <ScrollRestoration />
                <Navbar />
                <AnalyticsTracker/>
                <main className="flex-1 max-w-7xl w-full mx-auto px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                        >
                            <ErrorBoundary FallbackComponent={ErrorFallback} key={location.pathname}>
                                <Outlet />
                            </ErrorBoundary>
                        </motion.div>
                    </AnimatePresence>
                </main>
                <Footer />
                <CookieConsent />
            </div>
        </CookieProvider>
    );
};