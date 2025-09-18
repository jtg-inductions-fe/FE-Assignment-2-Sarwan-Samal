import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, InputAdornment } from '@mui/material';

import { StyledTextField } from './SearchBar.style';
import { SeacrhBarProps } from './SearchBar.type';
export const SearchBar = <T,>({ placeholder, ...props }: SeacrhBarProps<T>) => (
    <>
        <Autocomplete
            freeSolo
            disablePortal
            {...props}
            renderInput={(params) => (
                <StyledTextField
                    {...params}
                    placeholder={placeholder}
                    slotProps={{
                        input: {
                            ...params.InputProps,
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
