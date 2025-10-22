import { TableRowProps } from 'components/Table/Table.types';
import { paymentFormatter } from 'utils/helper';

import { Transaction } from '@data';

export class TransactionAdapter {
    readonly adaptedTransaction: TableRowProps;

    constructor(transaction: Transaction) {
        this.adaptedTransaction = {
            name: transaction.name,
            statement: paymentFormatter(transaction.type, transaction.status),
            date: transaction.date,
            amount: `$${transaction.amount}`,
            status: transaction.status,
            type: transaction.type,
        };
    }
}
