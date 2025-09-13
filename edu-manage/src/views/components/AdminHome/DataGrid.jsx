import Grid from "@mui/material/Grid";
import DataCard from "./DataCard";
import Typography from "@mui/material/Typography";


export const DataGrid = (props) => {
    return (
        <div>
            <Typography variant="h5" fontWeight={700} color="black" sx={{ marginTop: 2, marginLeft: 2 }}>
              {props.title}
            </Typography>
            <Typography variant="h6" fontWeight={600} color="#5E5E5E" sx={{ marginTop: 2, marginLeft: 2 }}>
              {props.subTitle}
            </Typography>
            <Grid container justifyContent="space-between">
  <Grid item>
    <Grid container spacing={1}>
      <Grid item marginLeft={{md:2}}>
        <DataCard  description="Passed-Out Prediction" value="10,840" subDescription="For 2025"/>
      </Grid>
      <Grid item>
        <DataCard description="Admitted Prediction" value="840" subDescription="For 2025"/>
      </Grid>
    </Grid>
  </Grid>

  
</Grid>


        </div>
    );
}