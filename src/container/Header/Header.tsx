import { Link } from 'react-router';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';

import { SearchBar } from '@components';
import { LOGO } from '@constant';

import { HeaderBox } from './Header.style';
export const Header = () => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <HeaderBox>
            {isMedium ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
        </HeaderBox>
    );
};
