import { ReactNode } from 'react';

export interface TabPanelProps {
  children?: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export interface TabsData {
  index: number;
  label: string;
  content: ReactNode;
}

export interface TabsComponentProps {
  tabsData: TabsData[];
}
