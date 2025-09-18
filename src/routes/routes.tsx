import { RouteObject } from 'react-router';

import { BaseLayout } from '@layouts';
import { Home, PageNotFound } from '@pages';

export const routes: RouteObject[] = [
    {
        path: '/',
        Component: BaseLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '*',
                Component: PageNotFound,
            },
        ],
    },
];
