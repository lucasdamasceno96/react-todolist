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
  {
    id: 2,
    title: 'Meeting at School',
    description: 'Meeting with the new client at school',
    isCompleted: true
  }])

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
    
  return(
 <div className="w-screen h-screen bg-slate-700 flex justify-center p-6">
  <div className="w-[500px]"> 
  <h1 className="text-3xl text-slate-100 font-bold text-center"> Task Management </h1>
  
  <Tasks  tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
  <AddTask />
  </div>
 </div>
  )
}

export default App
