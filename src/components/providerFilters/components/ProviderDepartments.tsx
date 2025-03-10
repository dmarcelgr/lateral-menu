import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useGetProviderDepartmentsQuery } from '../redux/api/ProviderDepartmentsApi.ts';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { EwpProviderDepartments } from '../models';

export default function EwpProviderDepartments({ onFilterChange }) {
  const { t } = useTranslation();

  const handleFilterChange = (event, value) => {
    const departmentInsertions = [];
    value.forEach((item) => {
      departmentInsertions.push(item.departmentId);
    });
    onFilterChange(event, departmentInsertions);
  };

  const { data: departments, isLoading }: EwpProviderDepartments =
    useGetProviderDepartmentsQuery();
  if (isLoading) return <p>{t('loading')}...</p>;
  if (!departments) return <p>{t('no_available_data')}...</p>;

  return (
    <>
      <Autocomplete
        id="provider-departments"
        multiple
        disableCloseOnSelect
        onChange={handleFilterChange}
        options={departments?.departments || []} //
        getOptionLabel={(option) =>
          option.departmentName + ' (id: ' + option.departmentId + ')' || ''
        }
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.departmentName} (id: {option.departmentId})
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t('select_a_department')}
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
        )}
      />
    </>
  );
}
