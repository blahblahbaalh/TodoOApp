import { Grid, IconButton, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../features/todoList/todoActions";
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import BackspaceIcon from '@material-ui/icons/Backspace';


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
  const [ isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender){
      setIsFirstRender(false)
    }else {
      dispatch(updateTodo(todo));
    }
    }, [todo, dispatch]);

  //======================================================================//
  //This function is to handle delete
  const handleDelete = (event) => {
    const itemId = event.currentTarget.id;
    dispatch(deleteTodo(itemId));
  };

  //======================================================================//
  //   console.log("localtodo", todo);

  return (
    <Grid container>
    <Paper elevation={3} style={todo.status === "active" ? {} : {backgroundColor: "#7FC8A9"}}>
    <Grid item sm={3}>
      <textarea
        id={todo.id}
        name="description"
        onKeyDown={handleChanges}
        onChange={handleChanges}
        value={todo.description}
        disabled={isDisabled}
        style={{minHeight:"100px"}}
      ></textarea>
      </Grid>
      <IconButton onClick={() => setIsDisabled(false)}><EditIcon /></IconButton>
      <IconButton
        id={todo.id}
        name="status"
        value={todo.status === "active" ? "completed" : "active"}
        onClick={handleChanges}
      >
        {todo.status === "active" ? <DoneIcon /> : <CheckCircleOutlineIcon/>}
      </IconButton>
      <IconButton id={todo.id} name="delete" onClick={handleDelete}>
        <BackspaceIcon />
      </IconButton>
    </Paper>
    </Grid>
  );
}
