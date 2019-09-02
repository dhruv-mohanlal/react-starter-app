import React, { Component, useState } from "react";
import todoData from "./ToDoData";
import ToDoItem from "./ToDoItem";

const ToDoForm = props => {
  const [todoList, setList] = useState(todoData);
  const [todoItem, setItem] = useState("");

  const handleChange = id => {
    const updatedList = todoList.map(item => {
      if (id === item.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setList(updatedList);
  };

  const addItem = event => {
    const { value } = event.target;
    console.log(value);
    setItem(value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    const value = todoItem;
    if (!value) return;
    setList([
      ...todoList,
      { id: todoList.length + 1, text: value, completed: false }
    ]);
    setItem("");
  };

  const handleDelete = id => {
    const updatedList = todoList.filter(item => item.id !== id);
    setList(updatedList);
  };

  const todoItems = todoList.map(item => (
    <ToDoItem
      key={item.id}
      item={item}
      handleChange={handleChange}
      handleDelete={handleDelete}
    />
  ));
  return (
    <div>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add ToDo item here..."
          value={todoItem}
          onChange={addItem}
        />
        <br />
        <button style={{ marginTop: "5px" }}>Submit</button>
      </form>
      <div className="todo-list">{todoItems}</div>
    </div>
  );
};

export default ToDoForm;
