import esvydaBigIcon from '../../assets/fulllogo-svg-esvyda.svg';
import esvydaIcon from '../../assets/logo-svg-esvyda.svg';
import { Box, Container, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as MenuConstants from './constants/menuConstants.tsx';
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
        <Box className="w-9 px-2 content-center rounded-full ">
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
          className="w-fit min-h-screen flex flex-col align-middle gap-64 shadow-md"
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
            <Box
              className="bg-primary.main flex-col p-4"
              bgcolor="primary.main"
            >
              <img src={esvydaBigIcon} className="w-1/5" alt="Esvyda logo" />
              {MenuConstants.responsiveDrawerItems}
            </Box>
          </Drawer>
          {/* Lateral menu */}
          <Drawer
            className="hidden lg:block flex items-center x-4 gap-3.5"
            variant="permanent"
            bcolor="primary.main"
          >
            <img
              src={esvydaIcon}
              className="w-10 py-1 pl-3"
              alt="Esvyda icon"
            />
            {MenuConstants.drawerItems}
          </Drawer>
        </Box>
      </Container>

      {/* anterior */}
      {/*<Container fixed className="hidden lg:block">*/}
      {/*  <Box*/}
      {/*    className="w-fit min-h-screen flex flex-col gap-64 shadow-md"*/}
      {/*    bgcolor="primary.main"*/}
      {/*  >*/}
      {/*    /!*top items*!/*/}
      {/*    <MenuItems items={MenuConstants.menuItems} />*/}
      {/*    /!*bottom items*!/*/}
      {/*    <MenuItems items={MenuConstants.bottomMenuItems} />*/}
      {/*  </Box>*/}
      {/*</Container>*/}

      {/*primer intento*/}
      {/*<Container>*/}
      {/*  <AppBar*/}
      {/*    position="fixed"*/}
      {/*    sx={{*/}
      {/*      width: { sm: `calc(100% - ${drawerWidth}px)` },*/}
      {/*      ml: { sm: `${drawerWidth}px` },*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Toolbar>*/}
      {/*      <IconButton*/}
      {/*        color="inherit"*/}
      {/*        aria-label="open drawer"*/}
      {/*        edge="start"*/}
      {/*        onClick={handleDrawerToggle}*/}
      {/*        sx={{ mr: 2, display: { sm: 'none' } }}*/}
      {/*      >*/}
      {/*        <MenuIcon />*/}
      {/*      </IconButton>*/}
      {/*      <Typography variant="h6" noWrap component="div">*/}
      {/*        Responsive drawer*/}
      {/*      </Typography>*/}
      {/*    </Toolbar>*/}
      {/*  </AppBar>*/}
      {/*  <Box*/}
      {/*    component="nav"*/}
      {/*    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}*/}
      {/*    aria-label="mailbox folders"*/}
      {/*  >*/}
      {/*    /!* The implementation can be swapped with js to avoid SEO duplication of links. *!/*/}
      {/*    <Drawer*/}
      {/*      container={container}*/}
      {/*      variant="temporary"*/}
      {/*      open={mobileOpen}*/}
      {/*      onTransitionEnd={handleDrawerTransitionEnd}*/}
      {/*      onClose={handleDrawerClose}*/}
      {/*      ModalProps={{*/}
      {/*        keepMounted: true, // Better open performance on mobile.*/}
      {/*      }}*/}
      {/*      sx={{*/}
      {/*        display: { xs: 'block', sm: 'none' },*/}
      {/*        '& .MuiDrawer-paper': {*/}
      {/*          boxSizing: 'border-box',*/}
      {/*          width: drawerWidth,*/}
      {/*        },*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      {drawer}*/}
      {/*    </Drawer>*/}
      {/*    <Drawer*/}
      {/*      variant="permanent"*/}
      {/*      sx={{*/}
      {/*        display: { xs: 'none', sm: 'block' },*/}
      {/*        '& .MuiDrawer-paper': {*/}
      {/*          boxSizing: 'border-box',*/}
      {/*          width: drawerWidth,*/}
      {/*        },*/}
      {/*      }}*/}
      {/*      open*/}
      {/*    >*/}
      {/*      {drawer}*/}
      {/*    </Drawer>*/}
      {/*  </Box>*/}
      {/*</Container>*/}
    </>
  );
}
