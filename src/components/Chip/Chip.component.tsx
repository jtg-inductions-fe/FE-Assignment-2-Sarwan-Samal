import { Chip as MuiChip } from '@mui/material';

import { ChipProps } from './Chip.type';

export const Chip = ({ color, label, ...props }: ChipProps) => (
    <MuiChip
        label={label}
        size="small"
        variant="filled"
        color="success"
        sx={(theme) => ({
            backgroundColor: theme.palette[color].light,
            color: theme.palette[color].main,
            ...theme.typography.subtitle2,
        })}
        {...props}
    />
);
