import { useAcademicCalenderViewModel } from "../../../viewModels/useAcademicCalenderViewModel";
import Table from "../shared/Table/Table";
import { useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Typography } from "@mui/material";

const AcademicCalender=()=>{
    const data=useAcademicCalenderViewModel();
    const [tableData,setTableData]=useState(data);

    return(
        <div>
            <Navbar/>
            <Typography variant="h5" fontWeight={700} color="black" sx={{ marginTop: 3, marginLeft: 5 }}>
              Academic Calender
            </Typography>
            <Table component={"AcademicCalender"} tableData={data} setTableData={setTableData}/>
        </div>
    );


};

export default AcademicCalender;