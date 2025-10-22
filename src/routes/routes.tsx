import { BaseLayout } from 'components/Layout';
import { RouteObject } from 'react-router';

import { CustomError } from '@components';
import { ROUTES } from '@constant';
import { Home, PageNotFound } from '@pages';

const getDevErrorRoutes = () => {
    if (!import.meta.env.DEV) {
        return [];
    }

    return [
        {
            path: 'error-boundary',
            element: <CustomError />,
        },
    ];
};

export const routes: RouteObject[] = [
    {
        path: ROUTES.CORE.HOME,
        Component: BaseLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            ...getDevErrorRoutes(),
            {
                path: ROUTES.NOT_FOUND,
                Component: PageNotFound,
            },
        ],
    },
];
