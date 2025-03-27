import { ReactNode, SyntheticEvent, useState } from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';

interface TabPanelProps {
  children?: ReactNode;
  dir?: string;
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

interface TabsData {
  index: number;
  label: string;
  content: ReactNode;
}

interface TabsComponentProps {
  tabsData: TabsData[];
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
              {...a11yProps(item.index)}
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
