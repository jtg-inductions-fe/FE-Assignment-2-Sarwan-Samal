import { Card, Table } from '@components';
import { useDataContext } from '@context';

export const Transactions = () => {
    const tableDateFormatter = (date: Date) => {
        const options = {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        } as const;
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    type PaymentType = 'credit' | 'debit';
    type PaymentStatus = 'completed' | 'in-progress' | 'cancelled';

    const formatPayment = (
        paymentType: PaymentType,
        paymentStatus: PaymentStatus,
    ): string => {
        if (paymentStatus === 'cancelled') {
            return paymentType === 'credit'
                ? 'Payment failed from '
                : 'Payment refund failed to ';
        } else {
            return paymentType === 'credit' ? 'Payment from ' : 'Payment to ';
        }
    };

    const formatChip = (
        status: PaymentStatus,
    ): {
        label: string;
        color:
            | 'success'
            | 'info'
            | 'warning'
            | 'primary'
            | 'secondary'
            | 'error';
    } => {
        switch (status) {
            case 'completed':
                return {
                    label: 'Completed',
                    color: 'success',
                };
            case 'in-progress':
                return {
                    label: 'In Progress',
                    color: 'info',
                };
            case 'cancelled':
                return {
                    label: 'Cancelled',
                    color: 'warning',
                };
        }
    };
    const tableHeading = [
        {
            heading: 'TRANSACTION',
            sx: { display: { xs: 'table-cell' } },
        },
        {
            heading: 'DATE AND TIME',
            sx: { display: { xs: 'table-cell' } },
        },
        {
            heading: 'AMOUNT',
            sx: { display: { xs: 'none', sm: 'table-cell' } },
        },
        {
            heading: 'STATUS',
            sx: { display: { xs: 'none', md: 'table-cell' } },
        },
    ];
    const { transactionData } = useDataContext();
    const transactions = transactionData.map((item) => ({
        name: `${item.name}`,
        statement: formatPayment(item.type, item.status),
        date: item.date,
        amount: `$${item.amount}`,
        status: item.status,
        type: item.type,
    }));
    return (
        <Card
            size="md"
            heading="Transactions"
            subHeading="This is a list of latest transactions."
        >
            <Table
                headingRow={tableHeading}
                rowData={transactions}
                tableDateFormatter={tableDateFormatter}
                chipFormatter={formatChip}
            />
        </Card>
    );
};
