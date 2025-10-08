import { ButtonProps, Typography } from '@mui/material';

import { StyledButton } from './Button.style';

export const Button = ({ children, ...props }: ButtonProps) => (
    <StyledButton {...props}>
        <Typography variant="caption" textTransform="none">
            {children}
        </Typography>
    </StyledButton>
);
