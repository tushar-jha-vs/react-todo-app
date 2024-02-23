import React from "react";
import "./MarkAllStyles.css";

export const MarkAll = ({ todos, setTodos, setHideMarkAll, hideMarkAll }) => {
  const handleDeleteAll = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete All Todos?`);
    if (confirmDelete) {
      setHideMarkAll(false);
      setTodos([]);
    } else return;
  };
  const handleMarkComplete = () => {
    setTodos((prev) => prev.map((item) => ({ ...item, isCompleted: true })));
  };
  const handleMarkInComplete = () => {
    setTodos((prev) => prev.map((item) => ({ ...item, isCompleted: false })));
  };
  return (
    <div className="mark-all-container">
      {todos.every((todoItem) => todoItem.isCompleted) ? (
        <button
          onClick={handleMarkInComplete}
          disabled={hideMarkAll}
          className={
            hideMarkAll ? "disable-markall mark-all-btn" : "mark-all-btn"
          }
        >
          Mark All Todos as not Completed
        </button>
      ) : (
        <button
          onClick={handleMarkComplete}
          disabled={hideMarkAll}
          className={
            hideMarkAll ? "disable-markall mark-all-btn" : "mark-all-btn"
          }
        >
          Mark All Todos as Completed
        </button>
      )}
      <button onClick={handleDeleteAll} className="mark-all-btn">
        Delete All Todos
      </button>
    </div>
  );
};
