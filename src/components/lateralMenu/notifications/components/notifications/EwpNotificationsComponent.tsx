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
import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import NotificationsDataComponent from './NotificationsDataComponent.tsx';
import { useGetNotificationsQuery } from '../../redux/api/notificationsApi.ts';
import { NOTIFICATIONS_FILTERS } from '../const/notificationsFilters.const.ts';
import { EwpNotificationsSearch } from '../../models';

export default function EwpNotificationsComponent() {
  const { t } = useTranslation();

  const [checkedUnread, setCheckedUnread] = useState(true); // State handler for 'Show only unread' switch
  const [searchTerm, setSearchTerm] = useState(NOTIFICATIONS_FILTERS); // API state

  const {
    data: notifications,
    isFetching,
    refetch,
  }: Notification = useGetNotificationsQuery(searchTerm);

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

  const handleFilterChange = (
    event: ChangeEvent<unknown>,
    newFilters?: boolean
  ) => {
    setSearchTerm((prevFilters: EwpNotificationsSearch) => ({
      ...prevFilters,
      isRead: !newFilters,
    }));
  };

  return (
    <>
      {isFetching ? (
        <p>{t('loading')}...</p>
      ) : !notifications || notifications.length === 0 ? (
        <p>{t('no_available_data')}...</p>
      ) : (
        <Box>
          <Toolbar className="justify-center space-x-4 -ml-6">
            <span className="flex-1 hidden lg:block"></span>
            <IconButton
              className="!p-0 !mx-0"
              aria-label="refresh"
              onClick={() => refetch()}
            >
              <Refresh />
            </IconButton>
            <FormGroup row className="!mx-0 !flex-nowrap">
              <FormControlLabel
                className="!mx-0"
                control={
                  <Switch
                    checked={checkedUnread}
                    onChange={(event) => {
                      handleChange(event, 'unread');
                      handleFilterChange(event, event.target.checked);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={t('only_show_unread')}
              />
            </FormGroup>
          </Toolbar>
          <NotificationsDataComponent notifications={notifications} />
        </Box>
      )}
    </>
  );
}
