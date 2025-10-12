function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  return (
    <ul className="flex flex-col p-6 gap-2 my-4 bg-slate-400 rounded-md shadow-md">
      {tasks.map((task, index) => (
        <li key={task.id} className="flex gap-2">
        <button onClick={() => onTaskClick(task.id)} className={`bg-slate-100 text-left w-full text-purple-600 font-bold p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}>  {task.title} </button>
        <button className="bg-blue-400 text-left text-white px-2 py-1 rounded-md float-right">Details</button>
           <button className="bg-red-400 text-left text-white px-2 py-1 rounded-md float-right" onClick={() => onDeleteTaskClick(task.id) }  >Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
