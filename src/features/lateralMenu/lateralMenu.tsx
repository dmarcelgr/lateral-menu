import esvydaBigIcon from '../../assets/logos/fulllogo-svg-esvyda.svg';
import esvydaIcon from '../../assets/logos/logo-svg-esvyda.svg';
import { Box, Container, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { bottomMenuItems, menuItems } from './constants/menuConstants.tsx';
import React from 'react';
import { MenuItems } from './menuItems.tsx';

export function LateralMenu() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = (): void => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = (): void => {
    setIsClosing(false);
  };

  const handleDrawerToggle = (): void => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <>
      <Container>
        <Box className="w-9 px-2 content-center rounded-full">
          <IconButton
            aria-label="open menu"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          component="nav"
          className="w-fit min-h-screen flex flex-col align-middle shadow-md space-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          aria-label="esvyda lateral menu"
        >
          {/* mobile menu*/}
          <Drawer
            anchor="top"
            className="block lg:hidden gap-64 align-middle"
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: false,
            }}
          >
            <Box className="bg-blue.main flex-col p-4" bgcolor="blue.main">
              <img src={esvydaBigIcon} className="w-1/5" alt="Esvyda logo" />
              <MenuItems items={menuItems} text={true} mobile={true} />
              <MenuItems items={bottomMenuItems} text={true} mobile={true} />
            </Box>
          </Drawer>
          {/* Lateral menu */}
          <Drawer
            className="hidden lg:block flex items-center x-4"
            variant="permanent"
            bcolor="blue.main"
          >
            <img
              src={esvydaIcon}
              className="w-10 py-1 pl-3"
              alt="Esvyda icon"
            />
            <Box className="flex flex-col justify-between h-full">
              <MenuItems items={menuItems} />
              <MenuItems items={bottomMenuItems} />
            </Box>
          </Drawer>
        </Box>
      </Container>
    </>
  );
}
