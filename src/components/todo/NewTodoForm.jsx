import React, { useState } from "react";
import cuid from "cuid";
import { useDispatch } from "react-redux";
import { createTodo } from "../../features/todoList/todoActions";
import { IconButton, TextField } from "@material-ui/core";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

export default function NewTodoForm() {

  //======================================================================//
  // This is for react-redux
  const dispatch = useDispatch();


  //======================================================================//
  const [todo, setTodo] = useState({
    id: "",
    description: "",
    status: "active",
  });

  //======================================================================//
  // This function is to handle a new todo locally
  const handleTodo = (event) => {
    const { name, value } = event.currentTarget;
    setTodo((prevValue) => ({
      ...prevValue,
      id: cuid(),
      status: "active",
      [name]: value,
    }));
  };

  //======================================================================//
  //This function is to add todo to todoList redux when submit button clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    (!!todo.description.trim()) && dispatch(createTodo(todo));
    setTodo({description: ""});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="description"
          value={todo.description}
          onChange={handleTodo}
          label="todo"
          variant="outlined"
        />
        <IconButton type="submit" color="secondary" size="medium" ><AddCircleRoundedIcon /></IconButton>
      </form>
    </>
  );
}
