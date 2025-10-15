import { ChipProps } from 'components/Chip/Chip.type';
import { PaymentStatus, PaymentType } from 'components/Table/Table.types';

import { Card, Table } from '@components';
import { useDataContext } from '@context';

export const Transactions = () => {
    /**
     *
     * @param date - Date object to format
     * @returns - Formatted string according to the design
     * @description- e.g- for input new Date(2025, 03, 01) return Apr 01, 2025
     */
    const tableDateFormatter = (date: Date) => {
        const options = {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        } as const;
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    /**
     *
     * @param paymentType - type of the payment(debit | credit)
     * @param paymentStatus - status of the payment(completed | in-progress | cancelled)
     * @returns Formatted payment status
     */
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

    /**
     *
     * @param status - status of the payment (completed | in-progress | cancelled)
     * @returns - A chip prop object to format the chip
     */
    const formatChip = (status: PaymentStatus): ChipProps => {
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
        name: item.name,
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
