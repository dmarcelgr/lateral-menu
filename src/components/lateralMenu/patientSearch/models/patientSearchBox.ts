import * as React from 'react';

export interface EwpPatientSearchBox {
  searchBox: string;
  dailyReview: boolean;
  section?: string;
  departmentInsertions?: [];
}

export type FilterChangeHandler = (
  event: React.SyntheticEvent,
  newFilters: EwpPatientSearchBox | string
) => void;
