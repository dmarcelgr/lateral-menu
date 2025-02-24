import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '../models/menu.ts';
import { Link } from 'react-router-dom';

function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

interface MenuItemsProps {
  menuKey?: number;
  items: MenuItem[];
}

export function SubMenuItems(props: MenuItemsProps[]) {
  const { items }: MenuItem = props;
  const { menuKey }: MenuItem = props;

  const { t } = useTranslation();
  return (
    <>
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
        items
      )}
    </>
  );
}
