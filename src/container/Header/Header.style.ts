import { Box, styled } from '@mui/material';

import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE } from '@constant';
export const HeaderBox = styled(Box)(
    ({ theme: { palette, spacing, breakpoints } }) => ({
        backgroundColor: palette.background.paper,
        padding: spacing(4),
        borderBottom: `1px solid ${palette.divider}`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: `${HEADER_HEIGHT_MOBILE}px`,
        [breakpoints.up('md')]: {
            height: `${HEADER_HEIGHT_DESKTOP}px`,
        },
    }),
);
