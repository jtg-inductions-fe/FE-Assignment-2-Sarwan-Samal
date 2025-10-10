type PayloadItem = {
    value: string | number;
    name: string;
    dataKey: string;
    payload: {
        x: string;
        y: string | number;
    };
};

export type TooltipProps = {
    active?: boolean;
    payload?: PayloadItem[] | undefined;
    label?: Date;
};
