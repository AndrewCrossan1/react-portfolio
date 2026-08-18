import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@layouts/MainLayout';
import { NotFound } from '@components/layout/NotFound';
import { lazy } from "react";

const HomePage = lazy(() => import('@features/home/HomePage').then(m => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import('@features/projects/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ExperiencePage = lazy(() => import('@features/experience/ExperiencePage').then(m => ({ default: m.ExperiencePage })));
const TermsPage = lazy(() => import('@layouts/TermsLayout').then(m => ({ default: m.TermsLayout })));
const PrivacyPage = lazy(() => import('@layouts/PrivacyLayout').then(m => ({ default: m.PrivacyLayout })));
const StackPage = lazy(() => import('@features/stack/StackPage').then(m => ({ default: m.StackPage })));


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/projects', element: <ProjectsPage /> },
            { path: '/experience', element: <ExperiencePage /> },
            { path: '/terms', element: <TermsPage /> },
            { path: '/privacy', element: <PrivacyPage /> },
            { path: '/stack', element: <StackPage /> },
            { path: '*', element: <NotFound /> },
        ],
    },
]);

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
};
