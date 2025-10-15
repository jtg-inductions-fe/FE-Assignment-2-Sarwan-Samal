import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';

import { ImageGrid, LatestCustomer, Sales, TopProducts } from '@container';

export const Home = () => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Stack p={4} gap={4}>
            <Box component="section">
                <ImageGrid />
            </Box>
            <Box component="section">
                <Sales />
            </Box>
            <Stack
                direction={isMedium ? 'row' : 'column'}
                gap={4}
                alignItems="stretch"
            >
                <Box flexGrow={1} component="section">
                    <LatestCustomer />
                </Box>
                <Box flexGrow={4} component="section">
                    <TopProducts />
                </Box>
            </Stack>
        </Stack>
    );
};
