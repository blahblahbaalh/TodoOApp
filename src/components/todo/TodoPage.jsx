import React, { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import DisplayItems from "./DisplayItems";
import { useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";

export default function TodoPage() {
  const todoList = useSelector((state) => state.todoList.todo);
  // console.log("todoList", todoList);
  
  useEffect(() => {
    
  }, [])

  return (
    <>
      <Container maxWidth="sm" style={{height:"100vh"}}>
        <Typography variant="h1">Todo-O App</Typography>
        <NewTodoForm />
        <DisplayItems todoList={todoList} />
      </Container>
    </>
  );
}
