import { StyledComponent } from '@emotion/styled';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
} from '@mui/material';

// main lateral menu list item button
export const LateralMenuListItemButton: StyledComponent<any> = styled(
  ListItemButton
)(({ theme }) => ({
  borderTop: '1px solid',
  borderColor: theme.palette.greyscale.main,
  boxShadow: 'inset 0 1px 1px' + theme.palette.greyscale.shadow,
}));

// styled components for sub menu

// submenu list item button
export const SubmenuListItemButton: StyledComponent<any> = styled(
  ListItemButton
)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.greyscale.darker,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.greyscale.light,
  },
  fontSize: '14px',
  width: '18rem',
  boxShadow: 'inset 0 1px 1px' + theme.palette.greyscale.shadow,
  padding: '3px 10px 3px 10px',
}));
// submenu list item icon
export const SubmenuListItemIcon: StyledComponent<any> = styled(ListItemIcon)(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.greyscale.light,
    },
    width: '17rem',
    zIndex: '2',
    height: 'auto',
  })
);
// submenu list item text
export const SubmenuListItemText: StyledComponent<any> = styled(ListItemText)(
  () => ({
    zIndex: '1',
    marginLeft: '-14rem',
  })
);
// submenu toolbar
export const SubmenuToolbar: StyledComponent<any> = styled(Toolbar)(
  ({ theme }) => ({
    backgroundColor: theme.palette.greyscale.light,
    color: theme.palette.primary.main,
    fontSize: '18px',
    fontWeight: '500',
    justifyContent: 'center',
    padding: '0',
  })
);
