import { useEffect, useMemo, useState } from 'react';

import { HandleSearchProps } from 'components/SearchBar/SearchBar.type';
import { useNavigate } from 'react-router-dom';

import { Stack, useMediaQuery, useTheme } from '@mui/material';

import NotificationsIcon from '@assets/icons/Bell.svg?react';
import MenuIcon from '@assets/icons/menu.svg?react';

import { Avatar, IconButton, Logo, SearchBar } from '@components';
import { LOGO } from '@constant';
import { ROUTES } from '@constant';
import { useDataContext } from '@context';
import type { Product } from '@data';

import { HeaderBox } from './Header.style';
import { HeaderProps } from './Header.type';

export const Header = ({ onMenuClick }: HeaderProps) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const { user, products } = useDataContext();
    const productList = products.map((item: Product) => item.title);

    const [inputValue, setInputValue] = useState('');

    const [filteredOptions, setFilteredOptions] =
        useState<string[]>(productList);

    const [loading, setLoading] = useState(false);

    function debounce<T extends (...args: string[]) => void>(
        fn: T,
        delay: number,
    ): (...args: Parameters<T>) => void {
        let timeoutId: ReturnType<typeof setTimeout>;
        return (...args: Parameters<T>) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                fn(...args);
            }, delay);
        };
    }

    const debouncedFilter = useMemo(
        () =>
            debounce((val: string) => {
                const filtered = productList.filter((option) =>
                    option.toLowerCase().includes(val.toLowerCase()),
                );
                setFilteredOptions(filtered);
                setLoading(false);
            }, 1000),
        [],
    );

    useEffect(() => {
        setLoading(true);
        debouncedFilter(inputValue);
    }, [inputValue, debouncedFilter]);

    /**
     *
     * @param value - value of input field
     * @param products - Array containg all the product list
     * @param navigate - NavigateFunction for navigating to different routes
     * @description - this function redirects to the corresponding route clicked from the product list
     */
    const handleSearch = ({
        value,
        products: productlist,
        navigate: nav,
    }: HandleSearchProps) => {
        const val = typeof value === 'string' ? value.trim() : '';
        if (!val) {
            void nav(ROUTES.CORE.HOME);
            return;
        }
        const currProd = productlist.find(
            (item: Product) => item.title === val,
        );
        if (currProd) {
            void nav(currProd.to);
        } else {
            void nav(val);
        }
    };

    return (
        <HeaderBox>
            {isMedium ? (
                <Stack direction="row" gap={8} alignItems="center">
                    <Logo src={LOGO} to={ROUTES.CORE.HOME} alt="Logo"></Logo>
                    <SearchBar
                        placeholder="Search"
                        options={filteredOptions}
                        getOptionLabel={(val: string) => val}
                        onChange={(e, value) => {
                            void handleSearch({
                                e,
                                value,
                                products,
                                navigate,
                            });
                        }}
                        onInputChange={(_, newInputValue) =>
                            setInputValue(newInputValue)
                        }
                        loading={loading}
                    />
                </Stack>
            ) : (
                <IconButton
                    size="large"
                    aria-label="Open Menu"
                    onClick={onMenuClick}
                >
                    <MenuIcon />
                </IconButton>
            )}
            <Stack direction="row" gap={3} alignItems="center">
                <IconButton
                    aria-label="Notifications"
                    size="medium"
                    hasBoxShadow={isMedium}
                    isRounded={isMedium}
                    onClick={() => void navigate(ROUTES.CORE.NOTIFICATIONS)}
                    icon={NotificationsIcon}
                />
                <IconButton size="medium" isRounded hasBoxShadow={isMedium}>
                    <Avatar
                        src={user.image}
                        size="medium"
                        alt="User Avatar"
                        hasPopover={true}
                        popoverName={user.name}
                        popoverEmail={user.email}
                    />
                </IconButton>
            </Stack>
        </HeaderBox>
    );
};
