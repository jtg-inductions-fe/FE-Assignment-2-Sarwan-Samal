import type { SidebarItemProps } from '@container';
import type { Product, User } from '@mocks';
export type DataContextType = {
    products: Product[];
    user: User;
    sidebarData: SidebarItemProps[];
};
