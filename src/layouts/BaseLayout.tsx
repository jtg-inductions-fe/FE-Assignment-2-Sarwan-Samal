import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';

import { Header, Sidebar } from '@container';
import { useDataContext } from '@context';
import { ErrorFallback } from '@pages';
export const BaseLayout = () => {
    const { sidebarData } = useDataContext();
    return (
        <>
            <Header />
            <Sidebar items={sidebarData} />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <main>
                    <Outlet />
                </main>
            </ErrorBoundary>
            <footer>Footer</footer>
        </>
    );
};
