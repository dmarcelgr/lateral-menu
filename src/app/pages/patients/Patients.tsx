import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export function Patients() {
  return (
    <Box className="bg-sky-500/100">
      <h1>Hello from patients page!</h1>
      <Outlet />
    </Box>
  );
}
