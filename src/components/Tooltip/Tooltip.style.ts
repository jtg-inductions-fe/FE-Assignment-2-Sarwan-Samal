import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
            palette,
            spacing,
        },
    }) => ({
        width: pxToRem(150),
        height: pxToRem(95),
        position: 'relative',
        backgroundColor: palette.background.paper,
        boxShadow: `${pxToRem(0)} ${pxToRem(1)} ${pxToRem(3)} ${pxToRem(0)} ${palette.secondary.main}`,
        borderRadius: spacing(4),
        padding: spacing(4),
    }),
);

export const Badge = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
            palette,
        },
    }) => ({
        width: pxToRem(10),
        height: pxToRem(10),
        backgroundColor: palette.success.main,
        borderRadius: '50%',
    }),
);

export const DownArrow = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
            palette,
        },
    }) => ({
        width: 0,
        height: 0,
        borderLeft: `${pxToRem(10)} solid transparent`,
        borderRight: `${pxToRem(10)} solid transparent`,
        borderTop: `${pxToRem(10)} solid ${palette.background.paper}`,
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%,100%)',
        filter: `drop-shadow(${pxToRem(0)} ${pxToRem(2)} ${pxToRem(1)} ${palette.secondary.main})`,
    }),
);
