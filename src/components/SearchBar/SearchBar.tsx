import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, InputAdornment } from '@mui/material';

import { StyledTextField } from './SearchBar.style';
export const SearchBar = () => (
    <>
        <Autocomplete
            freeSolo
            options={[]}
            renderInput={(params) => (
                <StyledTextField
                    {...params}
                    placeholder="Search"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
        />
    </>
);
