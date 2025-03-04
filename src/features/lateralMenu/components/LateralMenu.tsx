import {
  Box,
  Container,
  Drawer,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems.tsx';
import esvydaBigIcon from '/logos/fulllogo-svg-esvyda.svg';
import esvydaIcon from '/logos/logo-svg-esvyda.svg';
import {
  EWP_BOTTOM_MENU_ITEMS,
  EWP_TOP_MENU_ITEMS,
} from '../const/MenuConstants.tsx';

export function LateralMenu() {
  const matchesResponsiveWidth = useMediaQuery('(min-width:1023px)');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = (): void => {
    setMenuOpen(!menuOpen);
  };

  const openMobileMenu = (): void => {
    setMenuOpen(!menuOpen);
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
        <Drawer
          className="flex items-center x-4 sm:align-middle !shadow-md !z-2"
          anchor={matchesResponsiveWidth ? 'left' : 'top'}
          variant={matchesResponsiveWidth ? 'permanent' : 'temporary'}
          open={menuOpen}
          onClose={openMobileMenu}
          PaperProps={{
            sx: {
              backgroundColor: 'primary.main',
            },
          }}
        >
          <Link to="/">
            <img
              src={matchesResponsiveWidth ? esvydaIcon : esvydaBigIcon}
              className="w-1/5 lg:w-10 py-1 pl-3 flex"
              alt="Esvyda icon"
            />
          </Link>

          <Box className="flex flex-col justify-between h-full">
            <MenuItems menuKey="topItems" menuItems={EWP_TOP_MENU_ITEMS} />
            <MenuItems
              menuKey="bottomItems"
              menuItems={EWP_BOTTOM_MENU_ITEMS}
            />
          </Box>
        </Drawer>
      </Container>
    </>
  );
}
