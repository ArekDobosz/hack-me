import { FormEvent, useContext, useState } from 'react';
import {
  EmployeesContext,
  EmployeesDispatchContext,
} from '../../provider/EmployeesProvider';
import { EmployeeRow } from './EmployeeRow/EmployeeRow';

export const Employees = (): JSX.Element => {
  const employees = useContext(EmployeesContext);
  const { addNewEmployee } = useContext(EmployeesDispatchContext);

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!email.length || !name.length) return;

    addNewEmployee({ email, name, preferredDesk: [] });
    setEmail('');
    setName('');
  };

  return (
    <div className="desksContainer">
      <form onSubmit={handleFormSubmit}>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <button type="submit">Add Employee</button>
      </form>
      <div className="desksTable">
        <table>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.email}>
                <EmployeeRow employee={employee} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
