const getAllTask = (req, res) => {
  res.send("completed the setup of controller");
};
const postTask = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({id:req.params.id})
};
const updateTask = (req, res) => {
  res.send("put task set up is completed");
};
const deleteTask = (req, res) => {
  res.send("delete task set up is completed");
};

module.exports = {
     getAllTask, 
     postTask,
     getTask,
     updateTask,
     deleteTask
 };
