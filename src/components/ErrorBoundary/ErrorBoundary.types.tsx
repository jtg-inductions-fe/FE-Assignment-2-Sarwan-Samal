import { ReactNode } from 'react';
export type ErrorBoundaryProps = {
    children: ReactNode;
    fallbackComponent?: React.ComponentType<{
        error: Error;
        resetError: () => void;
    }>;
};

export type ErrorBoundaryState = {
    hasError: boolean;
    error: Error | null;
};
