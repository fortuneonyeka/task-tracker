import Task from "./Task";
const Tasks = ({tasks, onDelete, onToggle}) => {
    
  return (
    <div>
      {tasks.map( (task) => <Task key={task.id} task={task} style={{listStyle:"none", fontSize:"20px",fontWeight:"bolder"}} onDelete={onDelete} onToggle={onToggle}></Task>)}
    </div>
  )
}

export default Tasks;
