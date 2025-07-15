const inputBox = document.getElementById("taskInput");
const addedTaskBtn = document.getElementById("addTask");
const todoList = document.getElementById("todoList");
const taskContainer = document.getElementById("task-container");    

taskContainer.style.display = "none";
addedTaskBtn.addEventListener("click", function() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please enter a task");
        return;
    }

taskContainer.style.display ="block";
const li = document.createElement("li");
li.textContent = task;
 li.style.display = "flex";
li.style.justifyContent = "space-between";
li.style.alignItems = "center";

const deleteBtn = document.createElement("button");
deleteBtn.textContent ="X";
deleteBtn.className = "delete-btn";



deleteBtn.style.backgroundColor ="red";
deleteBtn.style.color = "white";
deleteBtn.style.border = "none";
deleteBtn.style.borderRadius = "50%";
deleteBtn.style.cursor = "pointer";
deleteBtn.style.padding = "0 5px";  
deleteBtn.style.position = "relative";
deleteBtn.style.fontSize = "16px";
deleteBtn.style.marginLeft = "10vh";
deleteBtn.style.right = "10px";
deleteBtn.style.top = "40%";     

deleteBtn.addEventListener("click",function(){
    li.remove();
});

li.appendChild(deleteBtn);

todoList.appendChild(li);
inputBox.value ="";

});