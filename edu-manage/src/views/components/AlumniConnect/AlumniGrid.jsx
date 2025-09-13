import {useState,useEffect} from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import AlumniCard from "./AlumniCard";

export const AlumniGrid=({alumniData,searchText,batchFilter,departmentsFilter})=>{
  const [filteredData, setFilteredData] = useState(alumniData);

  useEffect(()=>{
    const searchFiltered=alumniData.filter(alumni=>{
      const search=searchText.toLowerCase();
      return(
        alumni.name.toLowerCase().includes(search)||
        alumni.department.toLowerCase().includes(search)||
        alumni.phoneNo.includes(search)||
        alumni.email.toLowerCase().includes(search)||
        alumni.batch.toLowerCase().includes(search)
      );
    })
    setFilteredData(searchFiltered);
  },[searchText, alumniData]);

  useEffect(()=>{
    const filtered=alumniData.filter(alumni=>{
      return(
        (batchFilter ? alumni.batch === batchFilter : true) &&
        (departmentsFilter.length > 0 ? departmentsFilter.includes(alumni.department) : true)
      )
    });
    setFilteredData(filtered);
  });

    return(
<Box sx={{ flexGrow: 1,margin:4}}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 4, md: 12 }}>
        {filteredData.map((item, index) => (
          <Grid key={index} size={{ xs: 1, sm: 4, md: 4 }}>
            <AlumniCard name={item.name} department={item.department} phoneNo={item.phoneNo} email={item.email} batch={item.batch}/>
          </Grid>
        ))}
      </Grid>
    </Box>
    );

}