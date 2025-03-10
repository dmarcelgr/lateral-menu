export interface EwpProviderDepartments {
  message?: ProviderDepartmentsResponse[];
}

export interface ProviderDepartmentsResponse {
  id: number;
  departmentid: number;
  patientdepartmentname: string;
  providergroupid: number;
  providergroupname: string;
  practice: number;
}
