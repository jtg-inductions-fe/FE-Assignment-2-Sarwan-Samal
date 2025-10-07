import { createContext, useContext } from 'react';

import { DataContextType } from './DataContext.type';

export const DataContext = createContext<DataContextType | undefined>(
    undefined,
);

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};
