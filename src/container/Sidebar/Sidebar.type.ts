export type SidebarChildProps = {
    label: string;
    to: string;
};

export type SidebarItemProps = {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    label: string;
    to?: string;
    notificationCount?: number;
    children?: SidebarChildProps[];
};

export type SideBarProps = {
    items: SidebarItemProps[];
    open: boolean;
    onClose: () => void;
};
