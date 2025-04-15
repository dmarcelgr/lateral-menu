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
import { EwpNotificationSearch } from '../../models';

export default function EwpLateralMenuNotificationsComponent() {
  const { t } = useTranslation();

  const [checkedUnread, setCheckedUnread] = useState(true); // State handler for 'Show only unread' switch
  const [searchTerm, setSearchTerm] = useState(NOTIFICATIONS_FILTERS); // API state

  const {
    data: notifications,
    isFetching,
    refetch,
  }: Notification = useGetNotificationsQuery(searchTerm);

  const handleFilterChange = (
    event: ChangeEvent<unknown>,
    newFilters?: boolean
  ) => {
    setSearchTerm((prevFilters: EwpNotificationSearch) => ({
      ...prevFilters,
      isRead: !newFilters,
    }));
  };

  return (
    <>
      {isFetching && <i>{t('loading')}... </i>}
      {notifications != undefined && notifications?.data.length > 0 ? (
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
                      setCheckedUnread(event.target.checked);
                      handleFilterChange(event, event.target.checked);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={t('only_show_unread')}
              />
            </FormGroup>
          </Toolbar>
          <NotificationsDataComponent data={notifications.data} />
        </Box>
      ) : (
        <i>{t('no_available_data')}...</i>
      )}
    </>
  );
}
