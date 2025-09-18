import { IconButton, styled } from '@mui/material';

import type { CustomIconButtonProps } from './CustomIconButton.type';

export const StyledIconButton = styled(IconButton, {
    shouldForwardProp: (prop) =>
        prop != 'isRounded' &&
        prop != 'buttonSize' &&
        prop != 'hasBoxShadow' &&
        prop != 'icon',
})<CustomIconButtonProps>(
    ({
        theme: { shadows },
        buttonSize = 32,
        isRounded,
        hasBoxShadow = false,
    }) => ({
        height: buttonSize,
        width: buttonSize,
        borderRadius: isRounded ? '50%' : '0',
        boxShadow: hasBoxShadow ? shadows[5] : 'none',
        padding: 0,
    }),
);
