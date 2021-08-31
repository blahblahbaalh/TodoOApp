import { Grid, IconButton, Paper, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../features/todoList/todoActions";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import BackspaceIcon from "@material-ui/icons/Backspace";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

export default function TodoCard({ eachTodo }) {
  //======================================================================//
  //Local state mapped from passed on from parent component
  const [todo, setTodo] = useState(eachTodo);
  const [isDisabled, setIsDisabled] = useState(true);
  //======================================================================//
  //This is for react redux
  const dispatch = useDispatch();

  //======================================================================//
  //This function is to handle edit + status changes
  const handleChanges = (event) => {
    const { name, value } = event.currentTarget;
    setTodo((prevValue) => ({ ...prevValue, [name]: value }));
    //-----------------//
    // If keypress is enter or it is change in status, call submit changes func
    if (name === "status" || event.keyCode === 13) {
      setIsDisabled(true);
    }
  };

  //This section is for useEffect to trigger dispatch when there are changes Todo and dispatch
  //isFirstRender is to ensure that dispatch will not be called upon first render
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else {
      dispatch(updateTodo(todo));
    }
  }, [todo]);

  //======================================================================//
  //This function is to handle delete
  const handleDelete = (event) => {
    const itemId = event.currentTarget.id;
    dispatch(deleteTodo(itemId));
  };

  //======================================================================//
  //This function is to handle file upload
  const handleFile = (event) => {
    console.log(todo.description);
    const file = event.target.files[0];
    console.log(file);
    const img = URL.createObjectURL(file);
    setTodo((prevValue) => ({
      ...prevValue,
      file: file,
      imgUrl: img,
    }));
  };

  //======================================================================//
  // console.log("localtodo", todo);

  return (
    <Grid container>
      <Paper
        elevation={3}
        style={todo.status === "active" ? {} : { backgroundColor: "#7FC8A9" }}
      >
        <textarea
          name="description"
          onKeyDown={handleChanges}
          onChange={handleChanges}
          value={todo.description}
          disabled={isDisabled}
          style={{ minHeight: "100px" }}
        ></textarea>
        {todo.imgUrl && (
          <img
            src={todo.imgUrl}
            alt="upload-preview-img"
            style={{ width: "100%", maxHeight:"100px", objectFit: "contain"}}
          />
        )}
        <IconButton onClick={() => setIsDisabled(false)}>
          <EditIcon />
        </IconButton>
        <IconButton
          name="status"
          value={todo.status === "active" ? "completed" : "active"}
          onClick={handleChanges}
        >
          {todo.status === "active" ? <DoneIcon /> : <CheckCircleOutlineIcon />}
        </IconButton>
        <IconButton  name="delete" onClick={handleDelete}>
          <BackspaceIcon />
        </IconButton>
        <input
          accept="image/*"
          id={todo.id}
          onChange={handleFile}
          type="file"
          name="file"
          style={{ display: "none" }}
        />
        <label htmlFor={todo.id}>
          <IconButton  component="span">
            <AddPhotoAlternateIcon />
          </IconButton>
        </label>
      </Paper>
    </Grid>
  );
}
