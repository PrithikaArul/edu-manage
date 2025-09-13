import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Typography from "@mui/material/Typography";
import TimeTable from './TimeTable';
import Search from './Search';

const AlumniTimeTable = () => {
  return (
    <div>
      <Navbar/>
      <Typography variant="h5" fontWeight={700} color="black" sx={{ marginTop: 4, marginLeft: 4 }}>
              Time Table
      </Typography>
      <Search/>
      <TimeTable/>
    </div>
  )
}

export default AlumniTimeTable
