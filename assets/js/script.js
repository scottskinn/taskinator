/*this will log the save task button in the console and make it easy to find */
var formEl = document.querySelector("#task-form");
var tasksToDoE1 =document.querySelector("#tasks-to-do");
var taskIdCounter = 0;

var taskFormHandler = function(event){
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);

// check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
}

formEl.reset();

// reset form fields for next task to be entered
document.querySelector("input[name='task-name']").value = "";
document.querySelector("select[name='task-type']").selectedIndex = 0;

//package up data as an object
var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
};

//send it as an argument to createTaskE1
createTaskE1(taskDataObj);

};

// holds the code that creates the new html element
var createTaskE1 = function(taskDataObj) {

// create list item
var listItemE1 = document.createElement("li");
listItemE1.className = "task-item";

// task id as a custom attribute
listItemE1.setAttribute("data-task-id", taskIdCounter);

// create div to hold task info and add to list item
var taskInfoE1 = document.createElement("div");
// give it a class name
taskInfoE1.className = "task-info";
// add HTML content to div
taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
listItemE1.appendChild(taskInfoE1);

// increase task counter for next unique id
taskIdCounter++;

var taskActionE1 = createTaskAction(taskIdCounter);
listItemE1.appendChild(taskActionE1);

tasksToDoE1.appendChild(listItemE1);

//add entire list item to lsit
tasksToDoE1.appendChild(listItemE1);
console.dir(listItemE1);

tasksToDoE1.addEventListener("submit", taskFormHandler);
};

var createTaskAction = function(taskId){
    var actionContainerE1 = document.createElement("div");
    actionContainerE1.className = "task-action";

    //create edit button
    var editButtonE1 = document.createElement("button");
    editButtonE1.textContent = "Edit";
    editButtonE1.className = "btn edit-btn";
    editButtonE1.setAttribute("date-task-id", taskId)

    actionContainerE1.appendChild(editButtonE1);

    //create delete button
    var deleteButtonE1 = document.createElement("button");
    deleteButtonE1.textContent = "Delete";
    deleteButtonE1.className = "btn edit-btn";
    deleteButtonE1.setAttribute("date-task-id", taskId)
    
    actionContainerE1.appendChild(deleteButtonE1);

    var statusSelectE1 = document.createElement("select");
    statusSelectE1.className = "select-status";
    statusSelectE1.setAttribute("name", "status-change");
    statusSelectE1.setAttribute("data-task--id", taskId);

    actionContainerE1.appendChild(statusSelectE1);

    var statusChoices = ["To Do", "In Progress", "Completed"];
        for (var i = 0; i < statusChoices.length; i++) {
            // create option element
            var statusOptionE1 = document.createElement("option");
            statusOptionE1.textContent = statusChoices[i];
            statusOptionE1.setAttribute("value", statusChoices[i]);

            statusSelectE1.appendChild(statusOptionE1);
        }

return actionContainerE1;
};

formEl.addEventListener("submit", taskFormHandler); //formE1 allows us to save varables to the formE1