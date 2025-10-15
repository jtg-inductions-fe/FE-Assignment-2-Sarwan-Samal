import { ListItemButton, styled } from '@mui/material';

export const StyledNavItem = styled(ListItemButton)(
    ({ theme: { palette, spacing, shape } }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: spacing(1, 2),
        borderRadius: shape.borderRadius * 3,
        color: palette.text.primary,
        '&.active': {
            color: palette.success.main,
        },
    }),
) as typeof ListItemButton;
