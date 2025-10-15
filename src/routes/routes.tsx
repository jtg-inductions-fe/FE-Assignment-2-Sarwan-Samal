import { RouteObject } from 'react-router';

import { ROUTES } from '@constant';
import { BaseLayout } from '@layouts';
import { Home, PageNotFound } from '@pages';

export const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        Component: BaseLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: ROUTES.NOT_FOUND,
                Component: PageNotFound,
            },
        ],
    },
];
