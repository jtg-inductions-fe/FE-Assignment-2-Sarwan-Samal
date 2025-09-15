import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';

import { ErrorFallback } from '@pages';

export const BaseLayout = () => (
    <>
        <header>Header</header>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <main>
                <Outlet />
            </main>
        </ErrorBoundary>
        <footer>Footer</footer>
    </>
);
