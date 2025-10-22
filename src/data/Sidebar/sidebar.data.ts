import OverviewIcon from '@assets/icons/chart-pie.svg?react';
import DocsIcon from '@assets/icons/clipboard-list.svg?react';
import ComponentsIcon from '@assets/icons/collection.svg?react';
import PagesIcon from '@assets/icons/document-report.svg?react';
import MessagesIcon from '@assets/icons/inbox-in.svg?react';
import AuthenticationIcon from '@assets/icons/lock-closed.svg?react';
import SalesIcon from '@assets/icons/shopping-bag.svg?react';
import HelpIcon from '@assets/icons/support.svg?react';

import { ROUTES } from '@constant';
import { SidebarItemProps } from '@data';

export const SidebarData: SidebarItemProps[] = [
    {
        icon: OverviewIcon,
        label: 'Overview',
        to: ROUTES.CORE.OVERVIEW,
    },
    {
        icon: PagesIcon,
        label: 'Pages',
        children: [
            {
                label: 'About',
                to: ROUTES.PAGES.ABOUT,
            },
            {
                label: 'Discover',
                to: ROUTES.PAGES.DISCOVER,
            },
            {
                label: 'Sales',
                to: ROUTES.PAGES.SALES,
            },
        ],
    },
    {
        icon: SalesIcon,
        label: 'Sales',
        children: [
            {
                label: 'Product List',
                to: ROUTES.SALES.PRODUCT_LIST,
            },
            {
                label: 'Billing',
                to: ROUTES.SALES.BILLING,
            },
            {
                label: 'Invoice',
                to: ROUTES.SALES.INVOICE,
            },
        ],
    },
    {
        icon: MessagesIcon,
        label: 'Messages',
        to: ROUTES.CORE.MESSAGES,
        notificationCount: 1,
    },
    {
        icon: AuthenticationIcon,
        label: 'Authentication',
        children: [
            {
                label: 'Login',
                to: ROUTES.AUTH.LOGIN,
            },
            {
                label: 'Signup',
                to: ROUTES.AUTH.SIGNUP,
            },
        ],
    },
    {
        icon: DocsIcon,
        label: 'Docs',
        to: ROUTES.SUPPORT.DOCS,
    },
    {
        icon: ComponentsIcon,
        label: 'Components',
        to: ROUTES.SUPPORT.COMPONENTS,
    },
    {
        icon: HelpIcon,
        label: 'Help',
        to: ROUTES.SUPPORT.HELP,
    },
];
