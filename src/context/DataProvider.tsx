import { ReactNode } from 'react';

import {
    CustomerData,
    ProductData,
    SalesData,
    SidebarData,
    UserData,
} from '@mocks';

import { DataContext } from './DataContext';

export const DataProvider = ({ children }: { children: ReactNode }) => (
    <DataContext.Provider
        value={{
            products: ProductData,
            user: UserData,
            sidebarData: SidebarData,
            salesData: SalesData,
            customerData: CustomerData,
        }}
    >
        {children}
    </DataContext.Provider>
);
