import { useNavigate } from 'react-router-dom';

import { Error } from '@components';
import { WRONG_PAGE } from '@constant';
import { ROUTES } from '@constant';

type FallbackProps = {
    resetError: () => void;
};

export const ErrorFallback = ({ resetError }: FallbackProps) => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        resetError();
        void navigate(ROUTES.HOME);
    };
    return (
        <Error
            img={WRONG_PAGE}
            title="Something has gone seriously wrong"
            description="It’s always time for a coffee break We should be back by the time you finish your coffee."
            buttonConfig={{
                onClick: handleRedirect,
                children: 'Go back home',
            }}
        ></Error>
    );
};
