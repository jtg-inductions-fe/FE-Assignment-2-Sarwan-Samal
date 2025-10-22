import type { SidebarItemProps } from '@data';
import type { Customer, Product, Sales, Transaction, User } from '@data';

export type DataContextType = {
    products: Product[];
    user: User;
    sidebarData: SidebarItemProps[];
    salesData: Sales[];
    customerData: Customer[];
    transactionData: Transaction[];
};
