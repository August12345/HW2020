
let tasks = [];


function renderEditor() {
    let inputEl = document.querySelector("#default-todo-panel .todo-editor > input");




    let addTask = () => {
        if (inputEl.value.length === 0) {
            return;
        }
        let newTask = {
            title: inputEl.value,
            done: false,

        };

        inputEl.value = "";

        tasks.push(newTask);

        console.log("tasks: ", tasks);

        renderTaskItems();

    };

    inputEl.onkeypress = (e) => {

        if (e.key === "Enter") {
            addTask();
        }
    };


    let addEl = document.querySelector("#default-todo-panel .todo-editor > button");
    addEl.onclick = (e) => {
        addTask();

    };
}