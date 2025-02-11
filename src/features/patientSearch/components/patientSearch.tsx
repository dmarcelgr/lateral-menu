import * as React from 'react';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useGetPatientQuery } from '../redux/api/patientSearchApi.ts';
import { Message } from '../../messages/models';
import EWPFormatISODate from '../../../components/reusableDateFormatter/EWPFormatISODate.tsx';
import { useTranslation } from 'react-i18next';
import { Button, Stack } from '@mui/material';
import ProviderDepartments from '../../../components/providerFilters/components/ProviderDepartments.tsx';
import Grid from '@mui/material/Grid2';
import { Search } from '@mui/icons-material';

export function PatientSearch() {
  const { t } = useTranslation();
  const [filterValues, setFilterValues] = useState<string[]>([]);

  const { data: patients, isLoading }: Message = useGetPatientQuery(
    (filterValues, { skip: !filterValues })
  );

  const handleFilterChange = (newFilters: string[]) => {
    setFilterValues(newFilters);
  };

  function PrintMyState(state) {
    console.log('state:: ', state);
  }

  useEffect(() => {
    PrintMyState(filterValues);
  }, [filterValues]);

  if (isLoading) return <p>{t('loading')}...</p>;
  if (!patients) return <p>{t('no_available_data')}...</p>;

  return (
    <>
      <Stack gap={4}>
        <ProviderDepartments onFilterChange={handleFilterChange} />
        {/*Patient Search input*/}
        <Grid container spacing={0} direction="row" className="!w-full">
          <Grid size={10.8}>
            <Autocomplete
              id="patient-search"
              size="large"
              autoHighlight
              disableClearable
              onChange={(e) => handleFilterChange(e.target.value)}
              options={patients?.patients || []} //
              getOptionLabel={(option) => option.patientFullName || ''}
              renderOption={(props, option) => (
                <li {...props} key={option.patientId}>
                  <p>
                    <b>{option.patientLastName}</b>, {option.patientFirstName} /
                    DOB: <EWPFormatISODate date={option.patientDOB} /> / ID:{' '}
                    {option.patientId} / {option.status}
                  </p>
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={
                    t('search_by') +
                    ': ' +
                    t('patient_name') +
                    ', ' +
                    t('dob') +
                    ', ' +
                    'mm-dd-yyyy'
                  }
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      type: 'search',
                    },
                  }}
                />
              )}
            />
          </Grid>
          <Grid size={1}>
            <Button
              variant="contained"
              className="!h-full"
              sx={{ backgroundColor: 'primary.light' }}
              onClick={handleFilterChange}
            >
              <Search />
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
