import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  console.log('Tabpanel props', props);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{value}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  console.log('index at a11yprops, ', index);
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

interface TabsComponentProps {
  index: number;
  value: number;
  content: never;
}

export default function TabsComponent(tabsData: TabsComponentProps) {
  console.log('TabsComponent tabsData ', tabsData);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabsData.tabsData.forEach((item) => {
            console.log('Data at tabs component, ', item);
            <Tab label={item.value} {...a11yProps(item.index)} />;
          })}
        </Tabs>
      </AppBar>
      {tabsData.tabsData.forEach((item) => {
        <TabPanel value={item.value} index={item.index} dir={theme.direction}>
          {item}
        </TabPanel>;
      })}
    </Box>
  );
}
