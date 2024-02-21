import React, { useRef, useState } from "react";
import "./FormStyles.css"
const Form = ({ todos, setTodos }) => {
  const nextId = useRef(0)
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo.trim() === "") return;
    const newTodo = {
      id: nextId.current++,
      name: todo,
      isCompleted: false
    }
    setTodos([...todos, newTodo]);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="addTodo">
          <input
            placeholder="Enter you Todo"
            type="text"
            className="add-todo-name"
            value={todo}
            onChange={(e) =>
              setTodo(e.target.value)
            }
          />
          <button className="btn-submit" type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
