import { Transaction } from '@data';

export const TransactionData: Transaction[] = [
    {
        name: 'Bonnie Green',
        date: new Date(2021, 3, 23),
        amount: 2300,
        status: 'completed',
        type: 'credit',
    },
    {
        name: 'Bonnie Green',
        date: new Date(2021, 3, 23),
        amount: 670,
        status: 'completed',
        type: 'debit',
    },
    {
        name: 'Jese Leos',
        date: new Date(2021, 3, 18),
        amount: 234,
        status: 'cancelled',
        type: 'debit',
    },
    {
        name: 'Bonnie Green',
        date: new Date(2021, 3, 15),
        amount: 5000,
        status: 'in-progress',
        type: 'credit',
    },
    {
        name: 'Jese Leos',
        date: new Date(2021, 3, 15),
        amount: 2300,
        status: 'in-progress',
        type: 'debit',
    },
    {
        name: 'THEMSBERG LLC',
        date: new Date(2021, 3, 11),
        amount: 280,
        status: 'completed',
        type: 'credit',
    },
];
