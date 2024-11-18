import {
  Box,
  Container,
  Drawer,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { menuContent } from './constants/menuConstants.tsx';
import React from 'react';

export function LateralMenu() {
  const matchesResponsiveWidth = useMediaQuery('(min-width:1023px)');
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleToggle = (): void => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = (): void => {
    setMenuOpen(false);
  };

  return (
    <>
      <Container className="z-1">
        {/*Hamburger menu button for mobile*/}
        <Box
          className={`p-2 block lg:hidden flex ${menuOpen ? 'justify-end' : 'justify-start'}`}
        >
          <IconButton
            aria-label="open menu"
            edge={menuOpen ? 'end' : 'start'}
            onClick={handleToggle}
            className="z-[2000] shadow"
            sx={{
              color: 'secondary.light',
              backgroundColor: 'primary.main',
              borderRadius: '3rem',
              ':hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            {menuOpen ? <Close /> : <Menu />}
          </IconButton>
        </Box>
        <Box className="shadow-md">
          <Drawer
            className="flex items-center x-4 sm:align-middle shadow-md z-2"
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
            {menuContent}
          </Drawer>
        </Box>
      </Container>
    </>
  );
}
