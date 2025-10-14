import { useState } from "react";

function AddTask({onAddTaskSubmit}) {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   return (
   <div className="space-y-4 p-6 gap-2 my-4 bg-slate-400 rounded-md shadow-md flex flex-col">
    <input type="text" placeholder="Task Title" className="w-full p-2 rounded-md" value={title} onChange={(event) => setTitle(event.target.value) } />

    <input type="text" placeholder="Task Description" className="w-full p-2 rounded-md" value={description} onChange={(event) => setDescription(event.target.value)} />

    <button onClick={() => {
        if(!title.trim() || !description.trim()) {
            alert("Please fill in both fields");
            return;
        }
        onAddTaskSubmit(title,description)
        setTitle("")
        setDescription("")
        }} className="bg-green-400 text-white font-bold p-2 rounded-md w-full">Add Task</button>
    </div>
   )
}

export default AddTask