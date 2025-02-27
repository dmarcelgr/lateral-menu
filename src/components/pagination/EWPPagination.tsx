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
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <TablePagination
      component="div"
      count={total}
      page={page}
      onPageChange={(event, newPage: number) => {
        if (newPage <= maxPage) {
          setPage(newPage);
          onPaginationChange(event, { page: newPage });
        }
      }}
      rowsPerPage={rowsPerPage || filters.pageSize}
      onRowsPerPageChange={(event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
        onPaginationChange(event, {
          page: 0,
          pageSize: parseInt(event.target.value, 10),
        });
      }}
    />
  );
}
