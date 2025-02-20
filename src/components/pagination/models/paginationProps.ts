import { ChangeEvent, MouseEvent } from 'react';

export interface PaginationProps {
  onPaginationChange: (
    event:
      | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | MouseEvent<HTMLButtonElement>
      | null,
    p: { page?: number; pageSize?: number }
  ) => void;
  initialPage: number;
  initialPageSize: number;
  total: number;
}
