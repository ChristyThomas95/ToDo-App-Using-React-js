import React from 'react'
import "./Todo.css"

const ListTask = ({task, index, removeTask}) => {
  return (
    <>
        <div className="task-list">
            {task.title}
            <button onClick={()=> {removeTask(index)}} className="delete-btn">Delete</button>   
        </div>
    </>
  );
};

export default ListTask