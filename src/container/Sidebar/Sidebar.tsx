import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Divider, Stack, useMediaQuery } from '@mui/material';

import AdjustmentIcon from '@assets/icons/adjustments.svg?react';
import CogIcon from '@assets/icons/cog.svg?react';
import GlobeIcon from '@assets/icons/globe.svg?react';
import { Accordion, IconButton, NavItem } from '@components';
import { DIVIDER_AFTER_INDEX, ROUTES } from '@constant';
import { theme } from '@theme';

import { SidebarWrapper, StyledDrawer } from './Sidebar.style';
import { SideBarProps } from './Sidebar.type';

export const Sidebar = ({ items, open, onClose }: SideBarProps) => {
    const navigate = useNavigate();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const location = useLocation();
    const showSidebar = location.pathname === ROUTES.HOME;
    const renderSidebarItems = (
        <SidebarWrapper>
            <Stack gap={5}>
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.children ? (
                            <Accordion
                                label={item.label}
                                icon={item.icon}
                                items={item.children}
                                onClick={onClose}
                            ></Accordion>
                        ) : (
                            <NavItem
                                icon={item.icon}
                                label={item.label}
                                to={item.to ?? '/'}
                                chipValue={item.notificationCount?.toString()}
                                onClick={onClose}
                            />
                        )}
                        {index == DIVIDER_AFTER_INDEX && <Divider />}
                    </React.Fragment>
                ))}
            </Stack>
            <Stack direction="row" justifyContent="center" gap={5}>
                <IconButton
                    icon={AdjustmentIcon}
                    size="medium"
                    onClick={() => {
                        void navigate(ROUTES.ADJUSTMENTS);
                        onClose();
                    }}
                    aria-label="Adjustment"
                />
                <IconButton
                    icon={GlobeIcon}
                    size="medium"
                    onClick={() => {
                        void navigate(ROUTES.GLOBE);
                        onClose();
                    }}
                    aria-label="Globe"
                />
                <IconButton
                    icon={CogIcon}
                    size="medium"
                    onClick={() => {
                        void navigate(ROUTES.COG);
                        onClose();
                    }}
                    aria-label="Cog"
                />
            </Stack>
        </SidebarWrapper>
    );

    return showSidebar ? (
        <>
            {isMedium ? (
                renderSidebarItems
            ) : (
                <StyledDrawer open={open} onClose={onClose} elevation={0}>
                    {renderSidebarItems}
                </StyledDrawer>
            )}
        </>
    ) : null;
};
