import React, { useEffect, useState } from 'react';

import { ListItemProp } from 'components/ListItem/ListItem.type';

import {
    Divider,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Card, ListItem } from '@components';
import { useDataContext } from '@context';

export const TopProducts = () => {
    const [topProducts, setTopProducts] = useState<ListItemProp[]>([]);
    const { products } = useDataContext();
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    useEffect(() => {
        const topProductsList: ListItemProp[] = products.map((item) => ({
            title: item.title,
            subtitle: item.framework,
            primaryValue: item.sales.toString(),
            secondaryValue: 'Sales',
        }));
        setTopProducts(topProductsList);
    }, [products]);
    return (
        <Card size={isMedium ? 'md' : 'sm'} heading="Top Products">
            {topProducts.length !== 0 ? (
                topProducts.map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItem {...item} />
                        {index !== topProducts.length - 1 && <Divider />}
                    </React.Fragment>
                ))
            ) : (
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                >
                    <Typography variant="h2">No Top Products Found</Typography>
                </Stack>
            )}
        </Card>
    );
};
