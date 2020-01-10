import React from "react";
import Item from "../TaskItem";
// import { MdDelete } from "react-icons/md";
import { Form, Button, Col, Row } from "react-bootstrap";

const TaskList = ({
  tasks,
  handleDelete,
  handleEdit,
  handleComplete,
  clearItems
}) => {
  return (
    <>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Col sm={12}>
          {tasks.map((task, index) => {
            return (
              <Item
                key={task.id}
                task={task}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleComplete={handleComplete}
              />
            );
          })}
          {tasks.length > 0 && (
            <>
              <Button
                variant="danger"
                className="delete-all"
                onClick={clearItems}
              >
                Clear all tasks
                {/* <MdDelete className="btn-icon" /> */}
              </Button>
            </>
          )}
        </Col>
      </Form.Group>
    </>
  );
};
export default TaskList;
