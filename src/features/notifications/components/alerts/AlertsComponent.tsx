import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  Switch,
  Toolbar,
} from '@mui/material';
import { Refresh } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, useState } from 'react';
import AlertsDataComponent from './AlertsDataComponent.tsx';

export default function AlertsComponent() {
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
      case 'patients':
        setCheckedShowPatients(event.target.checked);
        break;
    }
  };

  return (
    <>
      <Box>
        <AppBar
          position="static"
          color="secondary.light"
          elevation={0}
          disable-gutters
          className="!flex !flex-nowrap"
        >
          <Toolbar className="justify-center space-x-4 -ml-6">
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
              <FormControlLabel
                className="!mx-0"
                control={
                  <Switch
                    checked={checkedShowPatients}
                    onChange={(event) => handleChange(event, 'patients')}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={t('show_my_patients')}
              />
            </FormGroup>
            <Button
              className="font-bold !px-2 !py-1 !normal-case"
              variant="outlined"
              tabIndex={-1}
              size="large"
              href="#"
            >
              {t('events')}
            </Button>
          </Toolbar>
        </AppBar>
        <AlertsDataComponent />
      </Box>
    </>
  );
}
