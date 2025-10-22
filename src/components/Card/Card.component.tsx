import React from 'react';

import { Box, Popover, Stack, Typography, useTheme } from '@mui/material';

import { IconButton } from '@components';

import { StyledCard } from './Card.style';
import { CardProps } from './Card.type';

export const Card = ({
    size,
    heading,
    subHeading,
    icon,
    children,
}: CardProps) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null,
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <StyledCard size={size}>
            <Box>
                <Stack direction="row" alignItems="center" spacing={2.5}>
                    {heading && (
                        <Typography
                            variant="h2"
                            color={theme.palette.text.primary}
                        >
                            {heading}
                        </Typography>
                    )}
                    {icon && (
                        <>
                            <IconButton
                                icon={icon}
                                size="small"
                                aria-label="Chart Info"
                                onClick={handleClick}
                            />
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                sx={{ borderRadius: theme.spacing(3) }}
                            >
                                <Typography sx={{ p: 4 }}>
                                    The X-axis shows dates within the selected
                                    time range.
                                </Typography>
                                <Typography sx={{ p: 4 }}>
                                    The Y-axis represents sales in thousands
                                    (K).
                                </Typography>
                                <Typography sx={{ p: 4 }}>
                                    Hover over any point to see exact sales
                                    figures for that day.
                                </Typography>
                            </Popover>
                        </>
                    )}
                </Stack>
                {subHeading && (
                    <Typography
                        variant="h3"
                        color={theme.palette.text.secondary}
                    >
                        {subHeading}
                    </Typography>
                )}
            </Box>
            <Box>{children}</Box>
        </StyledCard>
    );
};
