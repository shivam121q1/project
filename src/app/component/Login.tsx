import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import React, { useState } from 'react';


interface User{
    username:string,
    password:string
}
const Login = () => {
    const [user ,setUser] = useState<User>({
        username:"",
        password:""
      });
      console.log(user);
      const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name,value} = event.target;
        console.log(name,value);
        setUser((prevUser) => ({
          ...prevUser, // Preserve other properties (e.g., password)
          [name]:value// Update the username property
        }));
      };
  return (
      
    <Paper elevation={9} sx={{ padding: 4, width: 350 }}>
    <Typography variant="h5" textAlign="center" gutterBottom>
      Login
    </Typography>
    <form >
      <TextField
        fullWidth
        label="Email"
        name="username"
        type="email"
        variant="outlined"
        margin="normal"
        onChange={handleChange} 
        required
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        margin="normal"
        required
      />
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </form>
  </Paper>   
  )
}

export default Login
