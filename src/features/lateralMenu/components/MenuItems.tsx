import React, { cloneElement } from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  ListItemButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { MenuItem } from '../models/menu.ts';
import { useTranslation } from 'react-i18next';
import { SubMenuItems } from './SubMenuItems.tsx';
import { ArrowBack } from '@mui/icons-material';

interface menuProps {
  openSubMenu?: (index: number, source: string) => void;
  openIndex?: number;
  menuKey: string;
  menuItems?: MenuItem[];
}

export default function MenuItems(props: menuProps) {
  const { t } = useTranslation();
  const { menuItems, menuKey, openSubMenu, openIndex }: MenuItem = props;

  const handleClick = (index, source) => {
    openSubMenu(index, source);
  };

  return (
    <List
      aria-label="lateral menu"
      key={menuItems.key}
      className={`p-2 ${openIndex !== -1 && openIndex !== 10 ? 'lg:!w-[43rem]' : '!w-full'}`}
    >
      {menuItems.map(({ title, icon, submenu, key }, index) => (
        <React.Fragment key={index}>
          <Divider
            component="li"
            className={`
              z-100 opacity-60 lg:!border-t	lg:!border-slate-400 ${openIndex !== -1 && openIndex !== 10 ? 'lg:!w-[11%]' : '!w-full'}`}
          />
          <ListItem
            disablePadding
            className={`h-14 lg:opacity-60 hover:opacity-100 h-fit ${openIndex !== -1 && openIndex !== 10 ? 'lg:!w-[11%]' : '!w-full'}`}
            sx={{
              bgcolor: 'primary.main',
              ':hover': {
                color: 'secondary.light',
                bgcolor: 'secondary.dark',
              },
            }}
          >
            <ListItemButton
              className="py-10 w-auto h-16"
              onClick={() => handleClick(index, menuKey)}
            >
              <ListItemIcon className="min-w-12	">
                {/*cambiar para evitar warning*/}
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
          </ListItem>

          <Collapse
            in={openIndex === index}
            orientation={'horizontal'}
            unmountOnExit
            timeout={-2}
            transitionprops={{ timeout: 0 }}
            className={`bg-white !float-right !h-screen !w-full
                        ${openIndex !== -1 && menuKey === 'topItems' ? 'lg:!w-[100%] lg:!absolute lg:!left-[11%] lg:!-top-[15.5%] lg:!z-[999]' : '!w-full'} 
                        ${openIndex !== 10 && menuKey === 'bottomItems' ? 'lg:!w-[100%] lg:!absolute lg:!left-[11%] lg:!-top-[237%] lg:!z-[999]' : '!w-full'}`}
            sx={{
              '& .MuiCollapse-wrapper': {
                display: 'block',
                width: '90%',
                height: '100%',
              },
            }}
          >
            <Box
              className="h-full w-full"
              bgcolor="primary.main lg:!secondary.light"
            >
              <Toolbar
                className={`flex flex-row min-h-12 ${openIndex !== -1 && openIndex !== 10 ? 'justify-start' : 'justify-between'}`}
              >
                <span className="flex-1 hidden lg:block"></span>
                <Typography
                  variant="h4"
                  component="div"
                  color="primary.main"
                  className="block"
                >
                  {t(title)}
                </Typography>
                <span className="flex-1 hidden lg:block"></span>
                <IconButton
                  aria-label="close submenu"
                  edge="end"
                  color="primary.main"
                  onClick={() => handleClick(index, menuKey)}
                >
                  <ArrowBack />
                </IconButton>
              </Toolbar>
              <SubMenuItems key={key} items={submenu}></SubMenuItems>
            </Box>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
}
