import { Card, styled } from '@mui/material';

import { CardProps } from './Card.type';

export const StyledCard = styled(Card, {
    shouldForwardProp: (prop) => prop !== 'size',
})<CardProps>(({ theme: { spacing, palette }, size = 'sm' }) => {
    const paddingValue = {
        sm: spacing(2),
        md: spacing(4),
        lg: spacing(6),
        xl: spacing(8),
    };

    return {
        backgroundColor: palette.background.paper,
        padding: paddingValue[size],
        borderRadius: spacing(3),
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(4),
        height: '100%',
    };
});
