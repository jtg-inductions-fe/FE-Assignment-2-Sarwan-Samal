import type { Components } from '@mui/material/styles';

import InterRegularTTF from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            '@font-face': {
                fontDisplay: 'swap',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                src: `url(${InterRegularWOFF2}) format('woff2'), 
        url(${InterRegularTTF}) format('truetype')`,
            },
        },
    },
    MuiAvatar: {
        styleOverrides: {
            root: {
                height: 32,
                width: 32,
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            sizeSmall: {
                width: 28,
                height: 28,
            },
            sizeMedium: {
                width: 32,
                height: 32,
            },
            sizeLarge: {
                width: 34,
                height: 34,
            },
        },
    },
};
