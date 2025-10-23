const tasks = document.querySelector(".tasks-ul");
const tasksCheck = document.querySelectorAll(".checkbox-task");

tasksCheck.forEach((task) => {
  task.addEventListener("click", function () {
    task.parentElement.classList.toggle("checked");
  });
});

const addTaskBtn = document.querySelector(".add-task-btn");
const modalOverLay = document.querySelector(".modal-overlay");

addTaskBtn.addEventListener("click", function (e) {
  modalOverLay.style.display = "block";
});

const cancelBtn = document
  .querySelector(".cancel-btn")
  .addEventListener("click", () => {
    modalOverLay.style.display = "none";
  });

modalOverLay.addEventListener("click", (e) => {
  if (e.target === modalOverLay) {
    modalOverLay.style.display = "none";
  }
});
