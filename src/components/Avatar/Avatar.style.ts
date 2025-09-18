import { Avatar as MuiAvatar, styled } from '@mui/material';

import { AvatarProps } from './Avatar.types';

export const StyledAvatar = styled(MuiAvatar, {
    shouldForwardProp: (prop) => prop !== 'size' && prop !== 'hasBoxShadow',
})<AvatarProps>(({ theme: { shadows }, size, hasBoxShadow }) => ({
    height: size,
    width: size,
    boxShadow: hasBoxShadow ? shadows[5] : 'none',
}));
