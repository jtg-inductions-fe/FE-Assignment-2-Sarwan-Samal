import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    styled,
} from '@mui/material';

export const StyledAccordion = styled(Accordion)(({ theme: { spacing } }) => ({
    borderRadius: spacing(3),
    '&::before': {
        display: 'none',
    },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(
    ({ theme: { palette, spacing, shape } }) => ({
        borderRadius: spacing(3),
        padding: spacing(1, 2),
        minHeight: spacing(4),
        '& .MuiAccordionSummary-content': {
            margin: 0,
            display: 'flex',
            gap: spacing(4),
        },
        '&.Mui-expanded': {
            minHeight: spacing(4),
            backgroundColor: palette.secondary.light,
            borderRadius: shape.borderRadius * 3,
        },
        '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: 0,
        },
    }),
);

export const StyledAccordionDetails = styled(AccordionDetails)(
    ({ theme: { spacing } }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(2.5),
    }),
);
