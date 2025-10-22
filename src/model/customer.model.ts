import { ListItemProp } from 'components/ListItem/ListItem.type';

import { Customer } from '@data';

export class CustomerAdapter {
    readonly adaptedCustomer: ListItemProp;
    constructor(customer: Customer) {
        this.adaptedCustomer = {
            avatar: customer.avatar,
            title: customer.name,
            subtitle: customer.email,
            primaryValue: `$${customer.amount}`,
        };
    }
}
