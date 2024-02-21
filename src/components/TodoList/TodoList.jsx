import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoListStyles.css";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="container">
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem item={todo} setTodos={setTodos} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
