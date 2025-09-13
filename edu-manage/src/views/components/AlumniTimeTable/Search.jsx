import { InputText } from "primereact/inputtext";
import Grid from "@mui/material/Grid";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useState } from "react";
import FilterButton from "../../../assets/buttons/FilterButton.png";
import Button  from "@mui/material/Button";
import Filter from "./Filter";



const Search = () => {
  const [isFilterVisible,setIsFilterVisible]=useState(false);

  const handleFilter=()=>{
    setIsFilterVisible(true);
  }

  return (
    <div>
      <Grid container sx={{marginTop:4,marginLeft:4,display:"flex",justifyContent:"space-between"}}>
        <Grid item position="flex-start">
            <IconField iconPosition="left" style={{alignItems:"center"}} >
                <InputIcon className="pi pi-search" style={{color:"grey",fontSize:'0.7rem',paddingTop:"2.3px"}}> </InputIcon>
                <InputText type="text" className="p-inputtext-sm" placeholder="Search" style={{height:35,width:270,borderRadius:6,marginLeft:-5}} />
        </IconField>
        </Grid>
        <Grid  item position="flex-end" sx={{marginRight:4,marginTop:-1}}>
<Button onClick={()=>handleFilter()} disableRipple disableFocusRipple sx={{borderRadius:2,pointer:"cursor",'&:hover': {
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
    <Filter isVisible={isFilterVisible} setIsVisible={setIsFilterVisible}/>
    </div>
  )
}

export default Search