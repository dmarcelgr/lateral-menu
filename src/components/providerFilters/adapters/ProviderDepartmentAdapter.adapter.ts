// Api for Patient Search Section at Lateral Menu:
//esvyda-interoperability-search-patient-departments

import { ProviderDepartmentsApi, ProviderDepartmentsProps } from '../dto';
import { EwpProviderDepartments } from '../models';

export default function ProviderDepartmentAdapter(
  data: ProviderDepartmentsProps
): EwpProviderDepartments {
  const { message: departments } = data;
  return {
    departments: departments.map((department: ProviderDepartmentsApi) => ({
      id: department.id,
      departmentId: department.departmentid,
      departmentName: department.patientdepartmentname,
      departmentPractice: department.practice,
      providerGroupId: department.providergroupid,
      providerGroupName: department.providergroupname,
    })),
  };
}
