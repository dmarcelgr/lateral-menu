// Api for Patient Search Section at Lateral Menu:
//esvyda-interoperability-search-patient-departments

import { ProviderDepartmentsProps } from '../dto';

export default function ProviderDepartmentAdapter(
  data: ProviderDepartmentsProps
) {
  const { message: departments } = data;
  return {
    departments: departments.map((department) => ({
      id: department.id,
      departmentId: department.departmentid,
      departmentName: department.patientdepartmentname,
      departmentPractice: department.practice,
      providerGroupId: department.providergroupid,
      providerGroupName: department.providergroupname,
    })),
  };
}
