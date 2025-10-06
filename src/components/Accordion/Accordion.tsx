import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion as MuiAccordion, Typography } from '@mui/material';

import { NavItem } from '@components';

import {
    StyledAccordionDetails,
    StyledAccordionSummary,
} from './Accordion.style';
import { AccordionProps } from './Accordion.type';

export const Accordion = ({
    label,
    icon: Icon,
    items = [],
    ...props
}: AccordionProps) => (
    <MuiAccordion elevation={0} {...props}>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            {Icon && <Icon />}
            <Typography variant="subtitle1" fontWeight={500}>
                {label}
            </Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
            {items.map((item, index) => (
                <NavItem key={index} label={item.label} to={item.to} />
            ))}
        </StyledAccordionDetails>
    </MuiAccordion>
);
