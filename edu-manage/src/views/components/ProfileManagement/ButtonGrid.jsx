import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import AddButton from "../../../assets/buttons/AddButton.png";
import FilterButton from "../../../assets/buttons/FilterButton.png";
import ExportButton from "../../../assets/buttons/ExportButton.png";
import Export2 from "../../../assets/buttons/Export2.png";

const ButtonGrid = ({ onProfileChange, profile,setIsExport }) => {
  const isStudent = profile === "Student";
  const isProfessor = profile === "Professor";

  return (
    <div>
      <Grid container marginTop={{ md: 2, xs: 2 }} display="flex" justifyContent="space-between">
        <Grid
          item
          container
          marginLeft={3.5}
          spacing={{ md: 2, xs: 0.5 }}
          display="flex"
          direction="row"
          justifyContent="flex-start"
        >
          <Button
            width={{ md: 160, xs: 70 }}
            variant={isStudent ? "contained" : "outlined"}
            sx={{
              textTransform: "none",
              borderColor: "#286F67",
              color: isStudent ? "white" : "#286F67",
              backgroundColor: isStudent ? "#286F67" : "transparent",
              height: 35,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: "#286F67",
                color: "white",
              },
            }}
            onClick={() => onProfileChange("Student")}
          >
            Students
          </Button>

          <Button
            width={{ md: 160, xs: 70 }}
            variant={isProfessor ? "contained" : "outlined"}
            sx={{
              textTransform: "none",
              borderColor: "#286F67",
              color: isProfessor ? "white" : "#286F67",
              backgroundColor: isProfessor ? "#286F67" : "transparent",
              height: 35,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: "#286F67",
                color: "white",
              },
            }}
            onClick={() => onProfileChange("Professor")}
          >
            Professors
          </Button>
        </Grid>

        <Grid
          item
          container
          marginTop={{ xs: -1.5 }}
          spacing={0}
          display="flex"
          direction="row"
          justifyContent="flex-end"
        >
          <Button disableRipple disableFocusRipple sx={{ margin: -1,'&:hover': {
          backgroundColor: 'inherit',
          boxShadow: 'none',
        },
        '&:focus':{
          backgroundColor: 'inherit',
          boxShadow: 'none',
        } }}>
            <img src={AddButton} />
          </Button>
          <Button disableRipple disableFocusRipple className="filter-button" sx={{ margin: -1,'&:hover': {
          backgroundColor: 'inherit',
          boxShadow: 'none',
        },
        '&:focus':{
          backgroundColor: 'inherit',
          boxShadow: 'none',
        }}}>
            <img src={FilterButton} />
          </Button>
          <Button disableFocusRipple disableRipple sx={{ marginTop: 1, marginLeft: { xs: -1 },'&:hover': {
          backgroundColor: 'inherit',
          boxShadow: 'none',
        },
        '&:focus':{
          backgroundColor: 'inherit',
          boxShadow: 'none',
        } }} onClick={()=>{setIsExport(true)}}>
            <picture>
              <source media="(max-width:600px)" srcSet={Export2} />
              <img src={ExportButton} alt="Export" style={{ height: 35 }} />
            </picture>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonGrid;
