/*this will log the save task button in the console and make it easy to find */
var formEl = document.querySelector("#task-form");
var tasksToDoE1 =document.querySelector("#tasks-to-do");

var createTaskHandler = function(event){
    event.preventDefault();

    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItemE1);
};
formEl.addEventListener("submit", createTaskHandler); //formE1 allows us to save varables to the formE1