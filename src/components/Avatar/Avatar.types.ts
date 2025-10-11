import { AvatarProps as MuiAvatarProps } from '@mui/material';

export type AvatarProps = {
    size: 'small' | 'medium' | 'large';
    hasBoxShadow?: boolean;
    hasPopover?: boolean;
    popoverName?: string;
    popoverEmail?: string;
} & MuiAvatarProps;
