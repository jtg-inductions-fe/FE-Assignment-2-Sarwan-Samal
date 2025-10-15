import type { Components } from '@mui/material/styles';

import InterVariableTTF from '@assets/fonts/inter/InterVariable.ttf';
import InterVariableWOFF2 from '@assets/fonts/inter/InterVariable.woff2';

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
                fontWeight: '100 900',
                src: `url(${InterVariableWOFF2}) format('woff2'), 
        url(${InterVariableTTF}) format('truetype')`,
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
                width: 24,
                height: 24,
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
