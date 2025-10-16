import type { SidebarItemProps } from '@container';
import type { Customer, Product, Sales, Transaction, User } from '@model';

export type DataContextType = {
    products: Product[];
    user: User;
    sidebarData: SidebarItemProps[];
    salesData: Sales[];
    customerData: Customer[];
    transactionData: Transaction[];
};
