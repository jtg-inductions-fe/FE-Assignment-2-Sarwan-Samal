import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: spacing(2),
}));
