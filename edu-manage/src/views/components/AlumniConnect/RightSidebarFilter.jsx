import React, { useState, useEffect } from 'react';
import {
  Drawer,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Button
} from '@mui/material';


const RightSidebarFilter = ({ open, onClose,setBatchFilter,setDepartmentsFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const batchOptions=['2013-17','2017-21','2022-26'];
  const departmentOptions = ['CSE', 'EEE', 'ECE', 'CYBER', 'IT', 'AI', 'MECH', 'AGRI'];
  const [isApply,setIsApply]=useState(false);
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const handleFilterApply=()=>{
    setBatchFilter(selectedBatch);
    setDepartmentsFilter(selectedDepartments);
    handleClose();
  }

  useEffect(()=>{
      if(selectedDepartments.length>0 || selectedBatch!=null)
      {
        setIsApply(true);
      }
      else
      {
        setIsApply(false);
      }
    },[selectedDepartments,selectedBatch]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleDepartmentChange = (event) => {
      const {
        target: { value },
      } = event;
      setSelectedDepartments(typeof value === 'string' ? value.split(',') : value);
      // console.log(selectedDepartments);
    };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: 250,
          padding: 2,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        role="presentation"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Escape') handleClose();
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Filter
        </Typography>

        {/* Batch Dropdown */}
        <FormControl fullWidth variant="standard" sx={{ mb: 3 }}>
          <InputLabel
            sx={{
                color:"#5E5E5E",
              '&.Mui-focused': { color: "#5E5E5E" },
            }}
          >
            Batch
          </InputLabel>
          <Select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            label="Batch"
            disableUnderline
            sx={{
              '&:focus': { borderColor: "#5E5E5E" },
              '& .MuiSelect-icon': { color: "#5E5E5E" },
              '& .Mui-focused .MuiSelect-select': {
                borderColor: "#5E5E5E",
              },
            }}
          >
            <MenuItem value="2017-21">2017-21</MenuItem>
            <MenuItem value="2018-22">2018-22</MenuItem>
            <MenuItem value="2019-23">2019-23</MenuItem>
          </Select>
        </FormControl>

        {/* Department Dropdown */}
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
            onChange={(e)=>handleDepartmentChange(e)}
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
      </Box>
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
              textTransform:"none",
              marginTop:55
            }}
            onClick={handleFilterApply}
            >Apply</Button>
              }
        </Box>
    </Drawer>
  );
};

export default RightSidebarFilter;
