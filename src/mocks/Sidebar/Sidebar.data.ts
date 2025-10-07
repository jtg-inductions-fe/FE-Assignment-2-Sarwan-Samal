import OverviewIcon from '@assets/icons/chart-pie.svg?react';
import DocsIcon from '@assets/icons/clipboard-list.svg?react';
import ComponentsIcon from '@assets/icons/collection.svg?react';
import PagesIcon from '@assets/icons/document-report.svg?react';
import MessagesIcon from '@assets/icons/inbox-in.svg?react';
import AuthenticationIcon from '@assets/icons/lock-closed.svg?react';
import SalesIcon from '@assets/icons/shopping-bag.svg?react';
import HelpIcon from '@assets/icons/support.svg?react';
import { SideBarItemProps } from '@container';

export const SidebarData: SideBarItemProps[] = [
    {
        icon: OverviewIcon,
        label: 'Overview',
        to: '/overview',
    },
    {
        icon: PagesIcon,
        label: 'Pages',
        children: [
            {
                label: 'About',
                to: '/about',
            },
            {
                label: 'Discover',
                to: '/discover',
            },
            {
                label: 'Sales',
                to: '/sales',
            },
        ],
    },
    {
        icon: SalesIcon,
        label: 'Sales',
        children: [
            {
                label: 'Product List',
                to: '/product-list',
            },
            {
                label: 'Billing',
                to: '/billing',
            },
            {
                label: 'Invoice',
                to: '/invoice',
            },
        ],
    },
    {
        icon: MessagesIcon,
        label: 'Messages',
        to: '/messages',
        notificationCount: 1,
    },
    {
        icon: AuthenticationIcon,
        label: 'Authentication',
        children: [
            {
                label: 'Login',
                to: 'login',
            },
            {
                label: 'Signup',
                to: '/signup',
            },
        ],
    },
    {
        icon: DocsIcon,
        label: 'Docs',
        to: '/docs',
    },
    {
        icon: ComponentsIcon,
        label: 'Components',
        to: '/components',
    },
    {
        icon: HelpIcon,
        label: 'Help',
        to: '/help',
    },
];
