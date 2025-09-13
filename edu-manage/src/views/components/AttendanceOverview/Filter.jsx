import { Sidebar } from "primereact/sidebar";
import { useState,useEffect } from "react";
import { MultiSelect } from "primereact/multiselect";
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  Typography,
  Checkbox,
  Select,
  MenuItem,
  ListItemText,
  Button,
  Dialog
} from '@mui/material';
import { Calendar } from 'primereact/calendar';

const Filter = ({ isVisible, setIsVisible, profile }) => {
  const durationOptions = ["Last Month", "Last 3 Months", "Last Year", "Customize Date Range"];
  const departmentOptions = ['CSE', 'EEE', 'ECE', 'CYBER', 'IT', 'AI', 'MECH', 'AGRI'];
  const yearOptions=["First","Second","Third","Fourth"];
  const sectionOptions=["A","B","C","D","E"];
  const [selectedDuration, setSelectedDuration] = useState([]);
  const [selectedDepartments,setSelectedDepartments]=useState([]);
  const [selectedYear, setSelectedYear]=useState([]);
  const [selectedSection,setSelectedSection]=useState([]);
  const [isApply,setIsApply]=useState(false);
  const [date,setDate]=useState(null);
  const [isCalender,setIsCalender]=useState(false);

  useEffect(()=>{
    if(selectedDuration.length>0 || selectedDepartments.length>0 || selectedYear.length>0 || selectedSection.length>0)
    {
      setIsApply(true);
    }
    else
    {
      setIsApply(false);
    }
  },[selectedDuration,selectedDepartments,selectedYear,selectedSection]);

  useEffect(()=>{
    setSelectedDepartments([]);
    setSelectedDuration([]);
    setSelectedYear([]);
    setSelectedSection([]);
  },[profile])

  const handleCalenderClose=()=>{
    setIsCalender(false);
  }

  
  const handleDurationChange = (event) => {
      const {
        target: { value },
      } = event;
      setSelectedDuration(typeof value === 'string' ? value.split(',') : value);
    };

    const handleDepartmentChange = (event) => {
      const {
        target: { value },
      } = event;
      setSelectedDepartments(typeof value === 'string' ? value.split(',') : value);
    };

    const handleYearChange = (event) => {
      const {
        target: { value },
      } = event;
      setSelectedYear(typeof value === 'string' ? value.split(',') : value);
    };

    const handleSectionChange = (event) => {
      const {
        target: { value },
      } = event;
      setSelectedSection(typeof value === 'string' ? value.split(',') : value);
    };

  
  return (
    <div>
    <Sidebar visible={isVisible} position="right" onHide={() => setIsVisible(false)}>
      <Typography variant="h6" color="black">Filter</Typography>
        <Grid container rowSpacing={profile==="Student"?45:55} direction={"column"}>
          <Grid item>
            <FormControl fullWidth variant="standard">
          <InputLabel
            sx={{
              color: "#5E5E5E",
              '&.Mui-focused': { color: "#5E5E5E" },
            }}
          >
            Duration
          </InputLabel>
          <Select
            multiple
            value={selectedDuration}
            onChange={handleDurationChange}
            renderValue={(selected) => selected.join(', ')}
            disableUnderline
            sx={{
              '&:focus': { borderColor: "#5E5E5E" },
              '& .MuiSelect-icon': { color: "#5E5E5E" },
              '& .Mui-focused .MuiSelect-select': {
                borderColor: "#5E5E5E",
              },
            }}
          >
            {durationOptions.map((duration) => (
              <MenuItem key={duration} value={duration}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <ListItemText primary={duration} />
                  <Checkbox
                    edge="end"
                    checked={selectedDuration.indexOf(duration) > -1}
                    sx={{
                      borderRadius: '4px',
                      padding: '3px',
                      color: '#286F67',
                      '&.Mui-checked': {
                        color: '#286F67',
                      },
                      '&.Mui-checked': {
                        color: "#286F67",
                      },
                    }}
                  />
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth variant="standard">
                  <InputLabel
                    sx={{
                      color: "#5E5E5E",
                      '&.Mui-focused': { color: "#5E5E5E" },
                    }}
                  >
                    Department
                  </InputLabel>
                  <Select
                    multiple
                    value={selectedDepartments}
                    onChange={handleDepartmentChange}
                    renderValue={(selected) => selected.join(', ')}
                    disableUnderline
                    sx={{
                      '&:focus': { borderColor: "#5E5E5E" },
                      '& .MuiSelect-icon': { color: "#5E5E5E" },
                      '& .Mui-focused .MuiSelect-select': {
                        borderColor: "#5E5E5E",
                      },
                    }}
                  >
                    {departmentOptions.map((dept) => (
                      <MenuItem key={dept} value={dept}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                          }}
                        >
                          <ListItemText primary={dept} />
                          <Checkbox
                            edge="end"
                            checked={selectedDepartments.indexOf(dept) > -1}
                            sx={{
                              borderRadius: '4px',
                              padding: '3px',
                              color: '#286F67',
                              '&.Mui-checked': {
                                color: '#286F67',
                              },
                              '&.Mui-checked': {
                                color: "#286F67",
                              },
                            }}
                          />
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {profile==="Student" && 
                <div>
                                  <FormControl fullWidth variant="standard">
                  <InputLabel
                    sx={{
                      color: "#5E5E5E",
                      '&.Mui-focused': { color: "#5E5E5E" },
                    }}
                  >
                    Year
                  </InputLabel>
                  <Select
                    multiple
                    value={selectedYear}
                    onChange={handleYearChange}
                    renderValue={(selected) => selected.join(', ')}
                    disableUnderline
                    sx={{
                      '&:focus': { borderColor: "#5E5E5E" },
                      '& .MuiSelect-icon': { color: "#5E5E5E" },
                      '& .Mui-focused .MuiSelect-select': {
                        borderColor: "#5E5E5E",
                      },
                    }}
                  >
                    {yearOptions.map((year) => (
                      <MenuItem key={year} value={year}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                          }}
                        >
                          <ListItemText primary={year} />
                          <Checkbox
                            edge="end"
                            checked={selectedYear.indexOf(year) > -1}
                            sx={{
                              borderRadius: '4px',
                              padding: '3px',
                              color: '#286F67',
                              '&.Mui-checked': {
                                color: '#286F67',
                              },
                              '&.Mui-checked': {
                                color: "#286F67",
                              },
                            }}
                          />
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="standard">
                  <InputLabel
                    sx={{
                      color: "#5E5E5E",
                      '&.Mui-focused': { color: "#5E5E5E" },
                    }}
                  >
                    Section
                  </InputLabel>
                  <Select
                    multiple
                    value={selectedSection}
                    onChange={handleSectionChange}
                    renderValue={(selected) => selected.join(', ')}
                    disableUnderline
                    sx={{
                      '&:focus': { borderColor: "#5E5E5E" },
                      '& .MuiSelect-icon': { color: "#5E5E5E" },
                      '& .Mui-focused .MuiSelect-select': {
                        borderColor: "#5E5E5E",
                      },
                    }}
                  >
                    {sectionOptions.map((section) => (
                      <MenuItem key={section} value={section}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                          }}
                        >
                          <ListItemText primary={section} />
                          <Checkbox
                            edge="end"
                            checked={selectedSection.indexOf(section) > -1}
                            sx={{
                              borderRadius: '4px',
                              padding: '3px',
                              color: '#286F67',
                              '&.Mui-checked': {
                                color: '#286F67',
                              },
                              '&.Mui-checked': {
                                color: "#286F67",
                              },
                            }}
                          />
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </div>
                }
          </Grid>
          <Grid item sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {isApply &&
        <Button sx={{
        backgroundColor: '#286F67',
        borderRadius: 2,
        height: 35,
        width: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:"white",
        textTransform:"none"
      }}
      onClick={()=>setIsCalender(true)}
      >Apply</Button>
        }
          </Grid>
        </Grid>
    </Sidebar>

    <Dialog
            fullWidth
            slotProps={{
              paper: {
                sx: {
                  maxWidth: 600,
                  borderRadius:10,
                  minHeight: 500
                },
              },
            }}
            open={isCalender}
          >
          <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
          <Grid container spacing={2} justifyContent={"flex-end"} mt={3} mr={2}>
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
              onClick={()=>handleCalenderClose()}
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
              onClick={()=>handleCalenderClose()}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Dialog>
  </div>
  );
};

export default Filter;
