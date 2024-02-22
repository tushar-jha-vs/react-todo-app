import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoListStyles.css";

const TodoList = ({ todos, setTodos,hideMarkAll,setHideMarkAll }) => {
  return (
    <div className="container">
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem item={todo} setTodos={setTodos} hideMarkAll={hideMarkAll} setHideMarkAll={setHideMarkAll} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
