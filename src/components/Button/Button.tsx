import { ButtonProps, Typography, TypographyProps } from '@mui/material';

import { StyledButton } from './Button.style';

export interface CustomButtonProps extends ButtonProps {
    typographyVariant?: TypographyProps['variant'];
    textTransform?: TypographyProps['textTransform'];
}

export const Button = ({
    children,
    typographyVariant = 'caption',
    textTransform = 'none',
    ...props
}: CustomButtonProps) => (
    <StyledButton {...props}>
        <Typography variant={typographyVariant} textTransform={textTransform}>
            {children}
        </Typography>
    </StyledButton>
);
