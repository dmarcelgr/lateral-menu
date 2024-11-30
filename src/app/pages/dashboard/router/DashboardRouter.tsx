import { Route, Routes } from 'react-router-dom';
import { MainDashboard } from '../index.tsx';

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />}>
        <Route path="patients/*" element={<MainDashboard />} />
        <Route index element={<MainDashboard />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
