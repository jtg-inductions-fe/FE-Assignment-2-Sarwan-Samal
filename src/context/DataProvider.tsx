import { ReactNode } from 'react';

import { ProductData, UserData } from '@mocks';
import { SidebarData } from '@mocks';

import { DataContext } from './DataContext';

export const DataProvider = ({ children }: { children: ReactNode }) => (
    <DataContext.Provider
        value={{
            products: ProductData,
            user: UserData,
            sidebarData: SidebarData,
        }}
    >
        {children}
    </DataContext.Provider>
);
