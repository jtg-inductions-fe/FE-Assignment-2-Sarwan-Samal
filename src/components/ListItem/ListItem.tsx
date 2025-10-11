import { Avatar } from 'components/Avatar';

import { Stack, Typography, useTheme } from '@mui/material';

import { StyledBox } from './ListItem.style';
import { ListItemProp } from './ListItem.type';

export const ListItem = ({
    title,
    subtitle,
    avatar,
    primaryValue,
    secondaryValue,
}: ListItemProp) => {
    const theme = useTheme();
    return (
        <StyledBox>
            <Stack flexDirection="row" alignItems="center" gap={2}>
                {avatar && <Avatar size="medium" src={avatar} alt={title} />}
                <Stack>
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.text.primary}
                        component="span"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color={theme.palette.text.secondary}
                        component="span"
                    >
                        {subtitle}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1}>
                <Typography
                    variant="subtitle1"
                    color={theme.palette.text.primary}
                    component="span"
                >
                    {primaryValue}
                </Typography>
                {secondaryValue && (
                    <Typography
                        variant="body1"
                        component="span"
                        color={theme.palette.text.secondary}
                    >
                        {secondaryValue}
                    </Typography>
                )}
            </Stack>
        </StyledBox>
    );
};
