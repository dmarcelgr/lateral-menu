import {
  AppBar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { SubMenuItems } from './subMenuItems.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
import { menuItem } from './constants/menuInterface.ts';

interface menuItemsProps {
  items: menuItem[];
  mobile: boolean;
  text: boolean;
}

export function MenuItems(props: menuItemsProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  const { t }: Function = useTranslation();
  const { items }: menuItem = props;
  const matchesWidth: boolean = useMediaQuery('(min-width:1023px)');

  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [webSubmenuOpen, setWebSubmenuOpen] = useState(false);
  const [webSubmenuClose, setWebSubmenuClose] = useState(false);

  const handleToggle = (key: never): void => {
    if (matchesWidth) {
      setWebSubmenuOpen((prevState: any) => ({
        ...prevState,
        [key]: !prevState[key],
      }));
    } else {
      setSubmenuOpen((prevState: any) => ({
        ...prevState,
        [key]: !prevState[key],
      }));
    }
  };

  const handleDrawerClose = (): void => {
    setWebSubmenuClose(true);
    setWebSubmenuOpen(false);
  };

  return (
    <List aria-label="lateral menu">
      {items.map((item) => {
        return (
          <>
            <ListItem
              key={item.key}
              disablePadding
              className="h-14 opacity-60 hover:opacity-100"
              sx={{
                bgcolor: 'primary.darker',
                ':hover': {
                  bgcolor: 'secondary.dark',
                },
              }}
            >
              <ListItemButton
                className="shadow-inner divide-y-2 divide-slate-400"
                onClick={() => handleToggle(item.key)}
              >
                <ListItemIcon>
                  {item.icon}
                  {/*{React.cloneElement(item.icon, { fontSize: 'large' })}*/}
                </ListItemIcon>
                {!matchesWidth && <ListItemText>{item.title}</ListItemText>}
              </ListItemButton>
            </ListItem>
            {/*submenu for mobile*/}
            {matchesWidth && (
              <Collapse in={submenuOpen[item.key]} timeout="auto" unmountOnExit>
                <SubMenuItems items={item.submenu}></SubMenuItems>
              </Collapse>
            )}
            {/*submenu for web*/}
            {item.submenu && (
              <Drawer
                className="w-full"
                anchor="left"
                variant="temporary"
                hideBackdrop
                open={webSubmenuOpen[item.key]}
                onClose={handleDrawerClose}
                ModalProps={{
                  keepMounted: true,
                }}
                PaperProps={{
                  sx: {
                    left: '5%',
                    width: '30%',
                  },
                }}
              >
                <Box className="h-full w-full" bgcolor="secondary.light">
                  <AppBar
                    position="static"
                    className="flex"
                    color="secondary.light"
                    elevation={0}
                  >
                    <Toolbar className="flex flex-row justify-between">
                      <span className="flex-1"></span>
                      <Typography
                        variant="h4"
                        component="div"
                        color="primary.main"
                      >
                        {t(item.title)}
                      </Typography>
                      <span className="flex-1"></span>
                      <IconButton
                        aria-label="close submenu"
                        edge="end"
                        color="primary.main"
                        onClick={handleDrawerClose}
                      >
                        <ArrowBackIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                  <SubMenuItems items={item.submenu}></SubMenuItems>
                </Box>
              </Drawer>
            )}
          </>
        );
      })}
    </List>
  );
}
