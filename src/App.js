
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="bg-dark">
      <nav className="w-1/2 justify-between">
        <Link to="/invoices">Invoice</Link>
        <Link to="/expense">Expense</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
