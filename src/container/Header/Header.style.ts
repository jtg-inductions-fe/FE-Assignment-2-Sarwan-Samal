import { Box, styled } from '@mui/material';
export const HeaderBox = styled(Box)(
    ({ theme: { palette, spacing, breakpoints } }) => ({
        backgroundColor: palette.background.paper,
        padding: spacing(4),
        borderBottom: `1px solid ${palette.divider}`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: spacing(16),
        [breakpoints.up('md')]: {
            height: spacing(17.25),
        },
    }),
);
