import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { MenuSubItems } from './subMenuItems.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledAppBar } from './constants/menuConstants.tsx';

export function MenuItems(props: []) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [webSubmenuOpen, setWebSubmenuOpen] = useState(false);
  const [webSubmenuClose, setWebSubmenuClose] = React.useState(false);

  const handleToggle = (key: any, destination: string) => {
    if (destination == 'web') {
      setWebSubmenuOpen((prevState: any) => ({
        ...prevState,
        [key]: !prevState[key],
      }));
    } else {
      setSubmenuOpen((prevState: any) => ({
        ...prevState,
        [key]: !prevState[key],
      }));
    }
  };

  const handleDrawerClose = (): void => {
    setWebSubmenuClose(true);
    setWebSubmenuOpen(false);
  };

  return (
    <List aria-label="lateral menu">
      {props.items.map((item) => {
        return (
          <>
            <ListItem key={item.key} disablePadding className="h-14">
              <ListItemButton
                divider
                color="primary.lightText"
                onClick={() =>
                  handleToggle(item.key, props.mobile ? 'mobile' : 'web')
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                {props.text && <ListItemText>{item.title}</ListItemText>}
              </ListItemButton>
            </ListItem>
            {/*submenu for mobile*/}
            {item.submenu && props.mobile && (
              <Collapse in={submenuOpen[item.key]} timeout="auto" unmountOnExit>
                <MenuSubItems items={item.submenu}></MenuSubItems>
              </Collapse>
            )}
            {/*submenu for web*/}
            {item.submenu && !props.mobile && (
              <Drawer
                anchor="left"
                variant="temporary"
                open={webSubmenuOpen[item.key]}
                onClose={handleDrawerClose}
                ModalProps={{
                  keepMounted: false,
                }}
              >
                <Box className="h-full" bgcolor="primary.light">
                  <StyledAppBar position="static" className="flex">
                    <Toolbar>
                      <Typography
                        variant="h6"
                        component="div"
                        className="color-primary"
                      >
                        {item.title}
                      </Typography>
                      <IconButton
                        aria-label="close submenu"
                        edge="end"
                        onClick={handleDrawerClose}
                      >
                        <ArrowBackIcon />
                      </IconButton>
                    </Toolbar>
                  </StyledAppBar>
                  <MenuSubItems items={item.submenu}></MenuSubItems>
                </Box>
              </Drawer>
            )}
          </>
        );
      })}
    </List>
  );
}
