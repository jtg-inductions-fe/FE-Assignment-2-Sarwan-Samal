import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';

import {
    Footer,
    ImageGrid,
    LatestCustomer,
    Sales,
    TopProducts,
    Transactions,
} from '@container';

export const Home = () => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Stack p={4} gap={4}>
            <Box component="section" aria-label="Image Section For Homepage">
                <ImageGrid />
            </Box>
            <Box component="section" aria-label="Sales Data With LineChart">
                <Sales />
            </Box>
            <Stack
                direction={isMedium ? 'row' : 'column'}
                gap={4}
                alignItems="stretch"
            >
                <Box
                    flexGrow={1}
                    component="section"
                    aria-label="Latest Customers"
                >
                    <LatestCustomer />
                </Box>
                <Box flexGrow={4} component="section" aria-label="Top Products">
                    <TopProducts />
                </Box>
            </Stack>
            <Box component="section" aria-label="Latest Transaction">
                <Transactions />
            </Box>
            <Box component="footer">
                <Footer />
            </Box>
        </Stack>
    );
};
