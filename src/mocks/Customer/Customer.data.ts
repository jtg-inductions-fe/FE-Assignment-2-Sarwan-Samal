import { USER_AVATAR } from '@constant';

import { Customer } from './Customer.type';

export const CustomerData: Customer[] = [
    {
        avatar: USER_AVATAR[0],
        name: 'Neil Sims',
        email: 'neil@example.com',
        amount: 367,
    },
    {
        avatar: USER_AVATAR[1],
        name: 'Bonnie Green',
        email: 'bonnie@example.com',
        amount: 67,
    },
    {
        avatar: USER_AVATAR[2],
        name: 'Michael Gough',
        email: 'michael@example.com',
        amount: 3467,
    },
    {
        avatar: USER_AVATAR[3],
        name: 'Thomas Lean',
        email: 'thomas@example.com',
        amount: 2367,
    },
    {
        avatar: USER_AVATAR[4],
        name: 'Lana Byrd',
        email: 'lana@example.com',
        amount: 367,
    },
    {
        avatar: USER_AVATAR[5],
        name: 'Karen Nelson',
        email: 'thomas@example.com',
        amount: 1367,
    },
] satisfies Customer[];
