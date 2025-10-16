import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

import { LogoProps } from './Logo.type';

export const Logo = ({ src, to, alt }: LogoProps) => (
    <Box component={Link} to={to} height={35}>
        <img src={src} alt={alt} />
    </Box>
);
