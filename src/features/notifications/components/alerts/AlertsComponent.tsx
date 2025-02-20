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
import { AlertsSearch } from '../../models';
import AlertsDataComponent from './AlertsDataComponent.tsx';
import EWPPagination from '../../../../components/pagination/EWPPagination.tsx';

export default function AlertsComponent() {
  const { t } = useTranslation();

  const filters = {
    readByMedicalStaff: false,
    onlyMyPatients: true,
    page: 0,
    pageSize: 10,
  };

  const [checkedUnread, setCheckedUnread] = useState(true);
  const [searchTerm, setSearchTerm] = useState(filters); // API state

  const {
    data: alerts,
    isFetching,
    refetch,
  }: AlertsSearch = useGetAlertsQuery(searchTerm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedUnread(event.target.checked);
  };

  const handleFilterChange = (event, newFilters?: boolean | AlertsSearch) => {
    filters: typeof newFilters != 'boolean'
      ? (filters.page = newFilters.page || 0)
      : (filters.pageSize = newFilters.pageSize || 10);

    setSearchTerm((prevFilters) => ({
      ...prevFilters,
      readByMedicalStaff:
        typeof newFilters === 'boolean'
          ? !newFilters
          : prevFilters.readByMedicalStaff,
      page: filters.page,
      pageSize: filters.pageSize,
    }));
  };

  if (isFetching) return <p>{t('loading')}...</p>;

  return (
    <>
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
            href="patients/#/events//"
          >
            {t('events')}
          </Button>
        </Toolbar>
        <AlertsDataComponent alerts={alerts} />
        <EWPPagination
          onPaginationChange={handleFilterChange}
          initialPage={filters.page}
          initialPageSize={filters.pageSize}
          total={alerts.totalEvents}
        />
      </Box>
    </>
  );
}
