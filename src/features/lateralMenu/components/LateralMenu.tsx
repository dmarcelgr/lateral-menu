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
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMobileToggle = (): void => {
    setMenuOpen(!menuOpen);
  };

  const handleDrawer = (key: string) => {
    // // const handleDrawer = (key: string, status: boolean) => {
    // //   console.log('key:: ', key);
    // //   console.log('status:: ', status);
    // console.log('contentWidth:: ', contentWidth);
    // setContentWidth(() => (open ? '80rem' : 'auto'));
    // // setSubmenu((prevKey: string) => (prevKey === key ? '' : key));

    console.log('key at main handle ', key);
    console.log('status at main handle ', open);

    setOpen(!open);
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
            onClick={handleMobileToggle}
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
          bgcolor="primary.main"
          className="flex items-center x-4 sm:align-middle shadow-md !z-2"
          anchor={matchesResponsiveWidth ? 'left' : 'top'}
          variant={matchesResponsiveWidth ? 'permanent' : 'temporary'}
          PaperProps={{
            sx: {
              backgroundColor: 'primary.main',
              width: { xs: '100%', lg: 'auto' },
              overflowY: 'auto',
              overflowX: 'hidden',
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
