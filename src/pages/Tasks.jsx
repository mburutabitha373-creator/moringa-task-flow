import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/api";
import Navbar from "../components/Navbar";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const remove = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="flex">
      <Navbar />

      <div className="p-6 flex-1 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>

        {tasks.map(task => (
          <div key={task.id} className="bg-white p-4 mb-3 rounded shadow flex justify-between">
            <div>
              <h2 className="font-bold">{task.title}</h2>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">{task.deadline}</p>
            </div>

            <button
              onClick={() => remove(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}