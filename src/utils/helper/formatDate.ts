/**
 *
 * @param option - Format option to display the formatted date
 * @returns - A function that formats a Date object according to the given options
 */
export const dateFormatter = (option: Intl.DateTimeFormatOptions) => {
    const formatter = new Intl.DateTimeFormat('en-Us', option);

    return (date: Date | undefined) => formatter.format(date);
};
