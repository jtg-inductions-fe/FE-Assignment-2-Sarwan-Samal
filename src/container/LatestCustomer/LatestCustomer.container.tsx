import React from 'react';

import {
    Divider,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Card } from '@components';
import { ListItem } from '@components';
import { useDataContext } from '@context';
import { useListContainer } from '@hooks';
import { CustomerAdapter } from '@utils';

export const LatestCustomer = () => {
    const { customerData } = useDataContext();
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const latestCustomer = useListContainer(customerData, (item) =>
        new CustomerAdapter(item).adapter(),
    );

    return (
        <Card size={isMedium ? 'md' : 'sm'} heading="Latest Customer">
            {latestCustomer.length !== 0 ? (
                latestCustomer.map((item, index) => (
                    <React.Fragment key={index || item.title}>
                        <ListItem {...item} />
                        {index !== latestCustomer.length - 1 && <Divider />}
                    </React.Fragment>
                ))
            ) : (
                <Stack justifyContent="center" alignItems="center">
                    <Typography variant="h2">
                        No Latest Customer Found
                    </Typography>
                </Stack>
            )}
        </Card>
    );
};
