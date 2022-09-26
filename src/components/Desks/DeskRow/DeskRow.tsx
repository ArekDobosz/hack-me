import { useContext, useState } from 'react';
import { DeskDispatchContext } from '../../../provider/DesksProvider';
import { Desk } from '../../../provider/types';

interface Props {
  desk: Desk;
}

export const DeskRow = ({ desk }: Props): JSX.Element => {
  const { editDesk, deleteDesk } = useContext(DeskDispatchContext);
  const [deskName, setDeskName] = useState<string>(desk.name);

  const handleEdit = () => editDesk({ ...desk, name: deskName });
  const handleDelete = () => deleteDesk(desk);

  return (
    <>
      <td>
        <input
          name="deskName"
          value={deskName}
          onChange={(e) => setDeskName(e.target.value)}
          placeholder="Desk name"
        />
      </td>
      <td>
        <button onClick={handleEdit}>Edit</button>{' '}
        <button onClick={handleDelete}>Delete</button>
      </td>
    </>
  );
};
