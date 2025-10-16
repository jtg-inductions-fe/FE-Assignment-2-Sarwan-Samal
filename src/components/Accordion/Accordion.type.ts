import { AccordionProps as MuiAccordionProps } from '@mui/material';
export type AccordionItem = {
    label: string;
    to: string;
};

export type AccordionProps = {
    label: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    to?: string;
    items?: AccordionItem[];
    handleClose?: () => void;
} & Omit<MuiAccordionProps, 'children'>;
