import Grid from '@mui/material/Grid2';

import { GRID_IMAGES } from '@constant';

import { StyledImage } from './ImageGrid.style';

export const ImageGrid = () => (
    <Grid
        container
        spacing={{ xs: 4, sm: 10 }}
        p={{ md: 5 }}
        flexDirection={{ xs: 'column-reverse', sm: 'row' }}
    >
        <Grid container size={{ sm: 8 }} spacing={{ xs: 4, sm: 10 }}>
            <Grid
                size={{ xs: 12, sm: 6 }}
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                <StyledImage
                    component="img"
                    src={GRID_IMAGES[1]}
                    alt="Grid Image-1"
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <StyledImage
                    component="img"
                    src={GRID_IMAGES[3]}
                    alt="Grid Image-2"
                />
            </Grid>
            <Grid size={12}>
                <StyledImage
                    component="img"
                    src={GRID_IMAGES[2]}
                    alt="Grid Image-3"
                />
            </Grid>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
            <StyledImage
                component="img"
                src={GRID_IMAGES[0]}
                alt="Grid Image-4"
            />
        </Grid>
    </Grid>
);
