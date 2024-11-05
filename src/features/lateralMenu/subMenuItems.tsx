import { List, ListItemText } from '@mui/material';
import {
  StyledListItemButton,
  StyledListItemIcon,
} from './constants/menuConstants.tsx';

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
            <StyledListItemButton key={subitem.key}>
              <StyledListItemIcon>{subitem.icon}</StyledListItemIcon>
              <ListItemText>{subitem.title}</ListItemText>
            </StyledListItemButton>
          );
        })}
      </List>
    </>
  );
}
