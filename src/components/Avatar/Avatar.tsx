import { useState } from 'react';

import { Box, Popover, Typography, useTheme } from '@mui/material';

import { StyledAvatar } from './Avatar.style';
import { AvatarProps } from './Avatar.types';
export const Avatar = ({
    src,
    size,
    hasBoxShadow,
    popoverName,
    popoverEmail,
    ...rest
}: AvatarProps) => {
    const theme = useTheme();
    const [popoverAnchorEl, setpopoverAnchorEl] =
        useState<HTMLButtonElement | null>(null);
    const handlePopoverClick = (event: React.MouseEvent<HTMLElement>) => {
        setpopoverAnchorEl(event.currentTarget as HTMLButtonElement);
    };
    const handlePopoverClose = () => setpopoverAnchorEl(null);
    const popoverId = popoverAnchorEl ? 'user-popover' : undefined;
    return (
        <>
            <StyledAvatar
                src={src}
                size={size}
                hasBoxShadow={hasBoxShadow}
                onClick={handlePopoverClick}
                {...rest}
            />
            <Popover
                id={popoverId}
                open={Boolean(popoverAnchorEl)}
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
                    <Typography variant="subtitle1">{popoverName}</Typography>
                    <Typography variant="subtitle2">{popoverEmail}</Typography>
                </Box>
            </Popover>
        </>
    );
};
