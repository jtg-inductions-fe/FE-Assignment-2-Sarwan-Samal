import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

import DribbleIcon from '@assets/icons/dribbble.svg?react';
import FacebookIcon from '@assets/icons/facebook.svg?react';
import GithubIcon from '@assets/icons/github.svg?react';
import TwitterIcon from '@assets/icons/twitter.svg?react';
import { Card } from '@components';
import { IconButton } from '@components';

import { StyledBox } from './Footer.style';

export const Footer = () => {
    const theme = useTheme();
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
                    <IconButton
                        icon={FacebookIcon}
                        isRounded={true}
                        onClick={() =>
                            window.open(
                                'https://www.facebook.com',
                                '_blank',
                                'noopener,noreferrer',
                            )
                        }
                        aria-label="Facebook"
                    ></IconButton>
                    <IconButton
                        icon={TwitterIcon}
                        isRounded={true}
                        onClick={() =>
                            window.open(
                                'https://x.com/',
                                '_blank',
                                'noopener,noreferrer',
                            )
                        }
                        aria-label="Twitter"
                    ></IconButton>
                    <IconButton
                        icon={GithubIcon}
                        isRounded={true}
                        onClick={() =>
                            window.open(
                                'https://www.github.com',
                                '_blank',
                                'noopener,noreferrer',
                            )
                        }
                        aria-label="Github"
                    ></IconButton>
                    <IconButton
                        icon={DribbleIcon}
                        isRounded={true}
                        onClick={() =>
                            window.open(
                                'https://www.dribbble.com',
                                '_blank',
                                'noopener,noreferrer',
                            )
                        }
                        aria-label="Dribbble"
                    ></IconButton>
                </Stack>
            </StyledBox>
        </Card>
    );
};
