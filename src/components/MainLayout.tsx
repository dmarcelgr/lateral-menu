import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export function MainLayout() {
  return (
    <Box className="w-full pl-20">
      <Outlet />
    </Box>
  );
}
