import React, { useEffect, useState } from 'react';

import { ListItemProp } from 'components/ListItem/ListItem.type';

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

export const LatestCustomer = () => {
    const [customer, setCustomer] = useState<ListItemProp[]>([]);
    const { customerData } = useDataContext();
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        const customerList: ListItemProp[] = customerData.map((item) => ({
            avatar: item.avatar,
            title: item.name,
            subtitle: item.email,
            primaryValue: `$${item.amount}`,
        }));
        setCustomer(customerList);
    }, [customerData]);
    return (
        <Card size={isMedium ? 'md' : 'sm'} heading="Latest Customer">
            {customer.length !== 0 ? (
                customer.map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItem {...item} />
                        {index !== customer.length - 1 && <Divider />}
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
