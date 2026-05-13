import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, CheckSquare, PlusCircle, User } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white shadow-md p-5 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800">
          MoringaTaskFlow
        </h1>
        <p className="text-sm text-gray-500">Task Manager</p>
      </div>

      <nav className="flex flex-col gap-3">
        <NavItem
          to="/dashboard"
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active={location.pathname === "/dashboard"}
        />

        <NavItem
          to="/tasks"
          icon={<CheckSquare size={18} />}
          label="Tasks"
          active={location.pathname === "/tasks"}
        />

        <NavItem
          to="/create"
          icon={<PlusCircle size={18} />}
          label="Create"
          active={location.pathname === "/create"}
        />

        <NavItem
          to="/profile"
          icon={<User size={18} />}
          label="Profile"
          active={location.pathname === "/profile"}
        />
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 p-3 rounded-lg ${
        active
          ? "bg-purple-100 text-purple-600"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}