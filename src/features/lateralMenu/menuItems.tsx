import {
  AppBar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { SubMenuItems } from './subMenuItems.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  LateralMenuListItemButton,
  SubmenuToolbar,
} from './constants/styledComponents.tsx';
import { t } from 'i18next';

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
              <LateralMenuListItemButton
                color="greyscale.light"
                onClick={() =>
                  handleToggle(item.key, props.mobile ? 'mobile' : 'web')
                }
              >
                <ListItemIcon>
                  {/*{item.icon}*/}
                  {React.cloneElement(item.icon, { fontSize: 'large' })}
                </ListItemIcon>
                {props.text && <ListItemText>{item.title}</ListItemText>}
              </LateralMenuListItemButton>
            </ListItem>
            {/*submenu for mobile*/}
            {item.submenu && props.mobile && (
              <Collapse in={submenuOpen[item.key]} timeout="auto" unmountOnExit>
                <SubMenuItems items={item.submenu}></SubMenuItems>
              </Collapse>
            )}
            {/*submenu for web*/}
            {item.submenu && !props.mobile && (
              <Drawer
                className="w-full"
                anchor="left"
                variant="temporary"
                open={webSubmenuOpen[item.key]}
                onClose={handleDrawerClose}
                ModalProps={{
                  keepMounted: false,
                }}
              >
                <Box className="h-full w-max" bgcolor="greyscale.light">
                  <AppBar position="static" className="flex">
                    <SubmenuToolbar className="flex justify-between">
                      <Typography
                        variant="h4"
                        component="div"
                        className="color-primary"
                      >
                        {t(item.title)}
                      </Typography>
                      <IconButton
                        aria-label="close submenu"
                        edge="end"
                        onClick={handleDrawerClose}
                      >
                        <ArrowBackIcon />
                      </IconButton>
                    </SubmenuToolbar>
                  </AppBar>
                  <SubMenuItems items={item.submenu}></SubMenuItems>
                </Box>
              </Drawer>
            )}
          </>
        );
      })}
    </List>
  );
}
