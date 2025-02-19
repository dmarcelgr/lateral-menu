import * as React from 'react';
import { useState } from 'react';
import { TablePagination } from '@mui/material';

export default function EWPPagination({
  onPaginationChange,
  initialPage,
  initialPageSize,
  total,
}) {
  let filters = {
    page: initialPage,
    pageSize: initialPageSize,
  };
  const [page, setPage] = useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(initialPageSize);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newPageSize = parseInt(event.target.value, 10);
    setRowsPerPage(newPageSize);
    setPage(0);
    filters['pageSize'] = newPageSize;
    onPaginationChange(0, filters);
  };

  const handlePageChange = (
    event: React.MouseEvent | null,
    newPage: number
  ) => {
    setPage(newPage);
    filters['page'] = newPage;
    onPaginationChange(newPage, filters);
  };

  return (
    <TablePagination
      component="div"
      count={total}
      page={page}
      onPageChange={handlePageChange} // Ahora pasa el valor correcto
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
