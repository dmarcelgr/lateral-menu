import * as React from 'react';
import { useState } from 'react';
import { TablePagination } from '@mui/material';
import { PaginationProps } from './models/paginationProps.ts';

export default function EWPPagination({
  onPaginationChange,
  initialPage,
  initialPageSize,
  total,
}: PaginationProps) {
  const maxPage = Math.ceil(total / initialPageSize) - 1;

  const [page, setPage] = useState(Math.min(initialPage || 0, maxPage));
  const [rowsPerPage, setRowsPerPage] = useState(initialPageSize || 10);

  return (
    <TablePagination
      component="div"
      count={total}
      page={page}
      onPageChange={(event, newPage) => {
        if (newPage <= maxPage) {
          setPage(newPage);
          onPaginationChange(event, { page: newPage });
        }
      }}
      rowsPerPage={rowsPerPage || initialPageSize}
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
