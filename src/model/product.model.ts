import { ListItemProp } from 'components/ListItem/ListItem.type';

import { Product } from '@data';

export class ProductAdapter {
    readonly adaptedProduct: ListItemProp;

    constructor(product: Product) {
        this.adaptedProduct = {
            title: product.title,
            subtitle: product.framework,
            primaryValue: product.sales.toString(),
            secondaryValue: 'Sales',
        };
    }
}
