import { StyledAvatar } from './Avatar.style';
import { AvatarProps } from './Avatar.types';

export const Avatar = ({ src, size, hasBoxShadow, ...rest }: AvatarProps) => (
    <StyledAvatar src={src} size={size} hasBoxShadow={hasBoxShadow} {...rest} />
);
