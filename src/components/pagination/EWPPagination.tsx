import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useGetAlertsQuery } from '../../features/notifications/redux/api/notificationsApi.ts';
import { Alert } from '../../features/notifications/models';

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { data, error, isLoading }: Alert = useGetAlertsQuery({
    // page: page + 1,
    // pageSize: rowsPerPage,
  });
  // const { data, error, isLoading }: Alert = useGetAlertsQuery({
  //   page: page + 1,
  //   pageSize: rowsPerPage,
  // });

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log('Data at pagination ', data);

  return (
    <div>
      <h2>Lista de datos</h2>
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error al cargar los datos</p>}

      <ul>{data?.data?.map((item) => <li key={item.id}>{item.name}</li>)}</ul>

      <TablePagination
        component="div"
        count={data?.total || 0}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
