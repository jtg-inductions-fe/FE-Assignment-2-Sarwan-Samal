import { Box, Stack } from '@mui/material';

import { ImageGrid, LatestCustomer, Sales } from '@container';

export const Home = () => (
    <Stack p={4} gap={4}>
        <Box component="section">
            <ImageGrid />
        </Box>
        <Box component="section">
            <Sales />
        </Box>
        <Box component="section">
            <LatestCustomer />
        </Box>
    </Stack>
);
