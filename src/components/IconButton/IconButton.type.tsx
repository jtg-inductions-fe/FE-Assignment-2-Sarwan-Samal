import { IconButtonProps as MuiIconButtonProps } from '@mui/material';

export type IconButtonProps = {
    isRounded?: boolean;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    hasBoxShadow?: boolean;
} & MuiIconButtonProps;
