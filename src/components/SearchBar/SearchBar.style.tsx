import { styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(
    ({ theme: { palette, spacing, shadows, shape } }) => ({
        minWidth: spacing(100),
        backgroundColor: palette.background.default,
        fieldset: {
            border: `1px solid ${palette.divider}`,
            boxShadow: shadows[3],
            borderRadius: spacing(shape.borderRadius),
        },
        '& .MuiOutlinedInput-root': {
            padding: spacing(1, 2),
        },
        '& .MuiInputAdornment-positionStart': {
            marginRight: 0,
        },
    }),
);
