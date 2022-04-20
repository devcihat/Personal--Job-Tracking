import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Menu from "@material-ui/core/Menu";
import {useTodoContext} from "../context/app-context"



const Main = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
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
            style={{width:'100%'}} 
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            inputProps={{style: {height: 40}}}
            required
            //style={{width:'100%'}} 
            id="standard-basic" 
            label="Job Name" 
            variant="outlined" />
            </Grid>
            <Grid item xs={4}>
            <Box sx={{ minWidth: 120 }}>
            <FormControl  fullWidth={true}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                <Select
                required
                    style={{height:'56px'}} 
                native={true}
                onChange={(e) => setTodoPriority(e.target.value)}
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
      </FormControl>
             </Box>
            </Grid>
            <Grid item xs={4}>
            <Button
            //style={{height:'56px'}} 
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
