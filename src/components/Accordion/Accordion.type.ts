import { AccordionProps as MuiAccordionProps } from '@mui/material';
export type AccordionItem = {
    label: string;
    to: string;
};

export type AccordionProps = {
    label: string;
    to?: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    items?: AccordionItem[];
} & Omit<MuiAccordionProps, 'children'>;
