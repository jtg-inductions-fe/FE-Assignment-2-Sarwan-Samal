export type TableRowProps = {
    name: string;
    statement: string;
    date: Date;
    amount: string;
    status: 'completed' | 'in-progress' | 'cancelled';
    type: 'debit' | 'credit';
};
type PaymentStatus = 'completed' | 'in-progress' | 'cancelled';

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
    chipFormatter: (status: PaymentStatus) => {
        label: string;
        color:
            | 'success'
            | 'info'
            | 'warning'
            | 'primary'
            | 'secondary'
            | 'error';
    };
};
