const BASE_URL = "http://localhost:3000/tasks";

// GET
export const getTasks = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

// POST
export const addTask = async (task) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  return await res.json();
};

// DELETE
export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};

// UPDATE
export const updateTask = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return await res.json();
};