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
import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowBack } from '@mui/icons-material';
import { SubmenuItemsProps } from '../dto/menu';

export function SubMenuItems({ props, handleDrawerClose }: SubmenuItemsProps) {
  const { key, submenu, title } = props;
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
            onClick={() => handleDrawerClose()}
          >
            <ArrowBack />
          </IconButton>
        </Toolbar>
        {Array.isArray(submenu) ? (
          <List aria-label="lateral menu" key={key} className="!px-2">
            {submenu.map((subitem) => {
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
          <Box className="p-5" key={key}>
            {submenu}
          </Box>
        )}
      </Box>
    </>
  );
}
