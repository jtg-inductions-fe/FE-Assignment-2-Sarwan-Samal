import { useMediaQuery } from '@mui/material';

import ExclamationIcon from '@assets/icons/exclamation-circle.svg?react';
import { Card, Chart } from '@components';
import { useDataContext } from '@context';
import { theme } from '@theme';
import { amountFormatter, dateFormatter } from '@utils';

export const Sales = () => {
    const { salesData } = useDataContext();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));

    const dateFormatOption: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: '2-digit',
    };

    return (
        <Card
            heading="Sales"
            icon={ExclamationIcon}
            size={isMedium ? 'xl' : 'sm'}
        >
            <Chart
                data={salesData}
                xAxisFormatter={dateFormatter(dateFormatOption)}
                yAxisFormatter={amountFormatter}
                yMin={0}
                yMax={240000}
                interval={40000}
            />
        </Card>
    );
};
