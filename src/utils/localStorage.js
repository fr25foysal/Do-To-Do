const savedTasks = ()=>{
    let tasks = {}
    const lsTasks = localStorage.getItem('tasks')
    if (lsTasks) {
        tasks = JSON.parse(lsTasks)
    }
    return tasks;
}

export const addToLs =(task)=>{
    let prevTasks = savedTasks();

    let tasks = Object.values(prevTasks)
    tasks.push(task)

    console.log(tasks);

    // Save the updated tasks back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}