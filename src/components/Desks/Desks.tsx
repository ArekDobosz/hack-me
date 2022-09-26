import { FormEvent, useContext, useState } from 'react';
import { DeskContext, DeskDispatchContext } from '../../provider/DesksProvider';
import { DeskRow } from './DeskRow';

import '../../App.css';

export const Desks = (): JSX.Element => {
  const desks = useContext(DeskContext);
  const { addNewDesk } = useContext(DeskDispatchContext);

  const [deskName, setDeskName] = useState<string>('');

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!deskName.length) return;

    addNewDesk(deskName);
    setDeskName('');
  };

  return (
    <div className="desksContainer">
      <form onSubmit={handleFormSubmit}>
        <input
          name="deskName"
          value={deskName}
          onChange={(e) => setDeskName(e.target.value)}
          placeholder="Desk name"
        />
        <button type="submit">Add desk</button>
      </form>
      <div className="desksTable">
        <table>
          <tbody>
            {desks.map((desk) => (
              <tr key={desk.id}>
                <DeskRow desk={desk} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
