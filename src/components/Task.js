import React from 'react';
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onClick={() => onToggle(task.id)}>
      <h3 >{task.text} <FaTimes style={{marginLeft:'90%', color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
      <p>{task.day}</p>
    </div>
  ) 
};

export default Task;
