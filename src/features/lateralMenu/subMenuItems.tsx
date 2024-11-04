import { List, ListItemText } from '@mui/material';
import {
  StyledListItemButton,
  StyledListItemIcon,
} from './constants/menuConstants.tsx';

export function MenuSubItems(props: []) {
  return (
    <>
      <List aria-label="lateral menu" sx={{ bgcolor: 'primary.light' }}>
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
