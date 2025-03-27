import { ChangeEvent, MouseEvent } from 'react';

export interface PaginationProps {
  onPaginationChange: (
    event:
      | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | MouseEvent<HTMLButtonElement>
      | null,
    pageFilters: PaginationFilters
  ) => void;
  filters: PaginationFilters;
  total: number;
}

export interface PaginationFilters {
  page: number;
  pageSize: number;
}
