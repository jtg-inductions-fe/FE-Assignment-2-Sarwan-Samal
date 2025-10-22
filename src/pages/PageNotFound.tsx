import { useNavigate } from 'react-router-dom';

import { ErrorComponent } from '@components';
import { ERROR_MESSAGES, PAGE_404, ROUTES } from '@constant';

export const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <ErrorComponent
            img={PAGE_404}
            title={ERROR_MESSAGES.PAGE_NOT_FOUND.title}
            description={ERROR_MESSAGES.PAGE_NOT_FOUND.description}
            buttonConfig={{
                onClick: () => void navigate(ROUTES.CORE.HOME),
                children: 'Go back home',
            }}
        ></ErrorComponent>
    );
};
