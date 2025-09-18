import { forwardRef } from 'react';

import { StyledIconButton } from './IconButton.style';
import { IconButtonProps } from './IconButton.type';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            icon: Icon,
            buttonSize,
            isRounded,
            hasBoxShadow,
            children,
            onClick,
            ...props
        }: IconButtonProps,
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
IconButton.displayName = 'IconButton';
