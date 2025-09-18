import { IconButtonProps } from '@mui/material';

export type CustomIconButtonProps = {
    buttonSize: number;
    isRounded?: boolean;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    hasBoxShadow?: boolean;
} & IconButtonProps;
