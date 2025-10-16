import { ReactNode } from 'react';

import { DataContext, defaultValue } from './DataContext';

export const DataProvider = ({ children }: { children: ReactNode }) => (
    <DataContext.Provider value={defaultValue}>{children}</DataContext.Provider>
);
