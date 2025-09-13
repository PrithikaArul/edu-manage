import AdminHome from "./views/components/AdminHome/AdminHome";
import FeeManagement from "./views/components/FeeManagement/FeeManagement";
import SideNavBar from "./views/components/shared/SideNavbar/SideNavbar";
import  Circular  from "./views/components/Circular/Circular";
import AcademicCalender  from "./views/components/AcademicCalender/AcademicCalender";
import AlumniConnect from "./views/components/AlumniConnect/AlumniConnect";
import Home from "./views/components/Home/Home";
import AlumniTimeTable from "./views/components/AlumniTimeTable/AlumniTimeTable";
import ProfileManagement from "./views/components/ProfileManagement/ProfileManagement";
import AttendanceOverview from "./views/components/AttendanceOverview/AttendanceOverview";

// Defines all the routes in the application
export const routes = [
    {path:'/',element:<AdminHome/>},
    { path: '/admin-home', element: <AdminHome /> },
    {path:"/fee-management", element:<FeeManagement />},
    {path:"/side-bar",element:<SideNavBar/>},
    {path:"/circular",element:<Circular/>},
    {path:"/academic-calender",element:<AcademicCalender/>},
    {path:"/alumni-connect",element:<AlumniConnect/>},
    {path:"/timetable",element:<AlumniTimeTable/>},
    {path:"/profile-management",element:<ProfileManagement/>},
    {path:"/attendance-overview",element:<AttendanceOverview/>}
];