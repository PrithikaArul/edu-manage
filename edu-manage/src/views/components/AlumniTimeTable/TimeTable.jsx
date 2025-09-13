import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import leftNavigation from "../../../assets/leftNavigation.png";
import rightNavigation from "../../../assets/rightNavigation.png";
import calender from "../../../assets/icons/calender.png";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Dropdown } from "primereact/dropdown";
import { Button } from "@mui/material";

const timetable = [
  {
    time: "09:00 AM",
    title: "Artificial Intelligence",
    prof: "Prof. Arun M",
    room: "CSE-101",
    color: "#2196f3",
  },
  {
    time: "09:50 AM",
    title: "Data Structure",
    prof: "Prof. Priya J",
    room: "CSE-102",
    color: "#ff9800",
  },
  { time: "10:40 AM", title: "Break", color: "#90a4ae" },
  { time: "10:55 AM", title: "Department Meeting", color: "#9c27b0" },
  { time: "11:45 AM", title: "Lunch", color: "#607d8b" },
];

// Filter dropdown options and state
const departments = [
  { label: "CSE", value: "CSE" },
  { label: "ECE", value: "ECE" },
  { label: "EEE", value: "EEE" },
];
const years = [
  { label: "1st Year", value: "1" },
  { label: "2nd Year", value: "2" },
  { label: "3rd Year", value: "3" },
  { label: "4th Year", value: "4" },
];
const sections = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
  { label: "C", value: "C" },
];

export default function TimeTable() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const currentDate = new Date();
    return currentDate;
  });

  const surroundingDates = getSurroundingDates(selectedDate);

  // Sidebar as a sliding Drawer from the right
  const [filterOpen, setFilterOpen] = useState(false);
  const [department, setDepartment] = useState(null);
  const [year, setYear] = useState(null);
  const [section, setSection] = useState(null);

  function getSurroundingDates(centerDate) {
    const dates = [];
    for (let i = -2; i <= 2; i++) {
      const newDate = new Date(centerDate);
      newDate.setDate(centerDate.getDate() + i);
      dates.push(newDate);
    }
    return dates;
  }

  const goToPreviousDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const goToNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Drawer
        anchor="right"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        slotProps={{
          sx: {
            width: 260,
            minWidth: 220,
            p: 2,
            background: "#fff",
            height: "100vh",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
          <IconButton size="small" onClick={() => setFilterOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="h6" fontWeight={700} mb={2}>
          Filter
        </Typography>
        {/* Department */}
        <Box sx={{ mb: 2 }}>
          <Dropdown
            value={department}
            onChange={(e) => setDepartment(e.value)}
            options={departments}
            optionLabel="label"
            optionValue="value"
            placeholder="Department"
            style={{ width: "100%" }}
            showClear
          />
        </Box>
        {/* Year */}
        <Box sx={{ mb: 2 }}>
          <Dropdown
            value={year}
            onChange={(e) => setYear(e.value)}
            options={years}
            optionLabel="label"
            placeholder="Year"
            style={{ width: "100%" }}
            showClear
          />
        </Box>
        {/* Section */}
        <Box sx={{ mb: 2 }}>
          <Dropdown
            value={section}
            onChange={(e) => setSection(e.value)}
            options={sections}
            optionLabel="label"
            placeholder="Section"
            style={{ width: "100%" }}
            showClear
          />
        </Box>
        <Divider sx={{ mt: 2 }} />
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flex: 1, marginTop: 5 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            // minWidth={{xs:500,lg:900}}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Grid item sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Button onClick={() => goToPreviousDay()}>
                <img height="40" width="40" src={leftNavigation} />
              </Button>
            </Grid>
            <Grid
              item
              marginLeft={{ md: 40 }}
              marginRight={{ md: 40 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  gap: 1.5,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                <img src={calender} height={15} style={{marginBottom:"-2px",marginRight:"2px"}} />
                <Typography variant="h7" fontWeight={700} marginTop={-2} color="black">
                  {selectedDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Typography>
              </Box>
            </Grid>
            <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => goToNextDay()}>
                <img height="40" width="40" src={rightNavigation} />
              </Button>
            </Grid>
          </Grid>
        </div>

        {/* Days Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            gap={{ xs: 0, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
              width: "100%",
              marginTop: "30px",
            }}
          >
            {surroundingDates.map((date, idx) => {
              const isSelected =
                date.toDateString() === selectedDate.toDateString();
              const dayNumber = date.getDate();
              const weekday = date.toLocaleDateString("en-US", {
                weekday: "short",
              });

              return (
                <Box
                  key={date}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: 60,
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedDate(date)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: 3,
                      background: isSelected ? "#357a6e" : "transparent",
                      color: isSelected ? "#fff" : "#357a6e",
                      px: 2,
                      py: 1,
                      boxShadow: isSelected
                        ? "0 2px 8px rgba(53,122,110,0.15)"
                        : "none",
                      border: isSelected
                        ? "2px solid #357a6e"
                        : "2px solid transparent",
                      transition: "background 0.2s, border 0.2s",
                      fontWeight: isSelected ? 700 : 500,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "transparent",
                        color: isSelected ? "#fff" : "#357a6e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: isSelected ? 700 : 500,
                        mb: 0.5,
                        border: "none",
                        transition: "background 0.2s, border 0.2s",
                      }}
                    >
                      {dayNumber}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: isSelected ? 700 : 500,
                        color: isSelected ? "#fff" : "#357a6e",
                      }}
                    >
                      {weekday}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </div>

        {/* Time Table */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 900,
              px: 0,
              py: 3,
            }}
          >
            {timetable.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: idx === timetable.length - 1 ? 0 : 2.5,
                  px: 3,
                }}
              >
                {/* Time */}
                <Box sx={{ pr: 1, pt: 1 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 500, color: "black" }}
                  >
                    {item.time}
                  </Typography>
                </Box>
                {/* Event Card */}
                <Paper
                  elevation={2}
                  sx={{
                    flex: 1,
                    borderLeft: `5px solid ${item.color}`,
                    background: "#fff",
                    px: 2.5,
                    py: 1.5,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxHeight: 60,
                    minHeight: 50,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" fontWeight={600}>
                      {item.title}
                    </Typography>
                  </Box>
                  {item.prof && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        ml: 2,
                      }}
                    >
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontWeight: 500, color: "black" }}
                      >
                        {item.prof}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontWeight: 400, color: "black" }}
                      >
                        {item.room}
                      </Typography>
                    </Box>
                  )}
                </Paper>
              </Box>
            ))}
          </Box>
        </div>
      </Box>
    </Box>
  );
}
