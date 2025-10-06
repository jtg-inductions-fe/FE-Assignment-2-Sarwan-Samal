import { Avatar as MuiAvatar, styled } from '@mui/material';

import { AvatarProps } from './Avatar.types';

const sizeStyles = {
    small: { width: 28, height: 28 },
    medium: { width: 32, height: 32 },
    large: { width: 36, height: 36 },
};

export const StyledAvatar = styled(MuiAvatar, {
    shouldForwardProp: (prop) =>
        prop !== 'size' &&
        prop !== 'hasBoxShadow' &&
        prop !== 'popoverName' &&
        prop !== 'popoverEmail',
})<AvatarProps>(({ theme: { shadows }, size = 'medium', hasBoxShadow }) => ({
    ...sizeStyles[size],
    boxShadow: hasBoxShadow ? shadows[5] : 'none',
}));
