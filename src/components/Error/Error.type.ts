import { ButtonProps } from '@mui/material';

export type ErrorProps = {
    img: string;
    title: string;
    description: string;
    buttonConfig: Pick<
        ButtonProps,
        'variant' | 'color' | 'href' | 'onClick' | 'disabled' | 'children'
    >;
};
