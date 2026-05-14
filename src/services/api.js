const BASE_URL = "http://localhost:3000/tasks";

// GET TASKS
export const getTasks = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return await res.json();
};

// ADD TASK (FIXED)
export const addTask = async (task) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("ADD TASK ERROR:", data);
    throw new Error("Failed to add task");
  }

  return data;
};

// DELETE TASK
export const deleteTask = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete task");
};

// UPDATE TASK
export const updateTask = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update task");

  return await res.json();
};