import { Component } from 'react';

import { ErrorFallback } from '@pages';

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

export class CustomErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    resetError = () => {
        this.setState({ hasError: false, error: null });
    };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error: error };
    }

    render() {
        if (this.state.hasError && this.state.error) {
            const Fallback = this.props.fallbackComponent || ErrorFallback;
            return (
                <Fallback
                    error={this.state.error}
                    resetError={this.resetError}
                />
            );
        }

        return this.props.children;
    }
}
