import { List } from '@mui/material';
import {
  SubmenuListItemButton,
  SubmenuListItemIcon,
  SubmenuListItemText,
} from './constants/menuConstants.tsx';
import { t } from 'i18next';

function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

export function SubMenuItems(props: []) {
  const randomKey: number = getRandomInt(2);
  return (
    <>
      <List
        aria-label="lateral menu"
        key={randomKey}
        sx={{ bgcolor: 'primary.light' }}
      >
        {props.items.map((subitem) => {
          return (
            <SubmenuListItemButton key={subitem.key}>
              <SubmenuListItemIcon>{subitem.icon}</SubmenuListItemIcon>
              <SubmenuListItemText>{t(subitem.title)}</SubmenuListItemText>
            </SubmenuListItemButton>
          );
        })}
      </List>
    </>
  );
}
