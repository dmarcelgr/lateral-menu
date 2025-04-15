export interface ProviderDepartmentsProps {
  data: ProviderDepartmentsApi;
}

export interface ProviderDepartmentsApi {
  departmentid: number | string;
  id: number;
  patientdepartmentname: string;
  practice: number;
  providergroupid: number | string;
  providergroupname: string;
}
