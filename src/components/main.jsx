import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';



const Main =()=>{
    
   return(
        <>
         <Container  maxWidth="lg">
             <p style={{fontSize:'bold',paddingLeft:'20px'}}>Create New Job</p>
            <Grid style={{margin:'0 auto'}} container spacing={3}>
            <Grid item xs={4}>
            <TextField 
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
            id="standard-basic" 
            label="Job Priority" 
            variant="outlined" />
            </Grid>
            <Grid item xs={4}>
            <Button 
            style={{height:'100%',width:'50%'}} 
            variant="contained">+CREATE</Button>  
            </Grid>
            </Grid>
        </Container>
        </>
    )
}
export default Main;
