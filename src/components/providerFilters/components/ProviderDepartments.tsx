import { Message } from '../../../features/messages/models';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetProviderDepartmentsQuery } from '../redux/api/ProviderDepartmentsApi.ts';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ProviderDepartments({ onFilterChange }) {
  const { t } = useTranslation();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (event) => {
    const newFilters = event.target.value;
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const { data: departments, isLoading }: Message =
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
                icon={icon}
                checkedIcon={checkedIcon}
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
