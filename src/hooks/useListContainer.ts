import { useMemo } from 'react';

import { ListItemProp } from 'components/ListItem/ListItem.type';

/**
 * Custom hook that converts raw data into formatted array of type list item prop
 * @template T the type of individual raw data taken as input
 * @param data the raw data
 * @param mapper A callback function that converts the raw data into ListItemProp
 * @returns An array of transformed list items
 */
export function useListContainer<T>(
    data: T[],
    mapper: (item: T) => ListItemProp,
): ListItemProp[] {
    return useMemo(() => data.map(mapper), [data, mapper]);
}
