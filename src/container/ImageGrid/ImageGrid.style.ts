import { Box, styled } from '@mui/material';

export const StyledImage = styled(Box)(() => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
})) as typeof Box;
