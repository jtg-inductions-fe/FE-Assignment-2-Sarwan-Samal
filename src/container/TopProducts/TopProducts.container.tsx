import React from 'react';

import {
    Divider,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Card, ListItem } from '@components';
import { useDataContext } from '@context';
import { useListContainer } from '@hooks';
import { ProductAdapter } from '@utils';

export const TopProducts = () => {
    const { products } = useDataContext();
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const topProducts = useListContainer(products, (item) =>
        new ProductAdapter(item).adapter(),
    );

    return (
        <Card size={isMedium ? 'md' : 'sm'} heading="Top Products">
            {topProducts.length !== 0 ? (
                topProducts.map((item, index) => (
                    <React.Fragment key={index || item.title}>
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
