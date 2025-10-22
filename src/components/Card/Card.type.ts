import { CardProps as MuiCardProps } from '@mui/material';

export type CardProps = {
    size: 'sm' | 'md' | 'lg' | 'xl';
    heading?: string;
    subHeading?: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} & MuiCardProps;
