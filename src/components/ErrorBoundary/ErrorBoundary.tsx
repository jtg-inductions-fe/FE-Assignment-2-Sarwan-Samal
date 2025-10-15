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
            errorKey: 0,
        };
    }

    resetError = () => {
        this.setState((prev) => ({
            hasError: false,
            error: null,
            errorKey: prev.errorKey + 1,
        }));
    };

    static getDerivedStateFromError(
        error: Error,
        errorKey: number,
    ): ErrorBoundaryState {
        return { hasError: true, error: error, errorKey: errorKey };
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

        return <div key={this.state.errorKey}>{this.props.children}</div>;
    }
}
