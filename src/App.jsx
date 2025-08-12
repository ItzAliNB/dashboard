import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Users } from './components/Users/User';
import { Admin } from './components/Admins/Admin';
import { ServerStatus } from './components/ServerStatus/ServerStatus';

function App() {
  return (
    <Router>
      <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[64px_1fr] lg:grid-cols-[220px_1fr] gap-4 p-4 bg-white dark:bg-neutral-800 min-h-screen">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/admins" element={<Admin />} />
          <Route path="/server" element={<ServerStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
