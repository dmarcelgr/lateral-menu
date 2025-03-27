import {
  useGetTelehealthProviderQuery,
  useGetTelehealthRoomsQuery,
} from '../redux/api/TelehealthApi.ts';
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { TELEHEALTH_ROOMS_SEARCH } from '../const/telehealthRoomsSearch.const.ts';

export default function EwpLateralMenuTelehealthComponent() {
  const { t } = useTranslation();
  const RoomRef = useRef();

  const { data: telehealth, isLoadingTelehealth } = useGetTelehealthRoomsQuery(
    TELEHEALTH_ROOMS_SEARCH
  );
  const { data: provider, isLoadingProvider } = useGetTelehealthProviderQuery();

  const handleCopy = () => {
    const roomValue = RoomRef.current;
    navigator.clipboard.writeText(roomValue['roomlink'].value);
  };

  return (
    <>
      {isLoadingProvider || isLoadingTelehealth ? (
        <p>{t('loading')}...</p>
      ) : !telehealth && !provider ? (
        <p>{t('no_available_data')}...</p>
      ) : (
        <Grid
          container
          spacing={2}
          direction="column"
          className="content-center w-full  "
        >
          <h1 className="text-3xl">
            {t('welcome')}, <b>{provider.providerInfo[0]?.name}</b>
          </h1>
          <span className="text-slate-400">{t('share_link_to_invite')}</span>

          <Grid container spacing={2}>
            <Grid size={9}>
              <form ref={RoomRef}>
                <Autocomplete
                  id="roomlink"
                  size="medium"
                  options={telehealth.roomsInfo || []}
                  getOptionLabel={(room) => room.url}
                  defaultValue={telehealth.roomsInfo[0] || []}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label={t('waiting_room')}
                      placeholder={t('select_a_room')}
                    />
                  )}
                />
              </form>
            </Grid>

            <Grid size="grow">
              <Button
                variant="contained"
                sx={{ backgroundColor: 'primary.light' }}
                onClick={handleCopy}
              >
                {t('copy')}
              </Button>
            </Grid>
          </Grid>
          <br />
          {/*Integrate socket to see users on the waiting room*/}
          <span className="text-slate-400">0 {t('patients_waiting')}</span>
          <b>{t('no_one_in_waiting_room')}</b>
        </Grid>
      )}
    </>
  );
}
