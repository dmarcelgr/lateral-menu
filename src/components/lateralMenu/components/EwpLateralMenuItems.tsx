import React, { cloneElement, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider, ListItemButton } from '@mui/material';
import { EwpLateralMenuItem } from '../models/menu.ts';
import { useTranslation } from 'react-i18next';
import { EwpLateralMenuSubMenuItems } from './EwpLateralMenuSubMenuItems.tsx';
import { MenuItemProps } from '../dto/menu';

export default function EwpLateralMenuItems(props: MenuItemProps) {
  const { t } = useTranslation();
  const { menuItems, menuKey } = props;

  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<EwpLateralMenuItem | null>(
    null
  );

  const handleOpenDrawer = (menu: EwpLateralMenuItem) => {
    setSelectedMenu(menu);
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
    setSelectedMenu(null);
  };

  return (
    <>
      <List aria-label="lateral menu" key={menuKey} className="p-0">
        {menuItems.map((item: EwpLateralMenuItem) => (
          <span key={item.key}>
            <Divider
              component="li"
              className={`
                z-100 opacity-60 lg:!border-t	lg:!border-slate-400 w-full'}`}
            />
            <ListItem
              disablePadding
              className="h-14 lg:opacity-60 hover:opacity-100 !w-18"
              sx={{
                bgcolor: 'primary.main',
                ':hover': {
                  bgcolor: 'secondary.dark',
                },
              }}
            >
              <ListItemButton
                className="shadow-inner py-10 h-16 h-[4rem]"
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
          </span>
        ))}
        {/*Submenu*/}
        <Box
          className="z-[999] fixed top-px lg:!left-20 lg:w-2/6 sm:w-full rounded-md bg-white !shadow-md"
          open={open}
          onClose={handleCloseDrawer}
        >
          {selectedMenu && (
            <EwpLateralMenuSubMenuItems
              props={selectedMenu}
              handleDrawerClose={handleCloseDrawer}
            ></EwpLateralMenuSubMenuItems>
          )}
        </Box>
      </List>
    </>
  );
}
