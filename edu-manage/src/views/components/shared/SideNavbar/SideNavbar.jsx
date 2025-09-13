import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NavbarLogo from "../../../../../src/assets/NavbarLogo.png";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Circular from "../../Circular/Circular";
import Dialog from "@mui/material/Dialog";
import HomeIcon from "../../../../assets/icons/HomeIcon.png";
import AttendanceOverviewIcon from "../../../../assets/icons/AttendanceOverviewIcon.png";
import AlumniConnectIcon from "../../../../assets/icons/AlumniConnectIcon.png";
import AcademicCalenderIcon from "../../../../assets/icons/AcademicCalenderIcon.png";
import CircularIcon from "../../../../assets/icons/CircularIcon.png";
import FeeManagementIcon from "../../../../assets/icons/FeeManagementIcon.png";
import ProfileManagementIcon from "../../../../assets/icons/ProfileManagementIcon.png";
import LogoutIcon from "../../../../assets/icons/LogoutIcon.png";

export default function SideNavbar() {
  const [open, setOpen] = useState(false);
  const [circularOpen, setCircularOpen] = useState(false);
  const navigate = useNavigate();

  // Side Navbar Menu Items
  const sideNavMenu = [
    { title: "Home", icon: <img src={HomeIcon} />, path: "/admin-home" },
    {
      title: "Attendance Overview",
      icon: <img src={AttendanceOverviewIcon} />,
      path: "/attendance-overview",
    },
    {
      title: "Academic Calender",
      icon: <img src={AcademicCalenderIcon} />,
      path: "/academic-calender",
    },
    {
      title: "Fee Management",
      icon: <img src={FeeManagementIcon} />,
      path: "/fee-management",
    },
    {
      title: "Profile Management",
      icon: <img src={ProfileManagementIcon} />,
      path: "/profile-management",
    },
    {
      title: "Alumni Connect",
      icon: <img src={AlumniConnectIcon} />,
      path: "/alumni-connect",
    },
    { title: "Circular", icon: <img src={CircularIcon} />, path: "/circular" },
    {
      title: "Timetable",
      icon: <CalendarMonthOutlinedIcon />,
      path: "/timetable",
    },
  ];

  // Function to toggle the side bar
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleCircularOpen = () => {
    setCircularOpen(true);
  };

  const handleCircularClose = () => {
    setCircularOpen(false);
  };

  const handleCircularCloseFromChild = (isOpen) => {
    setCircularOpen(isOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <img
        src={NavbarLogo}
        style={{width:70, height:60, marginTop:20, marginLeft:"35%", marginRight:"35%"}}
        alt="logo"
      />
      <Grid container rowSpacing={17}>
        <Grid item>
          <List>
            {sideNavMenu.map((item) =>
              //For circular, the component is opened in the current page
              item.title === "Circular" ? (
                <ListItem
                  key={item.title}
                  disablePadding
                  onClick={() => handleCircularOpen()}
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#A9A9A9" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{ color: "#808080" }}
                    />
                  </ListItemButton>
                </ListItem>
              ) : (
                <ListItem
                  key={item.title}
                  disablePadding
                  onClick={() => navigate(item.path)}
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#A9A9A9" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{ color: "#808080" }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Grid>
        <Grid item>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#A9A9A9", marginLeft: -2 }}>
                  <img src={LogoutIcon} />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ color: "#808080" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        style={{ color: "black", marginLeft: 4, marginRight: 6 }}
      >
        <MenuOutlinedIcon style={{ width: 30, height: 30 }}></MenuOutlinedIcon>
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      {/*Dialog for displaying the circular*/}
      <Dialog
        fullWidth
        slotProps={{
          paper: {
            sx: {
              maxWidth: 800,
            },
          },
        }}
        open={circularOpen}
        onClose={handleCircularClose}
      >
        <Circular parentCircularOpenCall={handleCircularCloseFromChild} />
      </Dialog>
    </div>
  );
}
