import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Breadcrumbs from "./components/Breadcrumbs";

function Dashboard() {
  return <h1>Welcome to Dashboard</h1>;
}

function Crops() {
  return <h1>Crops Page</h1>;
}

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <div className="p-4">
            <Breadcrumbs />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/crops" element={<Crops />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
