import type { SidebarItemProps } from '@container';
import type { Customer, Product, Sales, User } from '@mocks';
export type DataContextType = {
    products: Product[];
    user: User;
    sidebarData: SidebarItemProps[];
    salesData: Sales[];
    customerData: Customer[];
};
