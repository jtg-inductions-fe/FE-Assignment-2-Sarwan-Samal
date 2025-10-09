import type { Product } from 'mocks/Product/Product.type';
import { NavigateFunction } from 'react-router-dom';

import type { AutocompleteProps } from '@mui/material';

export type SearchBarProps<T> = {
    placeholder?: string;
} & Omit<AutocompleteProps<T, false, true, true>, 'renderInput'>;

export type HandleSearchProps = {
    e: React.SyntheticEvent;
    value: string;
    products: Product[];
    navigate: NavigateFunction;
};
