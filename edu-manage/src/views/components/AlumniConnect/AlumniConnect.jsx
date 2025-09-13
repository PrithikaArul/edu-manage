import Navbar from "../shared/Navbar/Navbar";
import {useState} from "react";
import { Typography } from "@mui/material";
import { AlumniGrid } from "./AlumniGrid";
import { useAlumniViewModel } from "../../../viewModels/useAlumniViewModel";
import Search from "./Search";

const AlumniConnect = () => {
    const alumni=useAlumniViewModel();
    const [searchText,setSearchText]=useState('');
    const [batchFilter,setBatchFilter]=useState(null);
    const [departmentsFilter,setDepartmentsFilter]=useState([]);

  return (
    <div>
      <Navbar/>
      <Typography variant="h5" fontWeight={700} color="black" sx={{ marginTop: 4, marginLeft: 4 }}>
              Alumni Connect
      </Typography>
      <Search setSearchText={setSearchText} searchText={searchText} setBatchFilter={setBatchFilter} setDepartmentsFilter={setDepartmentsFilter}/>
      <AlumniGrid alumniData={alumni} searchText={searchText} batchFilter={batchFilter} departmentsFilter={departmentsFilter}/>
    </div>
  )
}

export default AlumniConnect
