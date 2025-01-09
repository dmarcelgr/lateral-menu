import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { cloneElement, useState } from 'react';
import { SubMenuItems } from './SubMenuItems.tsx';
import { ArrowBack } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '../interfaces/menuInterface.ts';
import { MessagesComponent } from '../../messages/components/MessagesComponent.tsx';
import { NotificationsComponent } from '../../notifications/components/NotificationsComponent.tsx';

interface MenuItemsProps {
  key: string;
  items: MenuItem[];
}

function showComponent(title, key, submenu) {
  switch (title) {
    case 'inbox':
      return <MessagesComponent />;
    case 'notifications':
      return <NotificationsComponent />;
    case 'search':
      return <h1>Hola desde search</h1>;
    default:
      return <SubMenuItems key={key} items={submenu}></SubMenuItems>;
  }
}

export function LateralMenuItems(props: MenuItemsProps) {
  const { t } = useTranslation();
  const { items }: MenuItem = props;
  const matchesResponsiveWidth = useMediaQuery('(min-width:1023px)');
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (key: number) => {
    setSubmenuOpen((prevState: boolean) => ({
      [key]: !prevState[key],
    }));
  };

  const handleDrawerClose = (): void => {
    setSubmenuOpen(false);
  };

  return (
    <List aria-label="lateral menu" key={items.key} className="p-0">
      {items.map((item) => {
        return (
          <>
            <Divider
              component="li"
              className="z-100 opacity-60 lg:!border-t	lg:!border-slate-400"
            />
            {/*main menu structure*/}
            <ListItem
              key={item.key}
              disablePadding
              className="h-14 lg:opacity-60 hover:opacity-100 h-fit"
              sx={{
                bgcolor: 'primary.main',
                ':hover': {
                  color: 'secondary.light',
                  bgcolor: 'secondary.dark',
                },
              }}
            >
              <ListItemButton
                className="py-10 h-16"
                onClick={() => handleToggle(item.key)}
              >
                <ListItemIcon className="min-w-12	">
                  {cloneElement(item.icon, {
                    sx: {
                      color: 'secondary.light',
                      width: '2.5rem',
                      fontSize: '2rem',
                    },
                  })}
                </ListItemIcon>
                <ListItemText
                  className="block lg:hidden"
                  sx={{ color: 'secondary.light' }}
                >
                  {t(item.title)}
                </ListItemText>
              </ListItemButton>
            </ListItem>
            {/*submenu structure*/}
            {item.submenu && (
              <Drawer
                className="w-full absolute !left-20 !z-1"
                anchor={matchesResponsiveWidth ? 'left' : 'top'}
                variant="temporary"
                hideBackdrop
                open={submenuOpen[item.key]}
                onClose={handleDrawerClose}
                TransitionComponent={Fade}
                transitionDuration={0}
                ModalProps={{
                  keepMounted: false,
                }}
                PaperProps={{
                  sx: {
                    left: { xs: '1', lg: '4.5rem' },
                    width: { xs: '100%', lg: '30%' },
                  },
                }}
              >
                <Box
                  className="h-full w-full px-2.5"
                  bgcolor="primary.main lg:secondary.light"
                >
                  <AppBar
                    position="static"
                    className="flex"
                    color="secondary.light"
                    elevation={0}
                  >
                    <Toolbar
                      className={`flex flex-row min-h-12 ${submenuOpen ? 'justify-start' : 'justify-between'}`}
                    >
                      <span className="flex-1 hidden lg:block"></span>
                      <Typography
                        variant="h4"
                        component="div"
                        color="primary.main"
                        className="block"
                      >
                        {t(item.title)}
                      </Typography>
                      <span className="flex-1 hidden lg:block"></span>
                      <IconButton
                        aria-label="close submenu"
                        edge="end"
                        color="primary.main"
                        onClick={handleDrawerClose}
                      >
                        <ArrowBack />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  {showComponent(item.title, item.key, item.submenu)}
                </Box>
              </Drawer>
            )}
          </>
        );
      })}
    </List>
  );
}
