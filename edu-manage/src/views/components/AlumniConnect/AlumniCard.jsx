import { Card, Typography, Grid, Box, Stack } from "@mui/material";
import ProfileImage from "../../../assets/ProfileImage.png";
import Graduate from "../../../assets/icons/Graduate.png";
import Phone from "../../../assets/icons/Phone.png";
import Email from "../../../assets/icons/Email.png";

const AlumniCard = ({ name, department, phoneNo, email, batch }) => {
  return (
    <Card sx={{ borderRadius: 5, padding: 2 }}>
      <Grid container spacing={2} alignItems="center" wrap="nowrap">
        {/* Profile Image */}
        <Grid item>
          <Box
            component="img"
            src={ProfileImage}
            alt="profile-image"
            sx={{
              width: { xs: 100, sm: 120, md: 140 },
              height: "auto",
              borderRadius: "15%",
            }}
          />
        </Grid>

        {/* Text Info */}
        <Grid item xs>
          <Stack spacing={1}>
            <Typography variant="h5" fontWeight={700}>
              {name}
            </Typography>
            <Typography variant="body1" color="black" display="flex" alignItems="center">
              <Box component="img" src={Graduate} alt="grad-icon" sx={{ width: 20, height: 20, mr: 1 }} />
              {department}
            </Typography>
            <Typography variant="body1" color="black" display="flex" alignItems="center">
              <Box component="img" src={Phone} alt="phone-icon" sx={{ width: 20, height: 20, mr: 1 }} />
              {phoneNo}
            </Typography>
            <Typography variant="body1" color="black" display="flex" alignItems="center">
              <Box component="img" src={Email} alt="email-icon" sx={{ width: 20, height: 20, mr: 1 }} />
              {email}
            </Typography>
            <Typography variant="body2" color="#9F9F9F">
              Batch: {batch}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AlumniCard;
