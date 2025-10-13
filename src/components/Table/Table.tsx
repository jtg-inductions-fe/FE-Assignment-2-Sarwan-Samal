import { Chip } from 'components/Chip';

import {
    Table as MuiTable,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme,
} from '@mui/material';

import { StyledTableCell, StyledTableRow } from './Table.style';
import { TableProps } from './Table.types';
export const Table = ({
    headingRow,
    rowData,
    tableDateFormatter,
    chipFormatter,
}: TableProps) => {
    const theme = useTheme();
    return (
        <TableContainer>
            <MuiTable aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {headingRow.map((headingItem, index) => (
                            <StyledTableCell
                                key={headingItem.heading || index}
                                sx={headingItem.sx}
                            >
                                {headingItem.heading}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowData.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                <Typography
                                    variant="h3"
                                    color={theme.palette.text.primary}
                                    component="span"
                                >
                                    {row.statement}
                                </Typography>
                                <Typography variant="caption" component="span">
                                    {row.name}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography
                                    variant="h3"
                                    color={theme.palette.text.secondary}
                                    component="span"
                                >
                                    {tableDateFormatter(row.date)}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{
                                    display: { xs: 'none', sm: 'table-cell' },
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                >
                                    {row.amount}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{
                                    display: { xs: 'none', md: 'table-cell' },
                                }}
                            >
                                <Chip
                                    {...chipFormatter(row.status)}
                                    component="span"
                                />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};
