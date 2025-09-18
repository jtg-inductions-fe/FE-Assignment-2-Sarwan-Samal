import { forwardRef } from 'react';

import { StyledIconButton } from './CustomIconButton.style';
import { CustomIconButtonProps } from './CustomIconButton.type';

export const CustomIconButton = forwardRef<
    HTMLButtonElement,
    CustomIconButtonProps
>(
    (
        {
            icon: Icon,
            buttonSize,
            isRounded,
            hasBoxShadow,
            children,
            onClick,
            ...props
        }: CustomIconButtonProps,
        ref,
    ) => (
        <StyledIconButton
            ref={ref}
            buttonSize={buttonSize}
            isRounded={isRounded}
            hasBoxShadow={hasBoxShadow}
            onClick={onClick}
            type="button"
            {...props}
        >
            {Icon && <Icon aria-hidden={!!children} focusable="false" />}
            {children}
        </StyledIconButton>
    ),
);
CustomIconButton.displayName = 'CustomIconButton';
