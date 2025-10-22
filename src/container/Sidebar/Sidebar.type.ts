import { SidebarItemProps } from '@data';

export type SideBarProps = {
    items: SidebarItemProps[];
    open: boolean;
    onClose: () => void;
};
