import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = ({ error }: FallbackProps) => (
    <div>
        <h2>Something Went Wrong: </h2>
        <pre>{error.message}</pre>
    </div>
);
