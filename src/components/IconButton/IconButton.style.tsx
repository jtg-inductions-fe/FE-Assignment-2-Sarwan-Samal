import { IconButton as MuiIconButton, styled } from '@mui/material';

import type { IconButtonProps } from './IconButton.type';

export const StyledIconButton = styled(MuiIconButton, {
    shouldForwardProp: (prop) =>
        prop != 'isRounded' && prop != 'hasBoxShadow' && prop != 'icon',
})<IconButtonProps>(
    ({ theme: { shadows }, isRounded, hasBoxShadow = false }) => ({
        borderRadius: isRounded ? '50%' : '0',
        boxShadow: hasBoxShadow ? shadows[5] : 'none',
        padding: 0,
    }),
);
