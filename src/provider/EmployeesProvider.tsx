import { createContext, ReactNode, useCallback, useState } from 'react';
import { EmployeeDispatchContextInterface, Employee } from './types';

const EmployeesContext = createContext([] as Employee[]);
const EmployeesDispatchContext = createContext(
  {} as EmployeeDispatchContextInterface
);

const EmployeesProvider = ({ children }: { children: ReactNode }) => {
  const [employess, setEmployess] = useState<Employee[]>([]);

  const addNewEmployee = useCallback((employee: Employee) => {
    setEmployess((prevEmployees) => prevEmployees.concat([employee]));
  }, []);

  const editEmployee = useCallback((employee: Employee) => {
    setEmployess((prevEmployees) =>
      prevEmployees.map((existingEmployee) => {
        if (existingEmployee.email === employee.email) {
          return employee;
        }
        return existingEmployee;
      })
    );
  }, []);

  const deleteEmployee = useCallback((employee: Employee) => {
    setEmployess((prevEmployees) =>
      prevEmployees.filter(({ email }) => employee.email !== email)
    );
  }, []);

  return (
    <EmployeesContext.Provider value={employess}>
      <EmployeesDispatchContext.Provider
        value={{ addNewEmployee, editEmployee, deleteEmployee }}>
        {children}
      </EmployeesDispatchContext.Provider>
    </EmployeesContext.Provider>
  );
};

export { EmployeesProvider, EmployeesContext, EmployeesDispatchContext };
