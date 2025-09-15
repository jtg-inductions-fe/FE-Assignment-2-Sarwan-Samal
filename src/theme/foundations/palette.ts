import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.GREEN[500],
        light: COLORS.GREEN[100],
        dark: COLORS.GREEN[800],
    },
    secondary: {
        main: COLORS.GRAY[400],
        light: COLORS.GRAY[100],
        dark: COLORS.GRAY[600],
    },
    success: {
        main: COLORS.GREEN[500],
        light: COLORS.GREEN[100],
        dark: COLORS.GREEN[800],
    },
    info: {
        main: COLORS.BLUE[800],
        light: COLORS.BLUE[100],
    },
    warning: {
        main: COLORS.RED[800],
        light: COLORS.RED[200],
    },
    background: {
        default: COLORS.GRAY[50],
        paper: COLORS.WHITE,
    },
    text: {
        primary: COLORS.GRAY[900],
        secondary: COLORS.GRAY[500],
    },
    divider: COLORS.GRAY[200],
};
