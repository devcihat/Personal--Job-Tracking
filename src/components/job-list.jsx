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
import Button from '@mui/material/Button';
import {
    IconButton,
  } from "@material-ui/core";
  import DeleteIcon from '@mui/icons-material/Delete';



const useStyles = makeStyles({
  table: {
    minWidth: 1250
  }
});

const JobList = () => {
  const classes = useStyles();
  const {todoList,setTodoList,removeTodo} = useTodoContext()

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
                <TableCell align="right">Priority</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todoList ? (
                  todoList.map((row,index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right"><Button style={{background:`${row.priority === 'Acil' ? 'red' : row.priority === 'Önemli' ? 'orange' : 'blue'} `,color:'white',padding:'10px',borderRadius:'20px'}} >{row.priority}</Button></TableCell>
                    <TableCell  align="right">
                    <IconButton
                           style={{ color: 'green' }}
                           onClick={() => handleDelete(item.id)}>
                           <DeleteIcon />
                         </IconButton>
                         <IconButton
                           style={{ color: 'red' }}
                           onClick={() => removeTodo(index)}>
                           <DeleteIcon />
                         </IconButton>
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
