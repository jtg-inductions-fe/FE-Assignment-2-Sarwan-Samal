export type Transaction = {
    name: string;
    date: Date;
    amount: number;
    status: 'completed' | 'in-progress' | 'cancelled';
    type: 'debit' | 'credit';
};
