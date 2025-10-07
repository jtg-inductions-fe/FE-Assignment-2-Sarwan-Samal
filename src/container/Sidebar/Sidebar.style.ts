import { Box, Drawer, styled } from '@mui/material';

import { SIDEBAR_WIDTH_DESKTOP, SIDEBAR_WIDTH_MOBILE } from '@constant';

export const SidebarWrapper = styled(Box)(
    ({ theme: { spacing, palette, breakpoints } }) => ({
        padding: spacing(3),
        backgroundColor: palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: `calc(100vh - 67px)`,
        width: `${SIDEBAR_WIDTH_MOBILE}px`,
        [breakpoints.up('md')]: {
            width: `${SIDEBAR_WIDTH_DESKTOP}px`,
            height: `calc(100vh - 79px)`,
        },
    }),
);

export const StyledDrawer = styled(Drawer)(() => ({
    '& , .MuiBackdrop-root, .MuiDrawer-paper': {
        top: '67px',
    },
}));
