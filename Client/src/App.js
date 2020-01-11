import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import DayJoke from "./components/DayJoke";
import DayQuote from "./components/DayQuote";
import DayPic from "./components/DayPic";
import { Col, Row, Container, Card } from "react-bootstrap";

const initialTasks = {
  January: [],
  February: [],
  March: []
};

function App() {
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
        <Container>
          <Row>
            <Col md={{ span: 12, offset: 0 }}>
              <Nav />
            </Col>
            <Col md={{ span: 6, offset: 0 }}>
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
                    // handleComplete={handleComplete}
                    clearItems={clearItems}
                  />
                </Card.Body>
                {/* <Card.Footer className="quote">Work hard dream Big</Card.Footer> */}
              </Card.Body>
            </Col>

            <Col md={{ span: 3, offset: 0 }}>
              <Card.Body className="joke-card">
                <Card.Img
                  variant="top"
                  src="https://i.ytimg.com/vi/y-VILY1x6RM/hqdefault.jpg"
                />
                <Card.Header as="h5">My Jokes</Card.Header>
                <DayJoke />
              </Card.Body>
            </Col>
            <Col md={{ span: 3, offset: 0 }}>
              <Card.Body className="quote-card">
                <Card.Img
                  variant="top"
                  src="http://beautyharmonylife.com/wp-content/uploads/2013/09/431217-1024x768-pine-island-800x600.jpg"
                />
                <Card.Header as="h5">My Quotes</Card.Header>
                <DayQuote />
              </Card.Body>
            </Col>
            <Col md={{ span: 3, offset: 0 }}>
              <Card.Body className="pic-card">
                <Card.Header as="h5">My Pictures</Card.Header>
                <DayPic />
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
