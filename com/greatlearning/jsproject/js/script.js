function onAddTask() {
    var taskToAdd = document.getElementById("task_input").value;

    if (taskToAdd.trim() === "") {
        alert("Please add task, empty value is not accepted")
        return;
    }

    var contentSection = document.getElementById("content");

    var taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task");

    contentSection.appendChild(taskDiv);
    addTask(taskDiv, taskToAdd);
}

function addTask(taskDiv, taskToAdd) {

    var taskPara = document.createElement("div");
    taskPara.setAttribute("class", "addedTask");

    var editTask = document.createElement("input");
    editTask.setAttribute("type", "button");
    editTask.setAttribute("class", "editTask");
    editTask.setAttribute("value", "Edit");
    editTask.addEventListener("click", function (event) {
        onEditTask(event);
    })

    var deleteTask = document.createElement("input");
    deleteTask.setAttribute("type", "button");
    deleteTask.setAttribute("class", "deleteTask");
    deleteTask.setAttribute("value", "Delete");
    deleteTask.addEventListener("click", function (event) {
        event.target.parentElement.remove();
    })

    taskPara.innerText = taskToAdd;
    taskDiv.appendChild(taskPara);
    taskDiv.appendChild(editTask);
    taskDiv.appendChild(deleteTask);
}

function onEditTask(event) {
    var currentValue = event.target.previousSibling.innerText;
    var parentElement = event.target.parentElement;
    parentElement.innerHTML = "";

    var editTaskInput = document.createElement("input");
    editTaskInput.setAttribute("class", "editTaskInput")
    editTaskInput.value = currentValue;

    var saveTask = document.createElement("input");
    saveTask.setAttribute("type", "button");
    saveTask.setAttribute("class", "saveTask");
    saveTask.setAttribute("value", "Save");
    saveTask.addEventListener("click", function () {

        var newValue = editTaskInput.value;
        if (newValue.trim() === "") {
            alert("Please add task, empty value is not accepted")
            return;
        }
        parentElement.innerHTML = "";
        addTask(parentElement, newValue)
    })

    var cancelEdit = document.createElement("input");
    cancelEdit.setAttribute("type", "button");
    cancelEdit.setAttribute("class", "cancelEdit");
    cancelEdit.setAttribute("value", "Cancel");
    cancelEdit.addEventListener("click", function () {
        parentElement.innerHTML = "";
        addTask(parentElement, currentValue)
    })

    parentElement.appendChild(editTaskInput);
    parentElement.appendChild(saveTask);
    parentElement.appendChild(cancelEdit);
}
