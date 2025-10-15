import { Box, Stack } from '@mui/material';

import { ImageGrid } from '@container';

export const Home = () => (
    <Stack p={4}>
        <Box component="section">
            <ImageGrid />
        </Box>
    </Stack>
);
