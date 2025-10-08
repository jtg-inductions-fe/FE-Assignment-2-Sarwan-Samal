import { Stack, Typography, useMediaQuery } from '@mui/material';

import { Button } from '@components';
import { theme } from '@theme';

import { ErrorProps } from './Error.type';

export const Error = ({
    img,
    title,
    description,
    buttonConfig,
}: ErrorProps) => {
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Stack alignItems="center" px={3} height="100%" justifyContent="center">
            <img src={img} alt={title} width={isMedium ? '60%' : '90%'} />
            <Stack alignItems="center" gap={8}>
                <Stack gap={3}>
                    <Typography variant="h1" textAlign="center">
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        color={theme.palette.text.secondary}
                    >
                        {description}
                    </Typography>
                </Stack>
                <Button {...buttonConfig} />
            </Stack>
        </Stack>
    );
};
