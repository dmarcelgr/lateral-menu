import * as React from 'react';
import { SyntheticEvent, useState } from 'react';
import NotificationsComponent from './notifications/NotificationsComponent.tsx';
import AlertsComponent from './alerts/AlertsComponent.tsx';
import { AppBar, Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function Notifications() {
  const tabData = [
    { index: 1, value: 'alerts', content: <AlertsComponent /> },
    { index: 2, value: 'notifications', content: <NotificationsComponent /> },
  ];
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/*<TabsComponent tabsData={tabData} />*/}
      {/*<AlertsComponent />*/}
      {/*<NotificationsComponent />*/}

      <Box>
        <Box>
          <AppBar position="static">
            <Tabs
              bgcolor="primary"
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Alerts" {...a11yProps(0)} />
              <Tab label="Notifications" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AlertsComponent />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NotificationsComponent />
        </CustomTabPanel>
      </Box>
    </>
  );
}
