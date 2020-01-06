import React from "react";

import { MdEdit, MdDelete, MdStar } from "react-icons/md";

const TaskItem = ({ task, handleDelete, handleEdit }) => {
  console.log("TaskItem: ", task);
  // const { id, charge, amount } = task;
  const { id, todo } = task;
  return (
    <li className="item">
      <div className="info">
        <span className="task">{todo}</span>
        {/* <span className="amount">$ {amount}</span> */}
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(id)}
        >
          <MdDelete />
        </button>
        <button
          className="star-btn"
          aria-label="star button"
          // onClick={() => handleStar(id)}
        >
          <MdStar />
        </button>
      </div>
    </li>
    
  );
};

export default TaskItem;
