import { useNavigate } from 'react-router-dom';

import { Error } from '@components';
import { PAGE_404 } from '@constant';
import { ROUTES } from '@constant';

export const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <Error
            img={PAGE_404}
            title="Page not found"
            description="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
            buttonConfig={{
                onClick: () => void navigate(ROUTES.HOME),
                children: 'Go back home',
            }}
        ></Error>
    );
};
