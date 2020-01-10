import React from "react";
import { MdAdd } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Button, Col, Row } from "react-bootstrap";

const TaskForm = ({ todo, handleTodo, handleSubmit, edit }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={6}>
            Add Your To Do's
          </Form.Label>
          <Col sm={12}>
            <Form.Control
              className="form-control"
              type="text"
              input="text"
              placeholder="e.g Go grocery"
              value={todo}
              onChange={handleTodo}
              id="todo"
              name="todo"
            />
          </Col>

          <Col sm={12}>
            <Button
              type="submit"
              className={
                edit
                  ? "btn-success btn-btn-block mt-3"
                  : "btn-primary btn-btn-block mt-3"
              }
            >
              {edit ? "edit" : ""}

              <MdAdd className="btn-icon" />
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default TaskForm;
