import { IconButtonProps as MuiIconButtonProps } from '@mui/material';

export type IconButtonProps = {
    buttonSize: number;
    isRounded?: boolean;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    hasBoxShadow?: boolean;
} & MuiIconButtonProps;
