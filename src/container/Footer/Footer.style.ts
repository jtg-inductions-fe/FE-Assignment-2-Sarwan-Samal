import { Box, styled } from '@mui/material';
export const StyledBox = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(6),
    [breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: spacing(4),
    },
}));
