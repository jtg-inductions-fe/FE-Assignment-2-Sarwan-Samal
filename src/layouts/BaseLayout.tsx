import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';

import { Header } from '@container';
import { ErrorFallback } from '@pages';

export const BaseLayout = () => (
    <>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <main>
                <Outlet />
            </main>
        </ErrorBoundary>
        <footer>Footer</footer>
    </>
);
