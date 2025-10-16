import { ChipProps } from 'components/Chip/Chip.type';
import { PaymentStatus } from 'components/Table/Table.types';

/**
 *
 * @param status - status of the payment (completed | in-progress | cancelled)
 * @returns - A chip prop object to format the chip
 */
export const chipFormatter = (status: PaymentStatus): ChipProps => {
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
        default:
            return {
                label: 'Unknown',
                color: 'secondary',
            };
    }
};
