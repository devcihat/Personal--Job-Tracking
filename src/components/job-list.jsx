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
  import EditIcon from '@mui/icons-material/Edit';
  import Typography from '@mui/material/Typography';
  import Dialog from '@mui/material/Dialog';
  import DialogActions from '@mui/material/DialogActions';
  import DialogContent from '@mui/material/DialogContent';
  import DialogContentText from '@mui/material/DialogContentText';
  import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import ListItems from "./list"



const useStyles = makeStyles({
  table: {
    minWidth: 1250
  }
});

const JobList = () => {
  const classes = useStyles();
  const {todoList,setTodoList,removeTodo,handleEditTodos} = useTodoContext()

  const [searched, setSearched] = useState("");
  const [editPriority,setEditPriority] = useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = (index) => {
    setOpen(true)
    handleEditTodos(index)
  };
  const handleClose = () => setOpen(false);

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
                {open ? (
                    <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                     <DialogTitle id="alert-dialog-title">
          {"Job Edit"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TextField 
                        style={{width:'100%',marginBottom:'20px'}} 
                        //value={todoName}
                        //onChange={(e) => setTodoName(e.target.value)}
                        inputProps={{style: {height: 40}}}
                        disabled
                        //style={{width:'100%'}} 
                        id="standard-basic" 
                        label="Job Name" 
                        variant="outlined" />
          </DialogContentText>
          <DialogContentText id="alert-dialog-descriptions">
          <Select
                    required
                    style={{height:'56px',width:'100%'}} 
                    value={editPriority}
                    native={true}
                onChange={(e) => setEditPriority(e.target.value)}
                        label="Priority"
                    inputProps={{
                    id: "deviceSource-native-select",
                    name: "deviceSource"
                    }}
                >
                <option style={{textAlign:'center'}} value={"Acil"}>Acil</option>
                <option style={{textAlign:'center'}} value={"Önemli"}>Önemli</option>
                <option style={{textAlign:'center'}} value={"Normal"}>Normal</option>
                </Select>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{background:'red',padding:'10px',borderRadius:'20px'}} onClick={handleClose}>Cancel</Button>
          <Button  style={{background:'green',padding:'10px',borderRadius:'20px'}} onClick={handleEditTodos} autoFocus>
            Save
          </Button>
        </DialogActions>
                </Dialog>
                ): ''}
              {
                todoList && todoList.length > 0 && (
                    <ListItems items={todoList} handleOpen={handleOpen} removeTodo={removeTodo} />
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default JobList;
