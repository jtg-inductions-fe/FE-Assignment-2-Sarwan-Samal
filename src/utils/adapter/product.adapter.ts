import { ListItemProp } from 'components/ListItem/ListItem.type';

import { Product } from '@model';

export class ProductAdapter {
    private value: Product;

    constructor(obj: Product) {
        this.value = obj;
    }

    adapter(): ListItemProp {
        return {
            title: this.value.title,
            subtitle: this.value.framework,
            primaryValue: this.value.sales.toString(),
            secondaryValue: 'Sales',
        };
    }
}
