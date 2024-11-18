import { useState } from "react"

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    function addTask() {
        if(newTask.trim() !== ""){
           setTasks(prevTask => [...prevTask, newTask])
           setNewTask("") 
        }
        
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_,i)=> i!== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index>0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        if (index<tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    return(
        <div className="to-do-list">
            <h1>MY To-Do</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={(e)=>{setNewTask(e.target.value)}}/>

                <button className="add-button" onClick={addTask}>Add</button>

                <ol>
                    {tasks.map((task, index)=>{
                        return(
                            <li key={index}>
                            <span className="text">{task}</span>

                            <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>

                            <button className="move-button" onClick={()=>moveTaskUp(index)}>🔼</button>

                            <button className="move-button" onClick={()=>moveTaskDown(index)}>🔽</button>

                            </li>
                        ) 
                    })}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList