import { useState } from 'react';

import { Outlet } from 'react-router';

import { Box, Stack } from '@mui/material';

import { Header, Sidebar } from '@container';
import { useDataContext } from '@context';
export const BaseLayout = () => {
    const { sidebarData } = useDataContext();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    return (
        <>
            <Header onMenuClick={toggleSidebar} />
            <Stack direction="row">
                <Sidebar
                    items={sidebarData}
                    open={isSidebarOpen}
                    onClose={toggleSidebar}
                />
                <Box component="main" maxWidth={1600} mx="auto">
                    <Outlet />
                </Box>
            </Stack>
        </>
    );
};
