import {
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
import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import { useGetAlertsQuery } from '../../redux/api/notificationsApi.ts';
import { EwpAlertSearch } from '../../models';
import AlertsDataComponent from './AlertsDataComponent.tsx';
import EwpPagination from '../../../../pagination/EwpPagination.tsx';
import { ALERTS_FILTERS } from '../const/alertsFilters.const.ts';
import { EwpLateralMenuLinkHandler } from '../../../linkHandler/EwpLateralMenuLinkHandler.tsx';

export default function EwpLateralMenuAlerts() {
  const { t } = useTranslation();
  const [checkedUnread, setCheckedUnread] = useState(true); // Unread switch state
  const [searchTerms, setSearchTerms] = useState(ALERTS_FILTERS); // API state

  const {
    data: { events, totalEvents } = {},
    isFetching,
    refetch,
  } = useGetAlertsQuery(searchTerms);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedUnread(event.target.checked);
  };

  const handleFilterChange = (event, newFilters: boolean | EwpAlertSearch) => {
    setSearchTerms((prevFilters: EwpAlertSearch) => ({
      ...prevFilters,
      readByMedicalStaff:
        typeof newFilters === 'boolean'
          ? !newFilters
          : prevFilters.readByMedicalStaff,
      page: newFilters?.page != undefined ? newFilters?.page : prevFilters.page,
      pageSize:
        newFilters?.pageSize != undefined
          ? newFilters.pageSize
          : prevFilters.pageSize,
    }));
  };

  return (
    <>
      {isFetching && <i>{t('loading')}... </i>}
      {events?.length > 0 ? (
        <Box>
          <Toolbar className="justify-center space-x-4 -ml-6">
            <IconButton
              className="!p-0 !mx-0"
              aria-label="refresh"
              onClick={() => refetch()}
              disabled={isFetching}
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
                      handleChange(event);
                      handleFilterChange(event, event.target.checked);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={t('only_show_unread')}
              />
              <FormControlLabel
                className="!mx-0"
                control={
                  <Switch
                    disabled
                    defaultChecked
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
              onClick={() => EwpLateralMenuLinkHandler('patients/#/events//')}
            >
              {t('events')}
            </Button>
          </Toolbar>
          <AlertsDataComponent events={events} />
          <EwpPagination
            onPaginationChange={handleFilterChange}
            filters={searchTerms}
            total={totalEvents}
          />
        </Box>
      ) : (
        <i>{t('no_available_data')}...</i>
      )}
    </>
  );
}
