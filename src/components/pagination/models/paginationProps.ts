import { ChangeEvent, MouseEvent } from 'react';

export interface PaginationProps {
  onPaginationChange: (
    event:
      | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | MouseEvent<HTMLButtonElement>
      | null,
    p: { page?: number; pageSize?: number }
  ) => void;
  filters: {
    page: number;
    pageSize: number;
  };
  total: number;
}
