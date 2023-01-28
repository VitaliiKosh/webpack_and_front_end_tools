import { onCreateTask } from "./createTask.js";
import { deleteTask } from "./tasksGateway.js";
import { onToggleTask } from "./updateTask.js";

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector(".create-task-btn");
  createBtnElem.addEventListener("click", onCreateTask);

  const todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", onToggleTask);

  const toDeleteElem = document.querySelector(".list");
  toDeleteElem.addEventListener("click", deleteTask);
};
