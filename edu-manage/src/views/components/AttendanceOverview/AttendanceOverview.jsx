import {useState,useEffect} from 'react';
import { useAttendanceOverviewViewModel } from '../../../viewModels/useAttendanceOverviewModel';
import ButtonGrid from './ButtonGrid';
import { Typography } from "@mui/material";
import Navbar from '../shared/Navbar/Navbar';
import Table from '../shared/Table/Table';


const AttendanceOverview = () => {
    const {profAttendanceData,studAttendanceData}=useAttendanceOverviewViewModel();
    const [profile,setProfile]=useState();
    const [tableData,setTableData]=useState([]);
    const [isExport,setIsExport]=useState(false);

    useEffect(()=>{
      setProfile("Student");
      setTableData(studAttendanceData);
    });
    
    useEffect(()=>{
        if(profile==="Professor")
        {
            setTableData(profAttendanceData);
        }
        else if(profile==="Student")
        {
            setTableData(studAttendanceData);
        }

        console.log("profile"+profile+"prof:"+profAttendanceData+"stud:"+studAttendanceData);
    },[profile]);


    const handleProfileChange=(profileChange)=>{
        setProfile(profileChange);
    }

  return (
    <div>
      <Navbar/>
    <Typography variant="h5" fontWeight={700} color="black" sx={{ marginTop: 4, marginLeft: 4 }}>
              Attendance Overview
    </Typography>
    <ButtonGrid onProfileChange={handleProfileChange} profile={profile} setIsExport={setIsExport}/>
    <Table component="AttendanceOverview" tableData={tableData} setTableData={setTableData} isExport={isExport} setIsExport={setIsExport}/>
    </div>
  )
}

export default AttendanceOverview
