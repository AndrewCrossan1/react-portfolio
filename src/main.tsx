import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@styles/main.css';
import { App } from '@/App.tsx';
import { HelmetProvider } from 'react-helmet-async';
import {ThemeProvider} from "@components/theme-provider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <ThemeProvider defaultTheme={"dark"} storageKey={"app-theme"}>
                <App />
            </ThemeProvider>
        </HelmetProvider>
    </StrictMode>
);
