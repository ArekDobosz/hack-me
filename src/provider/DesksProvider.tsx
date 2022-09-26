import { createContext, ReactNode, useCallback, useState } from 'react';
import { Desk, DeskDispatchContextInterface } from './types';
import { v4 as uuidv4 } from 'uuid';

const DeskContext = createContext([] as Desk[]);
const DeskDispatchContext = createContext({} as DeskDispatchContextInterface);

const DesksProvider = ({ children }: { children: ReactNode }) => {
  const [desks, setDesks] = useState<Desk[]>([]);

  const addNewDesk = useCallback((deskName: string) => {
    const id = uuidv4();
    setDesks((prevDesks) => prevDesks.concat([{ id, name: deskName }]));
  }, []);

  const editDesk = useCallback((desk: Desk) => {
    setDesks((prevDesks) =>
      prevDesks.map((existingDesk) => {
        if (existingDesk.id === desk.id) {
          return desk;
        }
        return existingDesk;
      })
    );
  }, []);

  const deleteDesk = useCallback((desk: Desk) => {
    setDesks((prevDesks) => prevDesks.filter(({ id }) => desk.id !== id));
  }, []);

  return (
    <DeskContext.Provider value={desks}>
      <DeskDispatchContext.Provider
        value={{ addNewDesk, editDesk, deleteDesk }}>
        {children}
      </DeskDispatchContext.Provider>
    </DeskContext.Provider>
  );
};

export { DesksProvider, DeskContext, DeskDispatchContext };
