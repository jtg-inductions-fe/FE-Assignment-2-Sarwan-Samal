export type SideBarChildProps = {
    label: string;
    to: string;
};

export type SideBarItemProps = {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    label: string;
    to?: string;
    notificationCount?: number;
    children?: SideBarChildProps[];
};

export type SideBarProps = {
    items: SideBarItemProps[];
    open: boolean;
    onClose: () => void;
};
