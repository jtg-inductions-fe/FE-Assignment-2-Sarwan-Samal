import { Sales } from './Sales.type';

export const SalesData: Sales[] = [
    { sales: 100000, date: new Date(2025, 3, 1) },
    { sales: 90000, date: new Date(2025, 3, 2) },
    { sales: 79000, date: new Date(2025, 3, 3) },
    { sales: 70000, date: new Date(2025, 3, 4) },
    { sales: 85000, date: new Date(2025, 3, 5) },
    { sales: 115000, date: new Date(2025, 3, 6) },
    { sales: 130000, date: new Date(2025, 3, 7) },
] satisfies Sales[];
