import React, { useState } from "react";
import "./TodoItemStyles.css";
const TodoItem = ({ item, setTodos }) => {
  const [editLabel, setEditLabel] = useState(false);
  const [changedTodo, setChangedTodo] = useState(item.name);
  const handleSave = (itemID) => {
    const confirmSave = window.confirm("Are you sure you want to save?");
    if (confirmSave) {
      setTodos((prevTodo) =>
        prevTodo.map((todo) => {
          if (todo.id === itemID) {
            return { ...todo, name: changedTodo };
          }
          return todo;
        })
      );
    } else return;
    setEditLabel(false);
  };
  const handleDelete = (itemID) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== itemID));
    } else return;
  };
  const handleCheck = (itemID) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === itemID) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };
  return (
    <div className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          value={item.isCompleted}
          onChange={() => handleCheck(item.id)}
          className="btn-complete"
        />
        {editLabel ? (
          <input
            className="todo-name"
            type="text"
            value={changedTodo}
            onChange={(e) => setChangedTodo(e.target.value)}
          />
        ) : (
          <p className={!item.isCompleted ? `todo-name` : "todo-name cut"}>
            {item.name}
          </p>
        )}
      </div>
      <div className="btn-options">
        {editLabel ? (
          <button className="btn" onClick={() => handleSave(item.id)}>
            Save
          </button>
        ) : (
          <button onClick={() => setEditLabel(true)} className="btn">
            ✏️
          </button>
        )}
        <button onClick={() => handleDelete(item.id)} className="btn">
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
