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

  const maxPage = Math.ceil(total / filters.pageSize) - 1;

  const [page, setPage] = useState(Math.min(filters.page || 0, maxPage));

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
      rowsPerPage={filters.pageSize || 10}
      onRowsPerPageChange={(event) =>
        onPaginationChange(event, {
          page: 0,
          pageSize: parseInt(event.target.value, 10),
        })
      }
    />
  );
}
