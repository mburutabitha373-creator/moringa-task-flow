import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import CreateTask from "./pages/CreateTask";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>

        {/* Default route → Login */}
        <Route path="/" element={<LoginPage />} />

        {/* App routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/profile" element={<Profile />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;