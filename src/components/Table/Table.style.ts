import { styled, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(
    ({ theme: { palette, spacing, typography } }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: palette.background.default,
            color: palette.text.secondary,
            borderBottom: `1px solid ${palette.divider}`,
            ...typography.body2,
        },
        [`&.${tableCellClasses.head}:first-of-type`]: {
            borderTopLeftRadius: spacing(3),
        },
        [`&.${tableCellClasses.head}:last-child`]: {
            borderTopRightRadius: spacing(3),
        },
    }),
);

export const StyledTableRow = styled(TableRow)(
    ({ theme: { palette, spacing } }) => ({
        '& .MuiTableCell-root:first-of-type': {
            borderTopLeftRadius: spacing(3),
            borderBottomLeftRadius: spacing(3),
        },
        '& .MuiTableCell-root:last-child': {
            borderTopRightRadius: spacing(3),
            borderBottomRightRadius: spacing(3),
        },
        '&:nth-of-type(even)': {
            backgroundColor: palette.background.default,
        },
    }),
);
