const toDo = document.querySelector(".to-do");
const taskInput = document.querySelector("#input-task");
const taskSubmit = document.querySelector("#add-input");

// adiciona a task ao site

taskSubmit.addEventListener("click", () => {
  const task = taskInput.value;
  if (!task) {
    return;
  }
  addTask(task);
  taskInput.value = "";
});

// função de criar task

const addTask = (task) => {
  const createElementWithClass = (tag, className) => {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  };

  const createButton = (value) => {
    const button = document.createElement("input");
    button.type = "button";
    button.value = value;
    return button;
  };

  const taskElement = createElementWithClass("div", "activitie");
  const divTextArea = createElementWithClass("div", "text-area");
  const divActionButtons = createElementWithClass("div", "action-buttons");

  const paragraph = document.createElement("p");
  paragraph.textContent = task;

  divTextArea.appendChild(paragraph);

  ["V", "E", "X"].forEach((value) => {
    const button = createButton(value);
    divActionButtons.appendChild(button);
  });

  taskElement.appendChild(divTextArea);
  taskElement.appendChild(divActionButtons);

  document.querySelector(".to-do").appendChild(taskElement);
};
