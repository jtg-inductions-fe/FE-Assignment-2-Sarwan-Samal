import { PaymentStatus, PaymentType } from 'components/Table/Table.types';

/**
 *
 * @param paymentType - type of the payment(debit | credit)
 * @param paymentStatus - status of the payment(completed | in-progress | cancelled)
 * @returns Formatted payment status
 */
export const paymentFormatter = (
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
