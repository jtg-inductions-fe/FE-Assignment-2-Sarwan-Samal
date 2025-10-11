import { Avatar } from 'components/Avatar';

import { Stack, Typography } from '@mui/material';

import { theme } from '@theme';

import { StyledBox } from './ListItem.style';
import { ListItemProp } from './ListItem.type';

export const ListItem = ({
    title,
    subtitle,
    avatar,
    primaryValue,
    secondaryValue,
}: ListItemProp) => (
    <StyledBox>
        <Stack flexDirection="row" alignItems="center" gap={2}>
            {avatar && <Avatar size="medium" src={avatar} alt={title} />}
            <Stack>
                <Typography
                    variant="subtitle1"
                    color={theme.palette.text.primary}
                    component="h3"
                >
                    {title}
                </Typography>
                <Typography
                    variant="subtitle2"
                    color={theme.palette.text.secondary}
                    component="h4"
                >
                    {subtitle}
                </Typography>
            </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
            <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                component="h5"
            >
                {primaryValue}
            </Typography>
            {secondaryValue && (
                <Typography
                    variant="body1"
                    color={theme.palette.text.secondary}
                >
                    {secondaryValue}
                </Typography>
            )}
        </Stack>
    </StyledBox>
);
