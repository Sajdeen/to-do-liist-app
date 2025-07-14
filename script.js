
const inputBox = document.getElementById("taskInput");
const button = document.getElementById("addTask");
const todoList = document.getElementById("todoList");

button.addEventListener("click", () => {
    const inputText = inputBox.value.trim();

    if (inputText !== "") {
        const li = document.createElement("li");
        li.textContent = inputText;

        // Toggle completed status on click
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });


        
        // Create a remove button (X)
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.className = "remove-btn";

        // Remove task on clicking X
        removeBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent triggering li click
            li.remove();
        });

        li.appendChild(removeBtn);
        todoList.appendChild(li);
        inputBox.value = ""; // Clear input
    } else {
        alert("Please enter a task!");
    }
});
