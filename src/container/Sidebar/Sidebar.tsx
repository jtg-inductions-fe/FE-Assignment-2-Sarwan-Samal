import { Box, Stack } from '@mui/material';

import { Accordion, NavItem } from '@components';

import { SidebarWrapper } from './Sidebar.style';
import { SideBarItemProps, SideBarProps } from './Sidebar.type';
export const Sidebar = ({ items }: SideBarProps) => {
    const renderSidebarItems = (sidebarItems: SideBarItemProps[]) => (
        <Stack gap={5}>
            {sidebarItems.map((item, index) =>
                item.children ? (
                    <Accordion
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        items={item.children}
                    ></Accordion>
                ) : (
                    <NavItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        to={item.to ?? '/'}
                        chipValue={item.notificationCount?.toString()}
                    />
                ),
            )}
        </Stack>
    );
    return (
        <SidebarWrapper>
            <Box
                width={250}
                sx={(theme) => ({
                    backgroundColor: theme.palette.background.paper,
                    height: '100vh',
                })}
            >
                {renderSidebarItems(items)}
            </Box>
        </SidebarWrapper>
    );
};
