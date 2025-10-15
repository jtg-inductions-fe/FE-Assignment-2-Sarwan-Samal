import { useNavigate } from 'react-router-dom';

import { ErrorComponent } from '@components';
import { ERROR_MESSAGES, ROUTES, WRONG_PAGE } from '@constant';

type FallbackProps = {
    error: Error;
    resetError: () => void;
};

export const ErrorFallback = ({ resetError }: FallbackProps) => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        resetError();
        void navigate(ROUTES.HOME);
    };
    return (
        <ErrorComponent
            img={WRONG_PAGE}
            title={ERROR_MESSAGES.WRONG_PAGE.title}
            description={ERROR_MESSAGES.WRONG_PAGE.description}
            buttonConfig={{
                onClick: handleRedirect,
                children: 'Go back home',
            }}
        ></ErrorComponent>
    );
};
