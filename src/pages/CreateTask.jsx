import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTask } from "../services/api";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !deadline) {
      alert("Fill all fields");
      return;
    }

    try {
      setLoading(true);

      await addTask({
        title,
        description,
        deadline,
        status: "pending",
      });

      alert("Task added successfully ✅");

      navigate("/tasks");

    } catch (error) {
      console.error(error);
      alert("Failed to add task ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Create Task</h1>

      <div className="bg-white p-6 rounded-xl shadow mt-4 max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="w-full border p-3 rounded"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full border p-3 rounded"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="date"
            className="w-full border p-3 rounded"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Task"}
          </button>

        </form>
      </div>
    </div>
  );
}