import { ListItemProp } from 'components/ListItem/ListItem.type';

import { Customer } from '@model';

export class CustomerAdapter {
    private value: Customer;

    constructor(obj: Customer) {
        this.value = obj;
    }

    adapter(): ListItemProp {
        return {
            avatar: this.value.avatar,
            title: this.value.name,
            subtitle: this.value.email,
            primaryValue: `$${this.value.amount}`,
        };
    }
}
