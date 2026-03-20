let tasks = [];

const getTasks = (req, res) => {
  res.json(tasks);
};

const addTask = (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text
  };

  tasks.push(newTask);
  res.json(newTask);
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(task => task.id !== id);

  res.json({ message: "Task deleted" });
};

module.exports = { getTasks, addTask, deleteTask };