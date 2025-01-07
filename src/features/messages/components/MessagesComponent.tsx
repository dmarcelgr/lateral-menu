import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Create, Forum } from '@mui/icons-material';
import { MessagesInbox } from './MessagesInbox.tsx';

export function MessagesComponent() {
  const { t } = useTranslation();
  return (
    <Box
      className="h-full w-full  px-2.5 lg:-mt-2"
      bgcolor="primary.main lg:secondary.light"
    >
      <AppBar
        position="static"
        color="secondary.light"
        elevation={0}
        disable-gutters
        className="w-full"
      >
        <Toolbar className={`flex space-x-12`}>
          <Button
            variant="outlined"
            tabIndex={-1}
            size="small"
            startIcon={<Create />}
          >
            {t('compose_message')}
          </Button>
          <Button
            variant="outlined"
            tabIndex={-1}
            size="small"
            startIcon={<Forum />}
          >
            {t('view_messages')}
          </Button>
        </Toolbar>
      </AppBar>
      <MessagesInbox />
    </Box>
  );
}
