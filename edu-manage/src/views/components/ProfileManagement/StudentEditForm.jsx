import { FormControl } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Dropdown } from "primereact/dropdown";

const StudentEditForm = ({studEditOpen}) => {
  const [subjectId, setSubjectId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department,setDepartment]=useState("");
  const [year,setYear]=useState("");
  const [section,setSection]=useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [status,setStatus]=useState("");


  const departments = [
    { name: "CSE" },
    { name: "EEE" },
    { name: "ECE" }
  ];

  const years=[
    {name:"First"},
    {name:"Second"},
    {name:"Third"},
    {name:"Fourth"}
];

const sections=[
    {name:"A"},
    {name:"B"},
    {name:"C"},
    {name:"D"}
]

const statuses=[
    {name:"Active"},
    {name:"Inactive"}
]


  const handleAcademicCalenderClose = () => {
    studEditOpen(false);
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
        Book a Session
      </Typography>

      <FormGroup>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Subject ID"
            fullWidth
            value={subjectId}
            onChange={(e) => setSubjectId(e.target.value)}
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
            placeholder="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#286F67',
              },
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Dropdown
            value={department}
            onChange={(e) => setDepartment(e.value)}
            options={departments}
            optionLabel="name"
            placeholder="Department"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid lightgrey",
              borderRadius: "4px"
            }}
          />
        </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
          <Dropdown
            value={year}
            onChange={(e) => setYear(e.value)}
            options={years}
            optionLabel="name"
            placeholder="Year"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid lightgrey",
              borderRadius: "4px"
            }}
          />
        </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
          <Dropdown
            value={section}
            onChange={(e) => setSection(e.value)}
            options={sections}
            optionLabel="name"
            placeholder="Section"
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
            placeholder="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Phone Number"
            fullWidth
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#286F67',
              },
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Dropdown
            value={status}
            onChange={(e) => setStatus(e.value)}
            options={statuses}
            optionLabel="name"
            placeholder="Status"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid lightgrey",
              borderRadius: "4px"
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
            onClick={handleAcademicCalenderClose}
          >
            Done
          </Button>
        </Grid>
      </FormGroup>
    </Box>
  );
}

export default StudentEditForm
