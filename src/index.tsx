import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { DataProvider } from '@context';
import { routes } from '@routes';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;
const router = createBrowserRouter(routes, {
    basename: import.meta.env.BASE_URL ?? '/',
});

createRoot(rootElement).render(
    <StrictMode>
        <DataProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </DataProvider>
    </StrictMode>,
);
