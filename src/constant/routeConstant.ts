export const ROUTES = {
    CORE: {
        HOME: '/',
        OVERVIEW: '/overview',
        NOTIFICATIONS: '/notifications',
        MESSAGES: '/messages',
    },
    PAGES: {
        ABOUT: '/about',
        DISCOVER: '/discover',
        SALES: '/sales',
    },
    SALES: {
        PRODUCT_LIST: '/product-list',
        BILLING: '/billing',
        INVOICE: '/invoice',
    },
    AUTH: {
        LOGIN: '/login',
        SIGNUP: '/signup',
    },
    SUPPORT: {
        DOCS: '/docs',
        COMPONENTS: '/components',
        HELP: '/help',
    },
    UTILS: {
        ADJUSTMENTS: '/adjustments',
        GLOBE: '/globe',
        COG: '/cog',
    },
    NOT_FOUND: '*',
} as const;
