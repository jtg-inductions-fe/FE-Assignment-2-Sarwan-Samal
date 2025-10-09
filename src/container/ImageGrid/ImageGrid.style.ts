import { Box, styled } from '@mui/material';

//Note: Must be used with component="img" for objectFit to work
export const StyledImage = styled(Box)(() => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
})) as typeof Box;
