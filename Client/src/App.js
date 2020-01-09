import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import { Col, Row, Container, Card } from "react-bootstrap";

// const uuidv4 = require("uuid/v4");

const initialTasks = {
  January: [],
  February: [],
  March: []
};
// { id: uuid(), charge: "rent", amount: 1600 },
// { id: uuid(), charge: "car payment", amount: 400 },
// { id: uuid(), charge: "credit card bill", amount: 100 }
//hashmap

// console.log(initialExpenses);
// import useState
// is a function returns [] with two values
// the actual value of the STATE-1 value
// function for updates/control- 2 value
// default value

function App() {
  // class based component
  // state = {tasks: initialExpenses}
  // this.setStaate({})
  // console.log(useState());
  // const result = useState(initialExpenses);
  // -----------short function
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
  // add drop down++++

  // setmonth fun

  //***********functionality************

  //handle charge
  const handleTodo = e => {
    setTodo(e.target.value);
    // console.log(`charge: ${e.target.value}`);
  };

  //handle amount
  // const handleAmount = e => {
  // setAmount(e.target.value);
  // console.log(`amount: ${e.target.value}`);
  // };

  //handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
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
        handleAlert({ type: "success", text: "task edited" });
      } else {
        // const singleTasks = { id: uuid(), charge: charge, amount: amount };
        const singleTasks = { id: uuid(), todo: todo };
        tempTasks[month] = [...tasks[month], singleTasks];
        setTasks(tempTasks);
        handleAlert({ type: "success", text: "task added" });
      }

      setTodo("");
      // setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `task can't be empty value; time has to be in number value`
      });
    }
  };
  // clear all items
  const clearItems = () => {
    // console.log("cleared item");
    let tempTasks = { ...tasks };
    tempTasks[month] = [];
    setTasks(tempTasks);
    handleAlert({ type: "danger", text: "All task-deleted" });
  };

  // handle delete
  const handleDelete = id => {
    // console.log(`item deleted:  ${id}`);
    let tempTasks = { ...tasks };
    tempTasks[month] = tasks[month].filter(item => item.id !== id);
    // console.log(tempTasks);
    setTasks(tempTasks);
    handleAlert({ type: "danger", text: "task-deleted" });
  };

  // handle edit
  const handleEdit = id => {
    // console.log(`item edited:  ${id}`);
    let task = tasks[month].find(item => item.id === id);
    // let { charge, amount } = task;
    let { todo } = task;
    setTodo(todo);
    // setAmount(amount);
    setEdit(true);
    setId(id);
  };
  // newExpenses.splice(index, 1);

  // -----------long function for const result
  // const tasks = result[0];
  // const setTasks = result[1];
  // -----------long function for const result
  // console.log(tasks, setTasks);
  // console.log(charge, amount);

  return (
    <>
      <Nav />

      <main className="App">
        <Container>
          <Row>
            {/* <Col xs={8}>
             */}
            <Col md={{ span: 8, offset: 2 }}>
              <Card.Body className="sub-card">
                <Card.Header as="h5">My TODO</Card.Header>
                <Card.Body>
                  {alert.show && <Alert type={alert.type} text={alert.text} />}
                  <Alert />
                  <TaskForm
                    todo={todo}
                    handleTodo={handleTodo}
                    handleSubmit={handleSubmit}
                    edit={edit}
                  />

                  <TaskList
                    tasks={tasks[month]}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    // handleComplete={handleComplete}
                    clearItems={clearItems}
                  />
                </Card.Body>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </main>

      <h3>Random Quotes: Work hard dream Big</h3>
    </>
  );
}

export default App;
