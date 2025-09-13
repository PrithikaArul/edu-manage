import {useState,useEffect} from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Typography } from "@mui/material";
import ButtonGrid from "./ButtonGrid";
import { useProfileManagementViewModel } from "../../../viewModels/useProfileManagementViewModel";
import Table from "../shared/Table/Table";


const ProfileManagement = () => {
    const {profProfileData,studProfileData}=useProfileManagementViewModel();
    const [profile,setProfile]=useState("");
    const [tableData,setTableData]=useState([]);
    const [isExport,setIsExport]=useState(false);

    useEffect(()=>{
      setProfile("Student");
      setTableData(studProfileData);
    },[]);
    
  useEffect(() => {
  if (profile === "Student") {
    setTableData(studProfileData);
  } else if (profile === "Professor") {
    setTableData(profProfileData);
  }
}, [profile]);

    console.log("profData: "+profProfileData);
    console.log("studData: "+studProfileData);
    console.log("profile: "+profile);

    const handleProfileChange=(profileChange)=>{
        console.log(profileChange);
        setProfile(profileChange);
    };

  return (
    <div>
    <Navbar/>
    <Typography variant="h5" fontWeight={700} color="black" sx={{ marginTop: 4, marginLeft: 4 }}>
              Profile Management
    </Typography>
    <ButtonGrid onProfileChange={handleProfileChange} profile={profile} setIsExport={setIsExport}/>
    <Table component="ProfileManagement" tableData={tableData} setTableData={setTableData} isExport={isExport} setIsExport={setIsExport}/>
    </div>
  )
}

export default ProfileManagement
