import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      day: "Febuary 5th at 10:20Am",
      reminder: true
    },
    {
      id: 2,
      text: "Gym",
      day: "Febuary 10th at 12:30Pm",
      reminder: true
    },
    {
      id: 3,
      text: "Swmming",
      day: "Febuary 20th at 4:20Pm",
      reminder: false
    },
  ])


  //Add Task
    const handleAddTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTasks = {id , ...task}
      setTasks([...tasks, newTasks])
    }

  //Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !==id))
  }

  //Toggle Reminder
const toggleReminder = (id) => {
 setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header  title={"Task Tracker"}/>
     <AddTask onAdd={handleAddTask}/>
    { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
