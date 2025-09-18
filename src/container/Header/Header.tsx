import { useState } from 'react';

import { HandleSearchProps } from 'components/SearchBar/SearchBar.type';
import { Link, useNavigate } from 'react-router-dom';

import {
    Box,
    Popover,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import NotificationsIcon from '@assets/icons/Bell.svg?react';
import MenuIcon from '@assets/icons/menu.svg?react';
import { Avatar, IconButton, SearchBar } from '@components';
import { LOGO } from '@constant';
import { useDataContext } from '@context';
import type { Product } from '@mocks';

import { HeaderBox } from './Header.style';

export const Header = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const [popoverAnchorEl, setpopoverAnchorEl] =
        useState<HTMLButtonElement | null>(null);
    const popoverOpen = Boolean(popoverAnchorEl);
    const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        setpopoverAnchorEl(event.currentTarget);
    const handlePopoverClose = () => setpopoverAnchorEl(null);
    const popoverId = popoverOpen ? 'user-popover' : undefined;

    const { user, products } = useDataContext();
    const searchValue = products.map((item: Product) => item.title);

    const handleSearch = ({
        value,
        products: ProductDataList,
        navigate: nav,
    }: HandleSearchProps) => {
        const val = typeof value === 'string' ? value.trim() : '';
        if (!val) return;
        const currProd = ProductDataList.find(
            (product) => product.title === val,
        );
        if (currProd) void nav(currProd.to);
        else void nav(val);
    };

    return (
        <HeaderBox>
            {isMedium ? (
                <Stack direction="row" gap={8} sx={{ alignItems: 'center' }}>
                    <Link to="/" style={{ height: '3.5rem' }}>
                        <img src={LOGO} alt="Logo" />
                    </Link>
                    <SearchBar
                        placeholder="Search"
                        options={searchValue}
                        getOptionLabel={(val: string) => val}
                        onChange={(e, value) => {
                            void handleSearch({
                                e,
                                value,
                                products,
                                navigate,
                            });
                        }}
                    />
                </Stack>
            ) : (
                <IconButton buttonSize={35} aria-label="Open Menu">
                    <MenuIcon />
                </IconButton>
            )}
            <Stack direction="row" gap={3} sx={{ alignItems: 'center' }}>
                <IconButton
                    aria-label="Notifications"
                    buttonSize={32}
                    hasBoxShadow={isMedium}
                    isRounded={isMedium}
                    onClick={() => void navigate('/notfications')}
                    icon={NotificationsIcon}
                />
                <IconButton
                    aria-label="Open User Popover"
                    aria-describedby={popoverId}
                    onClick={handlePopoverClick}
                    buttonSize={32}
                    isRounded
                    hasBoxShadow={isMedium}
                >
                    <Avatar src={user.image} size={32} alt="User Avatar" />
                </IconButton>
                <Popover
                    id={popoverId}
                    open={popoverOpen}
                    onClose={handlePopoverClose}
                    anchorEl={popoverAnchorEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                >
                    <Box
                        sx={{
                            p: 3,
                            background: theme.palette.background.default,
                        }}
                    >
                        <Typography variant="subtitle1">{user.name}</Typography>
                        <Typography variant="subtitle2">
                            {user.email}
                        </Typography>
                    </Box>
                </Popover>
            </Stack>
        </HeaderBox>
    );
};
