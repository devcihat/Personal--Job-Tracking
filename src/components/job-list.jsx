import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import {useTodoContext} from "../context/app-context"


const useStyles = makeStyles({
  table: {
    minWidth: 1250
  }
});

const JobList = () => {
  const classes = useStyles();
  const {todoList,setTodoList} = useTodoContext()

  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = todoList.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setTodoList(filteredRows);
  };

  const cancelSearch = () => {
    setSearched(todoList);
    requestSearch(searched);
  };

  useEffect(() => {
      const users = JSON.parse(localStorage.getItem('users'))
        users && users.length > 0 ? setTodoList(users) : ''
  },[])
  return (
    <>
      <Paper style={{padding:'40px'}}>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todoList ? (
                  todoList.map((row) => (
                    <TableRow key={row}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.priority}
                      </TableCell>
                    </TableRow>
                  ))
              ): null}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default JobList;
