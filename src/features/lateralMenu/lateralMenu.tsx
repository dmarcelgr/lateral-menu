import { Box, Container, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { menuContent } from './constants/menuConstants.tsx';
import React from 'react';

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
          className="w-fit min-h-screen flex flex-col align-middle shadow-md space-y-4"
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
            <Box className="flex-col p-4" bgcolor="primary.main">
              {menuContent}
            </Box>
          </Drawer>
          {/* Lateral menu */}
          <Drawer
            className="hidden lg:block flex items-center x-4 sm:align-middle"
            variant="permanent"
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
