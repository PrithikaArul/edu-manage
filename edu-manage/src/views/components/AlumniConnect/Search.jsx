import { InputText } from "primereact/inputtext";
import Grid from "@mui/material/Grid";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { Box } from "@mui/material";
import RightSidebarFilter from "./RightSidebarFilter";
import { useState } from "react";
import FilterButton from "../../../assets/buttons/FilterButton.png";
import Button from "@mui/material/Button";




const Search = ({setSearchText,setBatchFilter,setDepartmentsFilter}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <Grid container sx={{marginTop:4,marginLeft:4,display:"flex",justifyContent:"space-between"}}>
        <Grid item position="flex-start">
            <IconField iconPosition="left" style={{alignItems:"center"}} >
                <InputIcon className="pi pi-search" style={{color:"grey",fontSize:'0.7rem',paddingTop:"2.3px"}}> </InputIcon>
                <InputText type="text" onChange={(e)=>setSearchText(e.target.value)} className="p-inputtext-sm" placeholder="Search" style={{height:35,width:270,borderRadius:6,marginLeft:-5}} />
        </IconField>
        </Grid>
        <Grid  item position="flex-end" sx={{marginRight:4,marginTop:-1}}>
    <Button
    disableRipple  
    disableFocusRipple 
     onClick={handleSidebar}  sx={{borderRadius:2,pointer:"cursor",'&:hover': {
          backgroundColor: 'inherit',
          boxShadow: 'none',
        },
        '&:focus':{
          backgroundColor: 'inherit',
          boxShadow: 'none',
        }}}>
        <img src={FilterButton} width={35} height={35}/>
    </Button>
    </Grid>
      </Grid>
      <RightSidebarFilter open={sidebarOpen} onClose={handleSidebarClose} setBatchFilter={setBatchFilter} setDepartmentsFilter={setDepartmentsFilter}/>
    </div>
  )
}

export default Search