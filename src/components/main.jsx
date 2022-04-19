import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';
import {useTodoContext} from "../context/app-context"



const Main = () => {
    const { todoList,addTodo,todoName,setTodoPriority,setTodoName,todoPriority } = useTodoContext()
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            todoName,
            todoPriority
        });
        //localStorage.setItem('users', JSON.stringify(todoList))
    }
   return(
        <>
         <Container  maxWidth="lg">
             <p style={{fontSize:'bold',paddingLeft:'20px'}}>Create New Job</p>
            <form onSubmit={handleSubmit}>
            <Grid style={{margin:'0 auto'}} container spacing={3}>
            <Grid item xs={4}>
            <TextField 
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            inputProps={{style: {fontSize: 40}}}
            style={{width:'100%'}} 
            id="standard-basic" 
            label="Job Name" 
            variant="outlined" />
            </Grid>
            <Grid item xs={4}>
            <TextField 
            style={{width:'100%'}}
            inputProps={{style: {fontSize: 40}}} 
            value={todoPriority}
            onChange={(e) => setTodoPriority(e.target.value)}
            id="standard-basic" 
            label="Job Priority" 
            variant="outlined" />
            </Grid>
            <Grid item xs={4}>
            <Button
            type='submit' 
            style={{height:'100%',width:'50%'}} 
            variant="contained">+CREATE</Button>  
            </Grid>
            </Grid>
            </form>
        </Container>
        </>
    )
}
export default Main;
