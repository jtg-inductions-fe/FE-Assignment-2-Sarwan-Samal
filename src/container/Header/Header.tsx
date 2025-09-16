import { useState } from 'react';

import { Link } from 'react-router';

import {
    Avatar,
    Box,
    IconButton,
    Popover,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import NotificationsIcon from '@assets/icons/Bell.svg?react';
import MenuIcon from '@assets/icons/menu.svg?react';
import { SearchBar } from '@components';
import { LOGO, mainAvatar } from '@constant';

import { HeaderBox } from './Header.style';
export const Header = () => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const [popoverAnchorEl, setpopoverAnchorEl] =
        useState<HTMLButtonElement | null>(null);
    const popoverOpen = Boolean(popoverAnchorEl);
    const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        setpopoverAnchorEl(event.currentTarget);
    const handlePopoverClose = () => setpopoverAnchorEl(null);
    const popoverId = popoverOpen ? 'user-popover' : undefined;
    return (
        <HeaderBox>
            {isMedium ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Link to="/" style={{ height: '3.5rem' }}>
                        <img src={LOGO} alt="Logo" />
                    </Link>
                    <SearchBar />
                </Box>
            ) : (
                <IconButton aria-label="Menu">
                    <MenuIcon />
                </IconButton>
            )}
            <Stack direction="row">
                <IconButton component={Link} to={'message'}>
                    <NotificationsIcon />
                </IconButton>
                <IconButton
                    aria-describedby={popoverId}
                    onClick={handlePopoverClick}
                >
                    <Avatar src={mainAvatar} alt="User" />
                </IconButton>
                <Popover
                    id={popoverId}
                    open={popoverOpen}
                    onClose={handlePopoverClose}
                    anchorEl={popoverAnchorEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                >
                    <Typography variant="h2">Sarwan Samal</Typography>
                </Popover>
            </Stack>
        </HeaderBox>
    );
};
