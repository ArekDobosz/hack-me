import './App.css';
import { Desks } from './components/Desks';
import { Employees } from './components/Employees';
import { DesksProvider } from './provider/DesksProvider';
import { EmployeesProvider } from './provider/EmployeesProvider';

function App() {
  return (
    <div>
      <DesksProvider>
        <EmployeesProvider>
          <Desks />
          <Employees />
        </EmployeesProvider>
      </DesksProvider>
    </div>
  );
}

export default App;
