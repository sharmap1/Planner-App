import React from "react";
import Item from "../TaskItem";
import { MdDelete } from "react-icons/md";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

const TaskList = ({ tasks, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Col sm={10}>
                {/* <Form.Control /> */}
                {/* <ul className="List"> */}
                {/* <ul> */}
                {tasks.map((task, index) => {
                  return (
                    <Item
                      key={task.id}
                      task={task}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  );
                })}
                {tasks.length > 0 && (
                  <>
                    <Button variant="danger" onClick={clearItems}>
                      Clear task
                      <MdDelete className="btn-icon" />
                    </Button>
                  </>
                )}

                {/* </ul> */}
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TaskList;
