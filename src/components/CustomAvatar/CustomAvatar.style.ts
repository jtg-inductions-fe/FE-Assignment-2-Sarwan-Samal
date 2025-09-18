import { Avatar, styled } from '@mui/material';

import { CustomAvatarProps } from './CustomAvatar.types';

export const StyledAvatar = styled(Avatar, {
    shouldForwardProp: (prop) => prop !== 'size' && prop !== 'hasBoxShadow',
})<CustomAvatarProps>(({ theme: { shadows }, size, hasBoxShadow }) => ({
    height: size,
    width: size,
    boxShadow: hasBoxShadow ? shadows[5] : 'none',
}));
