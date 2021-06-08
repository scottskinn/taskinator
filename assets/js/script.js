/*this will log the save task button in the console and make it easy to find */
var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);
var tasksToDoE1 =document.querySelector("#tasks-to-do");

var createTaskHandler = function(){
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItemE1);
};
buttonEl.addEventListener("click", createTaskHandler);