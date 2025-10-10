import { IconButton } from 'components/IconButton';

import { Box, Stack, Typography } from '@mui/material';

import { theme } from '@theme';

import { StyledCard } from './Card.style';
import { CardProps } from './Card.type';

export const Card = ({
    size,
    heading,
    subHeading,
    icon,
    children,
}: CardProps) => (
    <StyledCard size={size}>
        <Box>
            <Stack direction="row" alignItems="center" spacing={2.5}>
                <Typography variant="h2" color={theme.palette.text.primary}>
                    {heading}
                </Typography>
                {icon && <IconButton icon={icon} size="small" />}
            </Stack>
            <Typography variant="h3" color={theme.palette.text.secondary}>
                {subHeading}
            </Typography>
        </Box>
        {children}
    </StyledCard>
);
