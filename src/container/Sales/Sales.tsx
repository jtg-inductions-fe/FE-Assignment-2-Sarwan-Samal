import { useMediaQuery } from '@mui/material';

import ExclamationIcon from '@assets/icons/exclamation-circle.svg?react';
import { Card } from '@components';
import { Chart } from '@components';
import { useDataContext } from '@context';
import { theme } from '@theme';

export const Sales = () => {
    const { salesData } = useDataContext();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));

    /**
     *
     * @param date - Date object to format
     * @returns - Formatted string according to design
     * @description - e.g- for input new Date(2025, 03, 01) returns Apr 01
     */
    const salesDateFormatter = (date: Date) => {
        const options = {
            month: 'short',
            day: '2-digit',
        } as const;
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    /**
     *
     * @param sales - sales amount in number
     * @returns - sales value converted with k
     * @description - e.g- 100000 returns 100k
     */
    const salesAmountFormatter = (sales: number) => `${sales / 1000}k`;

    return (
        <Card
            heading="Sales"
            icon={ExclamationIcon}
            size={isMedium ? 'xl' : 'sm'}
        >
            <Chart
                data={salesData}
                xAxisFormatter={salesDateFormatter}
                yAxisFormatter={salesAmountFormatter}
                yMin={0}
                yMax={240000}
                interval={40000}
            />
        </Card>
    );
};
