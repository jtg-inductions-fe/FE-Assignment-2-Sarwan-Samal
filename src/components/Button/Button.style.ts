import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(
    ({ theme: { palette, spacing } }) => ({
        color: palette.background.paper,
        backgroundColor: palette.success.main,
        padding: spacing(2, 4),
        borderRadius: spacing(3),
        width: 'fit-content',
        '&:hover': {
            backgroundColor: palette.success.dark,
        },
        '&:active': {
            backgroundColor: palette.success.light,
        },
    }),
);
