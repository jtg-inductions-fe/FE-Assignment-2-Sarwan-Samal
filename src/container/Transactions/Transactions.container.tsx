import { useMemo } from 'react';

import { Card, Table } from '@components';
import { useDataContext } from '@context';
import { TransactionAdapter } from '@model';
import { dateFormatter } from '@utils';
import { chipFormatter } from '@utils';

export const Transactions = () => {
    const option: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    };

    const { transactionData } = useDataContext();

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

    const latestTransaction = useMemo(
        () =>
            transactionData.map(
                (item) => new TransactionAdapter(item).adaptedTransaction,
            ),
        [transactionData],
    );

    return (
        <Card
            size="md"
            heading="Transactions"
            subHeading="This is a list of latest transactions."
        >
            <Table
                headingRow={tableHeading}
                rowData={latestTransaction}
                tableDateFormatter={dateFormatter(option)}
                chipFormatter={chipFormatter}
            />
        </Card>
    );
};
