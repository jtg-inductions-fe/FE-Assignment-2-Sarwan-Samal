/**
 *
 * @param sales - sales amount in number
 * @returns - sales value converted with k
 * e.g- 100000 returns 100k
 */
export const amountFormatter = (sales: number) =>
    `${Math.round(sales / 1000)}k`;
