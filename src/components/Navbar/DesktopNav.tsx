import { navItems } from '@/helpers';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { AppLogo } from '../AppLogo';
import { Cart } from '../Cart/Cart';
import { Wishlist } from '../Wishlist/Wishlist';
import { Search } from '../Search/Search';

export function DesktopNav() {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      display={{ base: 'none', lg: 'flex' }}
      px="2rem"
      py="1rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Stack direction="row" gap={6} flex={1} alignItems="center">
        <Box mr="1rem">
          <AppLogo />
        </Box>

        {navItems.map((navItem) => (
          <Box key={navItem.label}>
            <Link href={navItem.href}>{navItem.label}</Link>
          </Box>
        ))}

        <Search />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Wishlist />
        <Cart />
      </Stack>
    </Flex>
  );
}
