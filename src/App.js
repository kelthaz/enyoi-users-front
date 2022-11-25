import './App.css';
import React from 'react'
import Table from './components/table'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const  App = () => {


  return (
    <Box sx={{ backgroundColor: '#D4D4D4', p:6}}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Table></Table>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
