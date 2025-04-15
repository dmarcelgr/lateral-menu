import { Box, Button, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Create, Forum } from '@mui/icons-material';
import { MessagesComponent } from './MessagesComponent.tsx';
import { EwpLateralMenuLinkHandler } from '../../linkHandler/EwpLateralMenuLinkHandler.tsx';

export function EwpLateralMenuInboxMessages() {
  const { t } = useTranslation();

  return (
    <Box
      className="h-full w-full px-0 lg:-mt-2"
      bgcolor="primary.main lg:secondary.light"
    >
      <Toolbar className="justify-center space-x-4 -ml-6">
        <Button
          className="!normal-case"
          variant="outlined"
          tabIndex={-1}
          size="small"
          startIcon={<Create />}
          onClick={() =>
            EwpLateralMenuLinkHandler('/en/patients/#/msgs/compose/')
          }
        >
          {t('compose_message')}
        </Button>
        <Button
          className="!normal-case"
          variant="outlined"
          tabIndex={-1}
          size="small"
          startIcon={<Forum />}
          onClick={() =>
            EwpLateralMenuLinkHandler('/en/patients/#/msgs/inbox/')
          }
        >
          {t('view_messages')}
        </Button>
      </Toolbar>
      <MessagesComponent />
    </Box>
  );
}
