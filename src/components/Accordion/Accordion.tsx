import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

import { NavItem } from '@components';

import { StyledAccordion } from './Accordion.style';
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
    <StyledAccordion elevation={0} {...props} disableGutters>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            {Icon && <Icon />}
            <Typography variant="subtitle1" fontWeight={500}>
                {label}
            </Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
            {items.map((item) => (
                <NavItem
                    key={item.to || item.label}
                    label={item.label}
                    to={item.to}
                />
            ))}
        </StyledAccordionDetails>
    </StyledAccordion>
);
