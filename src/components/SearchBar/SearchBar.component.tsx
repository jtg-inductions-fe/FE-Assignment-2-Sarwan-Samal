import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, InputAdornment } from '@mui/material';

import { StyledTextField } from './SearchBar.style';
import { SearchBarProps } from './SearchBar.type';
export const SearchBar = <T,>({ placeholder, ...props }: SearchBarProps<T>) => (
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
                            <>
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                                {params.InputProps.startAdornment}
                            </>
                        ),
                    },
                }}
            />
        )}
    />
);
