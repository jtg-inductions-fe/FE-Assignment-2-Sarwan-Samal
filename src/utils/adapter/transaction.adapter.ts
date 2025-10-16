import { TableRowProps } from 'components/Table/Table.types';
import { paymentFormatter } from 'utils/helper';

import { Transaction } from '@model';

export class TransactionAdapter {
    private value: Transaction;

    constructor(obj: Transaction) {
        this.value = obj;
    }

    adapter(): TableRowProps {
        return {
            name: this.value.name,
            statement: paymentFormatter(this.value.type, this.value.status),
            date: this.value.date,
            amount: `$${this.value.amount}`,
            status: this.value.status,
            type: this.value.type,
        };
    }
}
