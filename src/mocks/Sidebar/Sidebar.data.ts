import OverviewIcon from '@assets/icons/chart-pie.svg?react';
import DocsIcon from '@assets/icons/clipboard-list.svg?react';
import ComponentsIcon from '@assets/icons/collection.svg?react';
import PagesIcon from '@assets/icons/document-report.svg?react';
import MessagesIcon from '@assets/icons/inbox-in.svg?react';
import AuthenticationIcon from '@assets/icons/lock-closed.svg?react';
import SalesIcon from '@assets/icons/shopping-bag.svg?react';
import HelpIcon from '@assets/icons/support.svg?react';
import { ROUTES } from '@constant';
import { SidebarItemProps } from '@container';

export const SidebarData: SidebarItemProps[] = [
    {
        icon: OverviewIcon,
        label: 'Overview',
        to: ROUTES.OVERVIEW,
    },
    {
        icon: PagesIcon,
        label: 'Pages',
        children: [
            {
                label: 'About',
                to: ROUTES.ABOUT,
            },
            {
                label: 'Discover',
                to: ROUTES.DISCOVER,
            },
            {
                label: 'Sales',
                to: ROUTES.SALES,
            },
        ],
    },
    {
        icon: SalesIcon,
        label: 'Sales',
        children: [
            {
                label: 'Product List',
                to: ROUTES.PRODUCT_LIST,
            },
            {
                label: 'Billing',
                to: ROUTES.BILLING,
            },
            {
                label: 'Invoice',
                to: ROUTES.INVOICE,
            },
        ],
    },
    {
        icon: MessagesIcon,
        label: 'Messages',
        to: ROUTES.MESSAGES,
        notificationCount: 1,
    },
    {
        icon: AuthenticationIcon,
        label: 'Authentication',
        children: [
            {
                label: 'Login',
                to: ROUTES.LOGIN,
            },
            {
                label: 'Signup',
                to: ROUTES.SIGNUP,
            },
        ],
    },
    {
        icon: DocsIcon,
        label: 'Docs',
        to: ROUTES.DOCS,
    },
    {
        icon: ComponentsIcon,
        label: 'Components',
        to: ROUTES.COMPONENTS,
    },
    {
        icon: HelpIcon,
        label: 'Help',
        to: ROUTES.HELP,
    },
];
