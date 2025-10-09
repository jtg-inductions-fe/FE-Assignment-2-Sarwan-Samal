import { createContext, ReactNode, useContext } from 'react';

import { Product, ProductData, User, UserData } from '@mocks';

type DataContextType = {
    products: Product[];
    user: User;
};

export const DataContext = createContext<DataContextType | undefined>(
    undefined,
);

export const DataProvider = ({ children }: { children: ReactNode }) => (
    <DataContext.Provider value={{ products: ProductData, user: UserData }}>
        {children}
    </DataContext.Provider>
);

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};
