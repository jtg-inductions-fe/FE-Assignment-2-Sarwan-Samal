import type { Sales } from '@model';
export type ChartProps = {
    data: Sales[];
    xAxisFormatter: (date: Date) => string;
    yAxisFormatter: (sales: number) => string;
    yMax: number;
    yMin: number;
    interval: number;
};
