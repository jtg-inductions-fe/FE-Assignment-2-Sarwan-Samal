import { StyledIconButton } from './CustomIconButton.style';
import { CustomIconButtonProps } from './CustomIconButton.type';

export const CustomIconButton = ({
    icon: Icon,
    buttonSize,
    isRounded,
    hasBoxShadow,
    children,
    onClick,
    ...props
}: CustomIconButtonProps) => (
    <StyledIconButton
        buttonSize={buttonSize}
        isRounded={isRounded}
        hasBoxShadow={hasBoxShadow}
        onClick={onClick}
        {...props}
    >
        {Icon && <Icon />}
        {children}
    </StyledIconButton>
);
