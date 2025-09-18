import { AvatarProps } from '@mui/material';

export type CustomAvatarProps = {
    src?: string;
    size: number;
    hasBoxShadow?: boolean;
} & AvatarProps;
