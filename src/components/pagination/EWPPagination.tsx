import * as React from 'react';
import { useState } from 'react';
import { TablePagination } from '@mui/material';
import { PaginationProps } from './models/paginationProps.ts';

export default function EWPPagination({
  onPaginationChange,
  filters,
  total,
}: PaginationProps) {
  const maxPage = Math.ceil(total / filters.page) - 1;
  const [page, setPage] = useState(filters.page);
  const [rowsPerPage, setRowsPerPage] = useState(filters.pageSize);

  return (
    <TablePagination
      component="div"
      count={total}
      page={page}
      onPageChange={(event, newPage: number) => {
        if (newPage < maxPage) {
          setPage(newPage);
          onPaginationChange(event, { page: newPage });
        }
      }}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={(event) => {
        setPage(1);
        setRowsPerPage(parseInt(event.target.value, 10));
        onPaginationChange(event, {
          page: 1,
          pageSize: parseInt(event.target.value, 10),
        });
      }}
    />
  );
}
