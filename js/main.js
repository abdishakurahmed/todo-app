const tasks = document.querySelector(".tasks-ul");
const taskscheck = document.querySelectorAll(".checkbox-task");

taskscheck.forEach((task) => {
  task.addEventListener("click", function () {
    task.parentElement.classList.toggle("checked");
  });
});
