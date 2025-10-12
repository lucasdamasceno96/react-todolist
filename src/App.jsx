import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Doctors Appointment',
    description: 'Need to go to the doctors at 5pm',
    isCompleted: false
  },
 ])

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task})
      setTasks(newTasks)
    }
  
  function onDeleteTaskClick(taskId){
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      description: description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }
    
  return(
 <div className="w-screen h-screen bg-slate-700 flex justify-center p-6">
  <div className="w-[500px] space-y-4"> 
  <h1 className="text-3xl text-slate-100 font-bold text-center"> Task Management </h1>
  <AddTask  onAddTaskSubmit={onAddTaskSubmit} />
  <Tasks  tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
  </div>
 </div>
  )
}

export default App
