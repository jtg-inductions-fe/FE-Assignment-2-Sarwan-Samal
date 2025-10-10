import { Stack, Typography } from '@mui/material';

import { Badge, DownArrow, StyledBox } from './Tooltip.style';
import { TooltipProps } from './Tooltip.type';
export const Tooltip = ({ active, payload, label }: TooltipProps) => {
    /**
     *
     * @param date - Date object to format
     * @returns - Formatted string according to the design
     * @description- e.g- for input new Date(2025, 03, 01) return Apr,2 2025
     */
    const labelDateFormatter = (date: Date | undefined): string => {
        const options = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        } as const;
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };
    if (active && payload) {
        const labelledDate = labelDateFormatter(label);
        const sales = Number(payload[0].value);
        return (
            <StyledBox>
                <Typography variant="subtitle2">{labelledDate}</Typography>
                <Stack alignItems="center" direction="row" gap={2}>
                    <Badge />
                    <Typography component="span" variant="body1">
                        Sales:{' '}
                        <Typography
                            component="span"
                            variant="subtitle1"
                        >{`${Math.round(sales / 1000)}k`}</Typography>
                    </Typography>
                </Stack>
                <DownArrow />
            </StyledBox>
        );
    }
    return null;
};
