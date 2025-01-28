import {
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  Switch,
  Toolbar,
} from '@mui/material';
import { Refresh } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, useState } from 'react';
import NotificationsDataComponent from './NotificationsDataComponent.tsx';

export default function NotificationsComponent() {
  const { t } = useTranslation();

  const [checkedUnread, setCheckedUnread] = useState(true);
  const [checkedShowPatients, setCheckedShowPatients] = useState(true);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    alertType: string
  ) => {
    switch (alertType) {
      case 'unread':
        setCheckedUnread(event.target.checked);
        break;
    }
  };

  return (
    <>
      <Box>
        <Toolbar className="justify-center space-x-4 -ml-6">
          <span className="flex-1 hidden lg:block"></span>
          <IconButton className="!p-0 !mx-0" aria-label="Example">
            <Refresh />
          </IconButton>
          <FormGroup row className="!mx-0 !flex-nowrap">
            <FormControlLabel
              className="!mx-0"
              control={
                <Switch
                  checked={checkedUnread}
                  onChange={(event) => handleChange(event, 'unread')}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label={t('only_show_unread')}
            />
          </FormGroup>
        </Toolbar>
        <NotificationsDataComponent />
      </Box>
    </>
  );
}
