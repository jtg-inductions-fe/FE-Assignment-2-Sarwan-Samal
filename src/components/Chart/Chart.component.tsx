import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { useMediaQuery } from '@mui/material';

import { Tooltip as CustomTooltip } from '@components';
import { theme } from '@theme';

import { ChartProps } from './Chart.type';

export const Chart = ({
    data,
    xAxisFormatter,
    yAxisFormatter,
    yMin,
    yMax,
    interval,
}: ChartProps) => {
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));

    const tickStyle = {
        fontSize: '14px',
        fontWeight: 600,
        fill: theme.palette.text.secondary,
    };

    /**
     *
     * @param yAxisMin - Starting value for y-axis
     * @param yAxisMax - End value of y-axis
     * @param yinterval - Interval value in which y-axis value get increased
     * @returns - Array of number containing all the intervals for y-axis
     */
    const generateYaxis = (
        yAxisMin: number,
        yAxisMax: number,
        yinterval: number,
    ) => {
        const axisTicks = [];
        for (let i = yAxisMin; i <= yAxisMax; i += yinterval) axisTicks.push(i);
        return axisTicks;
    };

    return (
        <ResponsiveContainer width="100%" height={420}>
            <LineChart
                data={data}
                margin={{ top: 30, right: 30, left: 25, bottom: 30 }}
            >
                <CartesianGrid
                    vertical={false}
                    strokeWidth={1}
                    stroke={theme.palette.secondary.light}
                />
                <XAxis
                    dataKey="date"
                    tickFormatter={xAxisFormatter}
                    tickLine={false}
                    dy={10}
                    dx={10}
                    axisLine={{ stroke: theme.palette.secondary.light }}
                    padding={{ right: 10 }}
                    tick={tickStyle}
                    angle={isMedium ? 0 : -45}
                    tickMargin={20}
                />
                <YAxis
                    domain={[yMin, yMax]}
                    ticks={generateYaxis(yMin, yMax, interval)}
                    tickFormatter={yAxisFormatter}
                    axisLine={false}
                    tickLine={false}
                    dx={-20}
                    tick={tickStyle}
                    hide={!isMedium}
                />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                        stroke: theme.palette.divider,
                        strokeWidth: 1,
                        strokeDasharray: '5 5',
                    }}
                    offset={-75}
                />
                <Line
                    type="monotone"
                    dataKey="sales"
                    stroke={theme.palette.success.main}
                    strokeWidth={3}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
