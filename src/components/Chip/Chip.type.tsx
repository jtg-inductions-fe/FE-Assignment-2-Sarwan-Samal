import { ChipProps as MuiChipProps } from '@mui/material';
export type ChipProps = {
    label: number | string;
    color: 'success' | 'info' | 'warning' | 'primary' | 'secondary' | 'error';
} & MuiChipProps;
