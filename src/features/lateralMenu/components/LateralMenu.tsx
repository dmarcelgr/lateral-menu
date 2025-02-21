import {
  Box,
  Container,
  Drawer,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { MenuContent } from '../constants/MenuContent.tsx';
import { useState } from 'react';

export function LateralMenu() {
  const matchesResponsiveWidth = useMediaQuery('(min-width:1023px)');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = (): void => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = (): void => {
    setMenuOpen(false);
  };

  return (
    <>
      <Container>
        {/*Hamburger menu button for mobile*/}
        <Box
          className={`p-2 block lg:hidden flex ${menuOpen ? 'justify-end' : 'justify-start'}`}
        >
          <IconButton
            aria-label="open menu"
            edge={menuOpen ? 'end' : 'start'}
            onClick={handleToggle}
            className="z-[2000] shadow rounded-full"
            sx={{
              color: 'secondary.light',
              backgroundColor: 'primary.main',
              ':hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            {menuOpen ? <Close /> : <Menu />}
          </IconButton>
        </Box>
        <Box>
          <Drawer
            className="flex items-center x-4 sm:align-middle shadow-md !z-4"
            anchor={matchesResponsiveWidth ? 'left' : 'top'}
            variant={matchesResponsiveWidth ? 'permanent' : 'temporary'}
            open={menuOpen}
            onClose={handleClose}
            PaperProps={{
              sx: {
                backgroundColor: 'primary.main',
              },
            }}
          >
            <MenuContent key={'mainMenu'} />
          </Drawer>
        </Box>
      </Container>
    </>
  );
}
