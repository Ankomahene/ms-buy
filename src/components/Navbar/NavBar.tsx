import { Box } from '@chakra-ui/react';
import { Search } from '../Search/Search';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
  return (
    <>
      <Box>
        <DesktopNav />
        <MobileNav />
      </Box>
    </>
  );
};
