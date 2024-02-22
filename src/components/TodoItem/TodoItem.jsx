import React, { useState } from "react";
import "./TodoItemStyles.css";
const TodoItem = ({ item, setTodos, hideMarkAll, setHideMarkAll }) => {
  const [editLabel, setEditLabel] = useState(false);
  const [editTag, setEditTag] = useState(true);
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
    setEditTag(false);
    setEditLabel(false);
    setHideMarkAll(false);
  };
  const handleDelete = (itemID) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== itemID));
    } else return;
    if (editLabel) {
      setEditLabel(false);
      setHideMarkAll(false);
    }
  };

  const handleCancel = () => {
    setEditLabel(false);
    setHideMarkAll(false);
    setChangedTodo(item.name);
    return;
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
          checked={item.isCompleted}
          disabled={editLabel || hideMarkAll}
          onChange={() => handleCheck(item.id)}
          className={editLabel ? "disable" : "btn-complete"}
        />
        {editLabel ? (
          <input
            className="todo-name"
            type="text"
            value={changedTodo}
            onChange={(e) => {
              setChangedTodo(e.target.value);
            }}
          />
        ) : (
          <>
            <p className={!item.isCompleted ? `todo-name` : "todo-name cut"}>
              {item.name}
            </p>
            <p className={editTag ? "disable" : "edit-tag"}>Edited</p>
          </>
        )}
      </div>
      <div className="btn-options">
        {editLabel ? (
          <>
            <button onClick={handleCancel} className="btn">
              Cancel
            </button>
            <button
              disabled={!changedTodo?.trim() || item.name === changedTodo}
              className={
                !changedTodo.trim() || item.name === changedTodo
                  ? "disable-btn btn"
                  : "btn"
              }
              onClick={() => handleSave(item.id)}
            >
              Save
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setEditLabel(true);
              setHideMarkAll(true);
            }}
            disabled={hideMarkAll}
            className={hideMarkAll ? "btn disable-btn" : "btn"}
          >
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
