import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '../models/menu.ts';
import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowBack } from '@mui/icons-material';

interface MenuItemsProps {
  openSubMenu?: string;
  menuKey?: number;
  items: MenuItem[];
  title: string;
}

export function SubMenuItems(props: MenuItemsProps[]) {
  const { openSubMenu, menuKey, items, title }: MenuItem = props;

  const handleClick = () => {
    console.log('menuKey at handle click / sub menu items: ', menuKey);
    openSubMenu(menuKey);
  };

  const { t } = useTranslation();
  return (
    <>
      <Box>
        <Toolbar
          className={`flex flex-row min-h-12 sm:justify-start lg:justify-between`}
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
            onClick={() => handleClick()}
          >
            <ArrowBack />
          </IconButton>
        </Toolbar>
        {Array.isArray(items) ? (
          <List aria-label="lateral menu" key={menuKey} className="!px-2">
            {items.map((subitem) => {
              return (
                <ListItem
                  component={Link}
                  key={subitem.key}
                  className="shadow-inner"
                  to={subitem.link}
                  sx={{
                    padding: '5px 10px',
                    ':hover': {
                      bgcolor: 'primary.light',
                      color: 'secondary.light',
                    },
                  }}
                >
                  <ListItemIcon
                    className="z-20 w-10 px-1 py-1"
                    sx={{
                      color: 'primary.dark',
                      ':hover': {
                        color: 'secondary.light',
                      },
                    }}
                  >
                    {subitem.icon}
                  </ListItemIcon>
                  <ListItemText
                    className="z-10 w-fit"
                    sx={{
                      color: 'secondary.main',
                      ':hover': {
                        color: 'secondary.light',
                      },
                    }}
                    primary={t(subitem.title)}
                  />
                </ListItem>
              );
            })}
          </List>
        ) : (
          <Box key={menuKey}>{items}</Box>
        )}
      </Box>
    </>
  );
}
