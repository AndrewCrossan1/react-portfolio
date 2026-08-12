import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@layouts/MainLayout';
import { NotFound } from '@components/layout/NotFound';
import { lazy } from "react";

const HomePage = lazy(() => import('@features/home/HomePage').then(m => ({ default: m.HomePage })));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '*', element: <NotFound /> },
        ],
    },
]);

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
};
