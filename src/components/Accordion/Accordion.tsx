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
    handleClose,
    ...props
}: AccordionProps) => (
    <StyledAccordion elevation={0} {...props} disableGutters>
        <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            onClick={(e) => e.stopPropagation()}
        >
            {Icon && <Icon />}
            <Typography variant="subtitle1" fontWeight={500} component="span">
                {label}
            </Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
            {items.map((item) => (
                <NavItem
                    key={item.to || item.label}
                    label={item.label}
                    to={item.to}
                    onClick={handleClose}
                />
            ))}
        </StyledAccordionDetails>
    </StyledAccordion>
);
