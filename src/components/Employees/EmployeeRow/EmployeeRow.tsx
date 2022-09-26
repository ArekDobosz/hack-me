import { ChangeEvent, useContext, useState } from 'react';
import { DeskContext } from '../../../provider/DesksProvider';
import { EmployeesDispatchContext } from '../../../provider/EmployeesProvider';
import { Desk, Employee } from '../../../provider/types';

interface Props {
  employee: Employee;
}

export const EmployeeRow = ({ employee }: Props): JSX.Element => {
  const desks = useContext(DeskContext);
  const { editEmployee, deleteEmployee } = useContext(EmployeesDispatchContext);

  const [email, setEmail] = useState<string>(employee.email);
  const [name, setName] = useState<string>(employee.name);
  const [preferredDesk, setPrefferedDesk] = useState<Desk[]>([]);

  const handlePrefferedDeskChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const desk = desks.find((desk) => desk.id === e.target.value);
    if (desk) {
      setPrefferedDesk((prevPrefferedDesks) =>
        prevPrefferedDesks.concat([desk])
      );
    }
  };

  const handleEdit = () => editEmployee({ ...employee, name, email });
  const handleDelete = () => deleteEmployee(employee);

  return (
    <>
      <td>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </td>
      <td>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </td>
      {desks.length > 0 && (
        <select
          name="preferredDesk"
          value={preferredDesk[0].id}
          onChange={handlePrefferedDeskChange}>
          <option value="">none</option>
          {desks.map(({ id, name }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
      )}
      <td>
        <button onClick={handleEdit}>Edit</button>{' '}
        <button onClick={handleDelete}>Delete</button>
      </td>
    </>
  );
};
