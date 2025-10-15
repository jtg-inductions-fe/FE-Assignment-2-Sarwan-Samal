import { ListItemButtonProps } from '@mui/material';

export type NavItemProps = {
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    label: string;
    to: string;
    chipValue?: string;
    chipSize?: 'small' | 'medium';
    chipColor?: 'success' | 'info' | 'warning';
} & ListItemButtonProps;
