// Menu structure
import { Box, Drawer, useMediaQuery } from '@mui/material';
import JSX from 'react';
import React, { useState } from 'react';
import {
  EWP_BOTTOM_MENU_ITEMS,
  EWP_TOP_MENU_ITEMS,
} from '../const/MenuConstants.tsx';
import MenuItems from './MenuItems.tsx';
import { Link } from 'react-router-dom';
import esvydaBigIcon from '/logos/fulllogo-svg-esvyda.svg';
import esvydaIcon from '/logos/logo-svg-esvyda.svg';

export function MenuContent(): JSX.Element {
  const matchesResponsiveWidth: boolean = useMediaQuery('(min-width:1023px)');

  const [open, setOpen] = useState(false);
  // const [contentWidth, setContentWidth] = useState('auto');

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
      {/*<Box bgcolor="primary.main" className="w-full !h-screen">*/}
      {/*  <Link to="/">*/}
      {/*    <img*/}
      {/*      src={matchesResponsiveWidth ? esvydaIcon : esvydaBigIcon}*/}
      {/*      className="w-1/5 lg:w-10 py-1 pl-3 flex"*/}
      {/*      alt="Esvyda icon"*/}
      {/*    />*/}
      {/*  </Link>*/}

      {/*</Box>*/}
      <Drawer
        bgcolor="primary.main"
        variant="permanent"
        anchor={matchesResponsiveWidth ? 'left' : 'top'}
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
          <MenuItems
            menuKey="topItems"
            menuItems={EWP_TOP_MENU_ITEMS}
            openMenu={handleDrawer}
            drawerState={open}
          />
          <MenuItems
            menuKey="bottomItems"
            menuItems={EWP_BOTTOM_MENU_ITEMS}
            openMenu={handleDrawer}
            drawerState={open}
          />
        </Box>
      </Drawer>

      {/*<Drawer*/}
      {/*  bgcolor="primary.main"*/}
      {/*  variant="permanent"*/}
      {/*  anchor={matchesResponsiveWidth ? 'left' : 'top'}*/}
      {/*  PaperProps={{*/}
      {/*    sx: {*/}
      {/*      backgroundColor: 'primary.main',*/}
      {/*      width: { xs: '100%', lg: contentWidth },*/}
      {/*      // width: { xs: '100%', lg: 'auto' },*/}
      {/*      overflowY: 'auto',*/}
      {/*      overflowX: 'hidden',*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Link to="/">*/}
      {/*    <img*/}
      {/*      src={matchesResponsiveWidth ? esvydaIcon : esvydaBigIcon}*/}
      {/*      className="w-1/5 lg:w-10 py-1 pl-3 flex"*/}
      {/*      alt="Esvyda icon"*/}
      {/*    />*/}
      {/*  </Link>*/}

      {/*  <Box className="flex flex-col justify-between h-full">*/}
      {/*    <MenuItems*/}
      {/*      menuKey="topItems"*/}
      {/*      menuItems={EWP_TOP_MENU_ITEMS}*/}
      {/*      openSubMenu={handleDrawer}*/}
      {/*      openedDrawer={open}*/}
      {/*    />*/}
      {/*    <MenuItems*/}
      {/*      menuKey="bottomItems"*/}
      {/*      menuItems={EWP_BOTTOM_MENU_ITEMS}*/}
      {/*      openSubMenu={handleDrawer}*/}
      {/*      openedDrawer={open}*/}
      {/*    />*/}
      {/*  </Box>*/}
      {/*</Drawer>*/}
    </>
  );
}
