import { ChipProps } from 'components/Chip/Chip.type';

export type PaymentStatus = 'completed' | 'in-progress' | 'cancelled';
export type PaymentType = 'credit' | 'debit';
export type TableRowProps = {
    name: string;
    statement: string;
    date: Date;
    amount: string;
    status: PaymentStatus;
    type: PaymentType;
};

export type TableProps = {
    headingRow: {
        heading: string;
        sx: {
            display: {
                xs?: string;
                sm?: string;
                md?: string;
            };
        };
    }[];
    rowData: TableRowProps[];
    tableDateFormatter: (date: Date) => string;
    chipFormatter: (status: PaymentStatus) => ChipProps;
};
