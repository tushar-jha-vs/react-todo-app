import React, { useRef, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import { MarkAll } from "./components/markAll/MarkAll";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [hideMarkAll,setHideMarkAll] = useState(false)
  return (
    <div>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      {todos.length ? <MarkAll todos={todos} setTodos={setTodos} hideMarkAll={hideMarkAll} setHideMarkAll={setHideMarkAll}/> : ""}
      <TodoList todos={todos} setTodos={setTodos} hideMarkAll={hideMarkAll} setHideMarkAll={setHideMarkAll}/>
      <Footer todos={todos} />
    </div>
  );
};

export default App;
