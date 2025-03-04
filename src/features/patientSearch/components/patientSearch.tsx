import * as React from 'react';
import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useGetPatientQuery } from '../redux/api/patientSearchApi.ts';
import { useTranslation } from 'react-i18next';
import { Button, CircularProgress, Stack } from '@mui/material';
import ProviderDepartments from '../../../components/providerFilters/components/ProviderDepartments.tsx';
import Grid from '@mui/material/Grid2';
import { Search } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { PatientSearch, PatientSearchBox } from '../models';
import EWPFormatISODate from '../../../components/reusableDateFormatter/EWPFormatISODate.tsx';
import { PATIENTS_SEARCH_FILTERS } from '../const/patientsSearch.const.ts';

export function PatientSearch() {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState(''); // Input state
  const [searchTerm, setSearchTerm]: PatientSearchBox = useState(
    PATIENTS_SEARCH_FILTERS
  ); // API state

  const {
    data: patients,
    isFetching,
    refetch,
  }: PatientSearch = useGetPatientQuery(searchTerm, {
    skip: !searchTerm,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleFilterChange('ChangeEvent', inputValue);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [inputValue]);

  const handleFilterChange = (event, newFilters: PatientSearchBox | string) => {
    setSearchTerm((prevFilters) => ({
      ...prevFilters,
      [Array.isArray(newFilters) ? 'departmentInsertions' : 'searchBox']:
        newFilters,
    }));
  };

  const patientsFiltered = useMemo(
    () => patients?.patients || [],
    [patients?.patients]
  );

  return (
    <>
      <Stack gap={4}>
        {/*Provider department component*/}
        <ProviderDepartments onFilterChange={handleFilterChange} />
        {/*Patient Search input*/}
        <Grid container spacing={0} direction="row" className="!w-full">
          <Grid size={10.8}>
            <Autocomplete
              id="search-patient"
              freeSolo
              options={patientsFiltered}
              getOptionLabel={(option) => option.patientFullName || ''}
              loading={isFetching}
              onInputChange={(event: SyntheticEvent, newInputValue: string) => {
                setInputValue(newInputValue);
                // if (inputValue !== newInputValue) {
                //   // handleFilterChange(event, newInputValue);
                // }
              }}
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
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {isFetching ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
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
              onClick={refetch}
            >
              <Search />
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
