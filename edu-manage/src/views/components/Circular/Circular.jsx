import { useState } from "react";
import {
  Typography,
  TextField,
  FormGroup,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Grid,
  FormControl
} from "@mui/material";

const Circular = ({ parentCircularOpenCall }) => {
  const [fileName, setFileName] = useState("Attachment");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleFileUpload = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("Attachment");
    }
  };

  const handleCircularClose = () => {
    parentCircularOpenCall(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: { xs: 2, sm: 4 },
        width: "100%",
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          color: "black",
          mb: 2,
        }}
      >
        General Circular
      </Typography>

      <FormGroup>
        <FormControl>
          <TextField
            variant="outlined"
            placeholder="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#286F67',
              },
            }}
          />
        </FormControl>

        <FormControl>
          <TextField
            multiline
            rows={4}
            placeholder="Message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: '#286F67',
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Box display="flex" alignItems="center" gap={2}>
            <input
              accept="*"
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
              onChange={handleFileUpload}
            />
            <label htmlFor="raised-button-file" style={{ width: "100%" }}>
              <Button
                variant="contained"
                component="span"
                fullWidth
                sx={{
                  textTransform: "none",
                  background: "#FFFFFF",
                  color: "#909090",
                  border: "1px solid #909090",
                  boxShadow: "none",
                  justifyContent: "space-between",
                  "&:hover": {
                    boxShadow: "none",
                  },
                }}
                endIcon={
                  <span
                    className="pi pi-paperclip"
                    style={{ color: "#909090", fontSize: 15 }}
                  />
                }
              >
                {fileName}
              </Button>
            </label>
          </Box>
        </FormControl>

        <Typography variant="body1" sx={{ color: "#5E5E5E", fontWeight: 700, mt: 2 }}>
          Visibility
        </Typography>
        <FormControl sx={{ mt: 1 }}>
          <FormControlLabel control={<Checkbox sx={{ color: "#286F67" }} />} label="Student" />
          <FormControlLabel control={<Checkbox sx={{ color: "#286F67" }} />} label="Professor" />
          <FormControlLabel control={<Checkbox sx={{ color: "#286F67" }} />} label="Alumni" />
          <FormControlLabel control={<Checkbox sx={{ color: "#286F67" }} />} label="Everyone" />
        </FormControl>

        <Grid container spacing={2} justifyContent="flex-end" mt={2}>
          <Grid item>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderColor: "#286F67",
                color: "#286F67",
                width: 120,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: "#286F67",
                  color: "white",
                },
              }}
              onClick={handleCircularClose}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#286F67",
                textTransform: "none",
                width: 120,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: "#286F67",
                },
              }}
              onClick={handleCircularClose}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
    </Box>
  );
};

export default Circular;
