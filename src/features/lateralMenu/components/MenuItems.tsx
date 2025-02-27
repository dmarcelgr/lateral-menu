import React, { cloneElement, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider, ListItemButton } from '@mui/material';
import { MenuItem } from '../models/menu.ts';
import { useTranslation } from 'react-i18next';
import { SubMenuItems } from './SubMenuItems.tsx';

interface menuProps {
  openMenu: (key: string) => void;
  drawerState: () => void;
  menuKey: string;
  menuItems: MenuItem[];
}

export default function MenuItems(props: menuProps) {
  const { t } = useTranslation();
  const { openMenu, drawerState, menuItems, menuKey }: MenuItem = props;
  const [openedSubmenu, setOpenedSubmenu] = useState('');
  // const matchesResponsiveWidth: boolean = useMediaQuery('(min-width:1023px)');

  const handleSubmenu = (key: string) => {
    console.log('Menu Key:: ', key);
    // openMenu();
    // console.log('Event:: ', event);
    // console.log('Key at handle:: ', key);
    setOpenedSubmenu((prevState) => (prevState != key ? key : ''));
    openMenu(openedSubmenu);
  };

  return (
    <>
      <List
        aria-label="lateral menu"
        key={menuKey}
        className={`p-0 ${drawerState ? '!w-lg' : '!w-auto'}`}
      >
        {menuItems.map(({ title, icon, submenu, key }, index) => (
          <React.Fragment key={index}>
            <Divider
              component="li"
              className={`
              z-100 opacity-60 lg:!border-t	lg:!border-slate-400 ${drawerState ? 'w-16' : 'w-full'}`}
            />
            <ListItem
              disablePadding
              className={` h-fit overflow-y-auto ${drawerState ? '!w-18' : '!w-auto'}`}
              sx={{
                bgcolor: 'primary.main',
                ':hover': {
                  // color: 'secondary.light',
                  bgcolor: 'secondary.dark',
                },
              }}
            >
              <ListItemButton
                className={`py-10 h-16 lg:opacity-60 hover:opacity-100 h-fit ${drawerState ? '!w-18' : '!w-auto'}`}
                onClick={() => handleSubmenu(key)}
              >
                <ListItemIcon className="min-w-12	">
                  {cloneElement(icon, {
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
                  {t(title)}
                </ListItemText>
              </ListItemButton>
              <Box
                className={`h-full w-full px-2 ${drawerState && openedSubmenu === key ? 'block' : 'hidden'}`}
                bgcolor="secondary.light"
              >
                <SubMenuItems
                  key={key}
                  items={submenu}
                  openSubMenu={handleSubmenu}
                ></SubMenuItems>
              </Box>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
