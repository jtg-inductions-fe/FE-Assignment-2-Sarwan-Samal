import { Stack, Typography, useTheme } from '@mui/material';

import DribbleIcon from '@assets/icons/dribbble.svg?react';
import FacebookIcon from '@assets/icons/facebook.svg?react';
import GithubIcon from '@assets/icons/github.svg?react';
import TwitterIcon from '@assets/icons/twitter.svg?react';
import { Card } from '@components';
import { IconButton } from '@components';

import { StyledBox } from './Footer.style';

export const Footer = () => {
    const theme = useTheme();
    const footerSocialLinks = [
        {
            icon: FacebookIcon,
            url: 'https://www.facebook.com',
            label: 'Facebook',
        },
        { icon: TwitterIcon, url: 'https://x.com/', label: 'Twitter' },
        { icon: GithubIcon, url: 'https://www.github.com', label: 'Github' },
        {
            icon: DribbleIcon,
            url: 'https://www.dribbble.com',
            label: 'Dribbble',
        },
    ];

    return (
        <Card size="xl">
            <StyledBox>
                <Typography
                    variant="body1"
                    color={theme.palette.text.secondary}
                    component="span"
                >
                    &copy; 2021 Themesberg, LLC. All rights reserved.
                </Typography>
                <Stack direction="row" gap={6}>
                    {footerSocialLinks.map((item) => (
                        <IconButton
                            key={item.label}
                            icon={item.icon}
                            size="medium"
                            isRounded={true}
                            onClick={() =>
                                window.open(
                                    item.url,
                                    '_blank',
                                    'noopener,noreferrer',
                                )
                            }
                            aria-label={item.label}
                        ></IconButton>
                    ))}
                </Stack>
            </StyledBox>
        </Card>
    );
};
