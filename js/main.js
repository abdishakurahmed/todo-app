const tasks = document.querySelector(".tasks-ul");
const tasksCheck = document.querySelectorAll(".checkbox-task");

tasksCheck.forEach((task) => {
  task.addEventListener("click", function () {
    task.parentElement.classList.toggle("checked");
  });
});
