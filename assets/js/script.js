/*this will log the save task button in the console and make it easy to find */
var formEl = document.querySelector("#task-form");
var tasksToDoE1 =document.querySelector("#tasks-to-do");

var createTaskHandler = function(event){
    event.preventDefault();

var taskNameInput = document.querySelector("input[name='task-name']").value;
var taskTypeInput = document.querySelector("select[name='task-type']").value;
console.log(taskTypeInput);

// create list item
var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

// create div to hold task info and add to list item
var taskInfoE1 = document.createElement("div");

// give it a class name
taskInfoE1.className = "task-info";

// add HTML content to div
taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

listItemE1.appendChild(taskInfoE1)

//add entire list item to lsit
tasksToDoE1.appendChild(listItemE1);
console.dir(listItemE1);
};

formEl.addEventListener("submit", createTaskHandler); //formE1 allows us to save varables to the formE1