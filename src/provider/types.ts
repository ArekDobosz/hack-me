export interface Desk {
  id: string;
  name: string;
}

export interface Employee {
  name: string;
  email: string;
  preferredDesk: Desk[];
}

export interface DeskDispatchContextInterface {
  addNewDesk: (deskName: string) => void;
  editDesk: (desk: Desk) => void;
  deleteDesk: (desk: Desk) => void;
}

export interface EmployeeDispatchContextInterface {
  addNewEmployee: (employee: Employee) => void;
  editEmployee: (employee: Employee) => void;
  deleteEmployee: (employee: Employee) => void;
}
