import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Create, Forum } from '@mui/icons-material';
import { MessagesInbox } from './MessagesInbox.tsx';

export function MessagesComponent() {
  const { t } = useTranslation();
  return (
    <Box
      className="h-full w-full px-0 lg:-mt-2"
      bgcolor="primary.main lg:secondary.light"
    >
      <AppBar
        position="static"
        color="secondary.light"
        elevation={0}
        disable-gutters
        className="flex"
      >
        <Toolbar className="justify-center space-x-4 -ml-6">
          <Button
            className="!normal-case"
            variant="outlined"
            tabIndex={-1}
            size="small"
            startIcon={<Create />}
            href="msg/compose"
          >
            {t('compose_message')}
          </Button>
          <Button
            className="!normal-case"
            variant="outlined"
            tabIndex={-1}
            size="small"
            startIcon={<Forum />}
            href="msg/view"
          >
            {t('view_messages')}
          </Button>
        </Toolbar>
      </AppBar>
      <MessagesInbox />
    </Box>
  );
}
