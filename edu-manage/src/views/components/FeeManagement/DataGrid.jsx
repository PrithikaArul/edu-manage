import Grid from "@mui/material/Grid";
import DataCard from "./DataCard";
import Typography from "@mui/material/Typography";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Box from "@mui/material/Box";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button } from "@mui/material";
import FilterButton from "../../../../src/assets/buttons/FilterButton.png";

export const DataGrid = ({title,setIsExport}) => {
    return (
        <div>
            <Typography variant="h5" fontWeight={700} color="black" sx={{ marginTop: 2, marginLeft: 2 }}>
              {title}
            </Typography>
            

<Grid
  container
  direction={{ xs: 'column', md: 'row' }}
  justifyContent="space-between"
  alignItems="flex-start"
>
  <Grid
    item
    sx={{
      order: { xs: 0, md: 1 }, 
      alignSelf: { xs: 'flex-end', md: 'flex-start' },
      display: 'flex',
      gap: 1,
      marginBottom: { xs: 2, md: 0 },
      marginRight: { md: 2 },
      marginTop:{md:2}
    }}
  >
    {/* <Button
      sx={{
        backgroundColor: '#286F67',
        borderRadius: 2,
        height: 35,
        maxWidth:30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FilterListOutlinedIcon sx={{ color: 'white', width: 27, height: 27 }} />
    </Button> */}

    <Button className="filter-button"
    disableRipple  
    disableFocusRipple 
     sx={{
      borderRadius:2,pointer:"cursor",marginTop:-0.5,
      '&:hover': {
          backgroundColor: 'inherit',
          boxShadow: 'none',
        },
        '&:focus':{
          backgroundColor: 'inherit',
          boxShadow: 'none',
        }
      }}>
            <img src={FilterButton} width={35} height={33}/>
    </Button>

    <Button
      sx={{
        backgroundColor: '#286F67',
        borderRadius: 2,
        height: 35,
        minWidth: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FileUploadOutlinedIcon onClick={()=>{setIsExport(true)}} sx={{ color: 'white', height: 27 }} />
    </Button>
  </Grid>

  {/* Cards SECOND on mobile, LEFT on desktop */}
  <Grid item sx={{ order: { xs: 1, md: 0 } }}>
    <Grid container spacing={0.5}>
      <Grid item>
        <DataCard description="Total Students Paid" value="10,840" />
      </Grid>
      <Grid item>
        <DataCard description="Total Students Unpaid" value="840" />
      </Grid>
    </Grid>
  </Grid>
</Grid>

        </div>
    );
}

