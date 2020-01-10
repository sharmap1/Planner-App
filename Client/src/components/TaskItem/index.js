import React from "react";

import { MdEdit, MdDelete, MdCheck } from "react-icons/md";

const TaskItem = ({ task, handleDelete, handleEdit, handleComplete }) => {
  console.log("TaskItem: ", task);
  const { id, todo } = task;
  return (
  
    <li className="item">
      <div className="info">
        <span className="task">{todo}</span>
      </div>
      <div>
        <span
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(id)}
        >
          <MdEdit />
        </span>
        <span
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(id)}
        >
          <MdDelete />
        </span>
        <span
          className="check-btn"
          aria-label="check-box"
          onClick={() => handleComplete(id)}
        >
          <MdCheck />
        </span>
      </div>
    </li>
  );
};

export default TaskItem;
