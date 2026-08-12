import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
    <div className="p-8 text-center border border-red-900/50 bg-red-950/20 rounded-xl my-8">
        <h2 className="text-lg font-semibold text-red-400">Something went wrong</h2>
        <p className="mt-2 text-sm text-neutral-400 font-mono">
            {error instanceof Error ? error.message : String(error)}
        </p>
        <button
            onClick={resetErrorBoundary}
            className="mt-4 px-4 py-2 text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg transition-colors cursor-pointer"
        >
            Try again
        </button>
    </div>
);

export const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 font-sans">
            <ScrollRestoration />
            <Header />
            <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
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
        </div>
    );
};