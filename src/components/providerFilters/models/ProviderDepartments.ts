export interface EwpProviderDepartments {
  departments: ProviderDepartments[];
}

export interface ProviderDepartments {
  id: number;
  departmentId: number;
  departmentName: string;
  providerGroupId: number;
  providerGroupName: string;
  departmentPractice: number;
}
