import { NavLink } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Chip } from '@components';

import { StyledNavItem } from './NavItem.style';
import { NavItemProps } from './NavItem.type';

export const NavItem = ({
    icon: Icon,
    to,
    label,
    chipValue,
    chipSize = 'small',
    chipColor = 'warning',
}: NavItemProps) => (
    <StyledNavItem component={NavLink} to={to}>
        <Box
            display="flex"
            alignItems="center"
            gap={4}
            sx={{ ml: Icon ? 0 : 8 }}
        >
            {Icon && <Icon />}
            <Typography variant="subtitle1" fontWeight={500}>
                {label}
            </Typography>
        </Box>
        {chipValue && (
            <Chip label={chipValue} size={chipSize} color={chipColor} />
        )}
    </StyledNavItem>
);
