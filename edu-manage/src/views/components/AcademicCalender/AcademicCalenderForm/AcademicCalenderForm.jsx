import { FormControl } from "@mui/material";
import './AcademicCalenderForm.css';
import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Dropdown } from "primereact/dropdown";

export const AcademicCalenderForm = ({ acadCalOpen }) => {
  const [monthYear, setMonthYear] = useState("");
  const [date, setDate] = useState("");
  const [event, setEvent] = useState("");
  const [type, setType] = useState("");
  const [remarks, setRemarks] = useState("");

  const types = [
    { name: "College Event" },
    { name: "Internal Exam" },
    { name: "Government Holiday" }
  ];

  const handleAcadCalClose = () => {
    acadCalOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: { xs: 2, sm: 4 },
        width: "100%",
        maxWidth: 600,
        mx: "auto"
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          color: "#5E5E5E",
          mb: 3,
        }}
      >
        Edit the Academic Calendar
      </Typography>

      <FormGroup>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Month Year"
            fullWidth
            value={monthYear}
            onChange={(e) => setMonthYear(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#286F67',
              },
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            placeholder="dd/mm/yyyy to dd/mm/yyyy"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#286F67',
              },
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Event"
            fullWidth
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#286F67',
              },
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Dropdown
            value={type}
            onChange={(e) => setType(e.value)}
            options={types}
            optionLabel="name"
            optionValue="name"
            placeholder="Type"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid lightgrey",
              borderRadius: "4px"
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Remarks"
            fullWidth
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#286F67',
              },
            }}
          />
        </FormControl>

        <Grid container justifyContent="flex-end" mt={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#286F67",
              textTransform: "none",
              border: "1px solid #286F67",
              color: "white",
              boxShadow: "none",
              width: { xs: "100%", sm: 150 },
              borderRadius: 2,
              '&:hover': {
                backgroundColor: "#286F67",
                boxShadow: "none"
              }
            }}
            onClick={handleAcadCalClose}
          >
            Done
          </Button>
        </Grid>
      </FormGroup>
    </Box>
  );
};
