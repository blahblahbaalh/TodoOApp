import { Button, Grid } from "@material-ui/core";
import React, {useState} from "react";
import TodoCard from "./TodoCard";

export default function DisplayItems({todoList}){

  const [ displayStatus, setDisplayStatus ] = useState("active");
  
   //======================================================================//
  //This function is to set the display status active, completed or all
  const handleDisplayStatus = (event) => {
    setDisplayStatus(event.currentTarget.value);
  }

   //======================================================================//
  //This is for filtering based on status selected
  const filtered = todoList.filter( each => (displayStatus === "all")? each : each.status === displayStatus);

    return (
      <>
        <Grid container spacing={3} style={{ marginBottom: "30px" }}>
          <Grid item xs={4}>
            <Button value="active" onClick={handleDisplayStatus} fullWidth>
              Active
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value="completed" onClick={handleDisplayStatus} fullWidth>
              Completed
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value="all" onClick={handleDisplayStatus} fullWidth>
              All
            </Button>
          </Grid>
        </Grid>
        {/* Spacing 3x4=12px only on Grid, not grid item */}
        <Grid container spacing={3}>
          {filtered.map((each) => (
            <Grid item sm={4} key={each.id}>
              <TodoCard key={each.id} eachTodo={each} />
            </Grid>
          ))}
        </Grid>
      </>
    );
}