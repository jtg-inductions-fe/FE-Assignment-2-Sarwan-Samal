import { StyledAvatar } from './CustomAvatar.style';
import { CustomAvatarProps } from './CustomAvatar.types';

export const CustomAvatar = ({
    src,
    size,
    hasBoxShadow,
    ...rest
}: CustomAvatarProps) => (
    <StyledAvatar src={src} size={size} hasBoxShadow={hasBoxShadow} {...rest} />
);
