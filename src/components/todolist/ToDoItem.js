import React from "react";

const ToDoItem = props => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
    display: "inline",
    marginLeft: "5px",
    marginRight: "5px"
  };
  const normalStyle = {
    display: "inline",
    marginLeft: "5px",
    marginRight: "5px"
  };
  const deleteButton = {
    backgroundColor: "red",
    color: "white"
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : normalStyle}>
        {props.item.text}
      </p>
      <button
        style={deleteButton}
        onClick={() => props.handleDelete(props.item.id)}
      >
        X
      </button>
    </div>
  );
};

export default ToDoItem;
