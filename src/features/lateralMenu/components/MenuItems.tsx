import React, { cloneElement, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Drawer, ListItemButton, useMediaQuery } from '@mui/material';
import { MenuItem } from '../models/menu.ts';
import { useTranslation } from 'react-i18next';
import { SubMenuItems } from './SubMenuItems.tsx';
import { menuItemsProps } from '../models/menuItemsProps.ts';

export default function MenuItems(props: menuItemsProps) {
  const { t } = useTranslation();
  const { menuItems, menuKey } = props;
  const matchesResponsiveWidth: boolean = useMediaQuery('(min-width:1023px)');

  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);

  const handleOpenDrawer = (menu: MenuItem) => {
    setSelectedMenu(menu);
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
    setSelectedMenu(null);
  };

  return (
    <>
      <List
        aria-label="lateral menu"
        key={menuKey}
        className={`p-0 ${open ? '!w-lg' : '!w-auto'}  !justify-between`}
      >
        {menuItems.map((item) => (
          <React.Fragment key={item.key}>
            <Divider
              component="li"
              className={`
                z-100 opacity-60 lg:!border-t	lg:!border-slate-400 ${open ? 'w-16' : 'w-full'}`}
            />
            <ListItem
              disablePadding
              className={` h-fit overflow-y-auto ${open ? '!w-18' : '!w-auto'}`}
              sx={{
                bgcolor: 'primary.main',
                ':hover': {
                  // color: 'secondary.light',
                  bgcolor: 'secondary.dark',
                },
              }}
            >
              <ListItemButton
                className={`py-10 h-16 lg:opacity-60 hover:opacity-100 h-fit ${open ? '!w-18' : '!w-auto'}`}
                onClick={() => {
                  handleOpenDrawer(item);
                }}
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
          </React.Fragment>
        ))}
        <Drawer
          className="w-full"
          anchor={matchesResponsiveWidth ? 'left' : 'top'}
          open={open}
          onClose={handleCloseDrawer}
          hideBackdrop
          variant="temporary"
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
          {selectedMenu && (
            <SubMenuItems
              props={selectedMenu}
              handleDrawerClose={handleCloseDrawer}
            ></SubMenuItems>
          )}
        </Drawer>
      </List>
    </>
  );
}
