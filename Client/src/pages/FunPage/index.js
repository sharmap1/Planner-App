import React, { useState, Component } from "react";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import Alert from "../../components/Alert";
import App from "../../App.css";
import uuid from "uuid/v4";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../../components/Nav";
import DayJoke from "../../components/DayJoke";
import DayQuote from "../../components/DayQuote";
import DayPic from "../../components/DayPic";
import DayWeather from "../../components/DayWeather";
import { Col, Row, Container, Card, Jumbotron } from "react-bootstrap";

const initialTasks = {
  January: [],
  February: [],
  March: []
};

function FunPage() {
  //***********state values************
  //all tasks, add task
  const [tasks, setTasks] = useState(initialTasks);
  //single task
  const [todo, setTodo] = useState("");
  //single amount
  // const [amount, setAmount] = useState("");
  //ALert
  const [alert, setAlert] = useState({ show: false });
  //Edit
  const [edit, setEdit] = useState(false);
  //edit item
  const [id, setId] = useState(0);
  //month
  const [month, setMonth] = useState("January");
  // setmonth function

  //***********functionality************

  //handle charge
  const handleTodo = e => {
    setTodo(e.target.value);
    // console.log(`charge: ${e.target.value}`);
  };

  //handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  //handle submit
  const handleSubmit = e => {
    e.preventDefault();
    // if (charge !== "" && amount > 0) {
    if (todo !== "") {
      let tempTasks = { ...tasks };
      if (edit) {
        tempTasks[month] = tasks[month].map(item => {
          return item.id === id ? { ...item, todo } : item;
          // return item.id === id ? { ...item, charge, amount } : item;
        });
        setTasks(tempTasks);
        setEdit(false);
        handleAlert({ type: "success", text: "Task Edited" });
      } else {
        // const singleTasks = { id: uuid(), charge: charge, amount: amount };
        const singleTasks = { id: uuid(), todo: todo };
        tempTasks[month] = [...tasks[month], singleTasks];
        setTasks(tempTasks);
        handleAlert({ type: "success", text: "Task Added" });
      }

      setTodo("");
      // setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "Task Can't Be Empty"
      });
    }
  };
  // clear all items
  const clearItems = () => {
    // console.log("cleared item");
    let tempTasks = { ...tasks };
    tempTasks[month] = [];
    setTasks(tempTasks);
    handleAlert({ type: "danger", text: "All Task-Deleted" });
  };

  // handle delete
  const handleDelete = id => {
    // console.log(`item deleted:  ${id}`);
    let tempTasks = { ...tasks };
    tempTasks[month] = tasks[month].filter(item => item.id !== id);
    // console.log(tempTasks);
    setTasks(tempTasks);
    handleAlert({ type: "danger", text: "Task-Deleted" });
  };

  // handle edit
  const handleEdit = id => {
    // console.log(`item edited:  ${id}`);
    let task = tasks[month].find(item => item.id === id);
    let { todo } = task;
    setTodo(todo);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      <main className="App">
        <Container fluid>
          <Row>
            <Col md="3">
              <DayQuote />
            </Col>
            <Col md="3">
              <DayJoke />
            </Col>
            <Col md="3">
              <DayPic />
            </Col>
            <Col md="3">
              <DayWeather />
            </Col>

            {/* <Col md="8">
              <Card.Body className="sub-card">
                <Card.Header as="h5">My TODO</Card.Header>
                <Card.Body>
                  <TaskForm
                    todo={todo}
                    handleTodo={handleTodo}
                    handleSubmit={handleSubmit}
                    edit={edit}
                  />
                  <Alert />
                  {alert.show && <Alert type={alert.type} text={alert.text} />}
                  <Card.Body> </Card.Body>

                  <TaskList
                    tasks={tasks[month]}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    clearItems={clearItems}
                  />
                </Card.Body>
              </Card.Body>
            </Col> */}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default FunPage;
