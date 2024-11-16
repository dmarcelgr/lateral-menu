import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { menuItem } from './constants/menuInterface.ts';

function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

interface menuItemsProps {
  items: menuItem[];
  mobile: boolean;
  text: boolean;
}

export function SubMenuItems(props: menuItemsProps[]) {
  const { items }: menuItem = props;

  const { t } = useTranslation();
  const randomKey: number = getRandomInt(2);
  return (
    <>
      <List aria-label="lateral menu" key={randomKey}>
        {items.map((subitem) => {
          return (
            <ListItemButton
              key={subitem.key}
              className="shadow-inner bg-primary-main text-white bg-primary-main"
              sx={{
                ':hover': {
                  bgcolor: 'primary.light',
                  color: 'secondary.light',
                },
              }}
            >
              <ListItemIcon
                className="z-20 w-72  px-1 py-1 text-sm"
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
                className="z-10"
                sx={{
                  color: 'primary.main',
                  ':hover': {
                    color: 'secondary.light',
                  },
                }}
                primary={t(subitem.title)}
              />
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
}
