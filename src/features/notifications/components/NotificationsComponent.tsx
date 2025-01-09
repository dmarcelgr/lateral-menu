// import { Box, Tab, Tabs } from '@mui/material';
// import { useTranslation } from 'react-i18next';
// import { ReactNode, SyntheticEvent, useState } from 'react';

// interface TabPanelProps {
//   children?: ReactNode;
//   index: number;
//   value: number;
// }
//
// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export function NotificationsComponent() {
  // const { t } = useTranslation();
  // const [value, setValue] = useState(0);
  //
  // const handleChange = (event: SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <h1>Hello from notifications controller</h1>
      <span>:)</span>
      {/*  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>*/}
      {/*    <Tabs*/}
      {/*      value={value}*/}
      {/*      onChange={handleChange}*/}
      {/*      aria-label="basic tabs example"*/}
      {/*    >*/}
      {/*      <Tab label="Item One" {...a11yProps(0)} />*/}
      {/*      <Tab label="Item Two" {...a11yProps(1)} />*/}
      {/*      <Tab label="Item Three" {...a11yProps(2)} />*/}
      {/*    </Tabs>*/}
      {/*  </Box>*/}
      {/*  <CustomTabPanel value={value} index={0}>*/}
      {/*    {t('alerts')}*/}
      {/*  </CustomTabPanel>*/}
      {/*  <CustomTabPanel value={value} index={1}>*/}
      {/*    {t('notifications')}*/}
      {/*  </CustomTabPanel>*/}
    </>
  );
}
