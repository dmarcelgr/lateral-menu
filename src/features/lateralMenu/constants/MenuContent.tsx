// Menu structure
import { Box, Drawer, useMediaQuery } from '@mui/material';
import esvydaBigIcon from '/logos/fulllogo-svg-esvyda.svg';
import esvydaIcon from '/logos/logo-svg-esvyda.svg';
import JSX from 'react';
import React, { useEffect, useState } from 'react';
import { EWP_BOTTOM_MENU_ITEMS, EWP_TOP_MENU_ITEMS } from './MenuConstants.tsx';
import { Link } from 'react-router-dom';
import MenuItems from '../components/MenuItems.tsx';

export function MenuContent(): JSX.Element {
  const matchesResponsiveWidth: boolean = useMediaQuery('(min-width:1023px)');
  const [openMenu, setOpenMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [bottomIndex, setBottomIndex] = useState(10);

  const handleOpenSubmenu = (index, source) => {
    switch (source) {
      case 'topItems':
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
        console.log('openIndex actualizado:', openIndex);
        break;
      case 'bottomItems':
        setBottomIndex((prevIndex) => (prevIndex === index ? -1 : index));
        break;
    }
  };

  useEffect(() => {
    console.log('Current openIndex:', openIndex);
  }, [openIndex]);

  return (
    <>
      <Drawer
        bgcolor="primary.main"
        variant="permanent"
        anchor={matchesResponsiveWidth ? 'left' : 'top'}
        open={openMenu}
        PaperProps={{
          sx: {
            backgroundColor: 'primary.main',
            width: { xs: '100%', lg: 'auto' },
          },
        }}
      >
        <Box
          bgcolor="primary.main"
          className="w-full p-0 border-t-2 border-t-slate-500"
        >
          <Link to="/">
            <img
              src={matchesResponsiveWidth ? esvydaIcon : esvydaBigIcon}
              className="w-1/5 lg:w-10 py-1 pl-3 flex"
              alt="Esvyda icon"
            />
          </Link>
        </Box>
        <Box className="flex flex-col justify-between h-full">
          <MenuItems
            menuKey="topItems"
            menuItems={EWP_TOP_MENU_ITEMS}
            openSubMenu={handleOpenSubmenu}
            openIndex={openIndex}
          />
          <MenuItems
            menuKey="bottomItems"
            menuItems={EWP_BOTTOM_MENU_ITEMS}
            openSubMenu={handleOpenSubmenu}
            openIndex={bottomIndex}
          />
        </Box>
      </Drawer>
    </>
  );
}
