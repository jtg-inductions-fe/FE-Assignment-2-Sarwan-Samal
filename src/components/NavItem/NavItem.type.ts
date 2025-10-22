import { ListItemButtonProps } from '@mui/material';

export type NavItemProps = {
    to: string;
    label: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    chipValue?: string;
    chipSize?: 'small' | 'medium';
    chipColor?: 'success' | 'info' | 'warning';
} & ListItemButtonProps;
