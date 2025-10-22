import { createContext, useContext } from 'react';

import {
    CustomerData,
    ProductData,
    SalesData,
    SidebarData,
    Transaction,
    TransactionData,
    UserData,
} from '@data';

import { DataContextType } from './DataContext.type';

export const defaultValue: DataContextType = {
    products: ProductData,
    user: UserData,
    sidebarData: SidebarData,
    salesData: SalesData,
    customerData: CustomerData,
    transactionData: TransactionData as Transaction[],
};

export const DataContext = createContext<DataContextType>(defaultValue);

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};
