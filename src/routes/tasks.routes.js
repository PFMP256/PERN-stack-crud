const { Router } = require("express");
const {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const {pool} = require("../db")

const router = Router();



// create a task
router.post("/tasks", createTask);

router.get("/tasks", getAllTasks);

router.get("/ping", async (req, res) => {
const result = await pool.query(`SELECT NOW()`)
res.send({
message: result.rows[0].now
})
});

router.get("/tasks/:id", getTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;
