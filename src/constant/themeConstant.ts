/**
 * Color palette used in the application.
 * @constant
 */
export const COLORS = {
    GRAY: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        900: '#111827',
    },
    RED: {
        200: '#FBD5D5',
        800: '#9B1C1C',
    },
    GREEN: {
        100: '#DEF7EC',
        500: '#0E9F6E',
        800: '#03543F',
    },
    BLUE: {
        100: '#E1EFFE',
        800: '#1E429F',
    },
    WHITE: '#FFFFFF',
} as const;

/**
 * Base font size in pixels.
 * @constant
 */
export const HTML_FONT_SIZE = 10;

/**
 * Scaling factor used for spacing.
 * @constant
 */
export const SCALING_FACTOR = 4;

/**
 * Height for header in mobile.
 * @constant
 */
export const HEADER_HEIGHT_MOBILE = 64;

/**
 * Height for header in mobile.
 * @constant
 */
export const HEADER_HEIGHT_DESKTOP = 70;

/**
 * Width for sidebar in mobile.
 * @constant
 */
export const SIDEBAR_WIDTH_MOBILE = 300;

/**
 * Width for sidebar in desktop.
 * @constant
 */
export const SIDEBAR_WIDTH_DESKTOP = 250;

/**
 * Separates main navigation from separate items.
 * @constant
 */
export const DIVIDER_AFTER_INDEX = 4;
