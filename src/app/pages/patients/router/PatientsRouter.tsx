import { Route, Routes } from 'react-router-dom';
import { Patients, PatientsList } from '../index.ts';

export const PatientsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Patients />}>
        <Route path="list" element={<PatientsList />} />
        <Route index element={<Patients />} />
      </Route>
    </Routes>
  );
};
