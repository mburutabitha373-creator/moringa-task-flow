import { useState, useEffect } from "react";
import { getTasks } from "../services/api";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getTasks();

    const completed = data.filter(t => t.status === "completed").length;
    const pending = data.filter(t => t.status === "pending").length;

    setStats({
      total: data.length,
      completed,
      pending
    });
  };

  return (
    <div className="flex">
      <Navbar />

      <div className="p-6 flex-1 bg-gray-50">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded shadow">Total: {stats.total}</div>
          <div className="bg-white p-4 rounded shadow">Completed: {stats.completed}</div>
          <div className="bg-white p-4 rounded shadow">Pending: {stats.pending}</div>
        </div>
      </div>
    </div>
  );
}