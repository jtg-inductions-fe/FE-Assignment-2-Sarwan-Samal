import { Stack, Typography } from '@mui/material';

import { dateFormatter } from '@utils';
import { amountFormatter } from '@utils';

import { Badge, DownArrow, StyledBox } from './Tooltip.style';
import { TooltipProps } from './Tooltip.type';
export const Tooltip = ({ active, payload, label }: TooltipProps) => {
    const option: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };

    if (active && payload && payload.length > 0) {
        const labelledDate = dateFormatter(option);
        const sales = Number(payload[0].value);
        return (
            <StyledBox>
                <Typography variant="subtitle2">
                    {labelledDate(label)}
                </Typography>
                <Stack alignItems="center" direction="row" gap={2}>
                    <Badge />
                    <Typography component="span" variant="body1">
                        Sales:{' '}
                        <Typography component="span" variant="subtitle1">
                            {amountFormatter(sales)}
                        </Typography>
                    </Typography>
                </Stack>
                <DownArrow />
            </StyledBox>
        );
    }
    return null;
};
