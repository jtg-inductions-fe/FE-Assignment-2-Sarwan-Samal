import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Divider, Stack, useMediaQuery } from '@mui/material';

import AdjustmentIcon from '@assets/icons/adjustments.svg?react';
import CogIcon from '@assets/icons/cog.svg?react';
import GlobeIcon from '@assets/icons/globe.svg?react';
import { Accordion, IconButton, NavItem } from '@components';
import { theme } from '@theme';

import { SidebarWrapper, StyledDrawer } from './Sidebar.style';
import { SideBarProps } from './Sidebar.type';

export const Sidebar = ({ items, open, onClose }: SideBarProps) => {
    const navigate = useNavigate();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const location = useLocation();
    const showSidebar = location.pathname === '/';
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
                            ></Accordion>
                        ) : (
                            <NavItem
                                icon={item.icon}
                                label={item.label}
                                to={item.to ?? '/'}
                                chipValue={item.notificationCount?.toString()}
                            />
                        )}
                        {index == 4 && <Divider />}
                    </React.Fragment>
                ))}
            </Stack>
            <Stack direction="row" justifyContent="center" gap={5}>
                <IconButton
                    icon={AdjustmentIcon}
                    size="small"
                    onClick={() => void navigate('/adjustments')}
                    aria-label="Adjustement"
                />
                <IconButton
                    icon={GlobeIcon}
                    size="small"
                    onClick={() => void navigate('/globe')}
                    aria-label="Globe"
                />
                <IconButton
                    icon={CogIcon}
                    size="small"
                    onClick={() => void navigate('/cog')}
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
