import { SyntheticEvent, useState } from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import {
  TabPanelProps,
  TabsComponentProps,
  TabsData,
} from './models/TabsComponent.ts';

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function TabIndex(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function EwpTabsComponent({ tabsData }: TabsComponentProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box bgcolor="secondary.light">
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
          {tabsData.map((item: TabsData) => (
            <Tab
              key={item.index}
              label={item.label}
              {...TabIndex(item.index)}
            />
          ))}
        </Tabs>
      </AppBar>
      {tabsData.map((item: TabsData) => (
        <CustomTabPanel key={item.index} value={value} index={item.index}>
          {item.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
