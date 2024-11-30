import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MenuItem } from './interfaces/menuInterface.ts';
import { Link } from 'react-router-dom';

function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

interface MenuItemsProps {
  items: MenuItem[];
}

export function SubMenuItems(props: MenuItemsProps[]) {
  const { items }: MenuItem = props;

  const { t } = useTranslation();
  const randomKey: number = getRandomInt(2);
  return (
    <>
      <List aria-label="lateral menu" key={randomKey}>
        {items.map((subitem) => {
          return (
            <ListItem
              component={Link}
              button
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
    </>
  );
}
