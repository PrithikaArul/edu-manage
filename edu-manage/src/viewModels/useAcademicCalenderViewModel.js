// This file is used to connect the view and the model of the academic calender component
import { useEffect,useState,createContext} from "react";


const data = [{
    "Month":"July 2025",
    "Dates":"16/06/2025",
    "Event":"College Reopens",
    "Type":"College Event",
    "Remarks":"Classses begin for all batches",
    "Action":["Edit"] }];
for(let i=0;i<100;i++)
{
    data.push(
        {
     "Month":"July 2025",
     "Dates":"16/06/2025 to 25/06/2025",
    "Event":"Internal Assessment - 1",
     "Type":"Internal Assessment",
    "Remarks":"Department wise scheduling",
"Action":["Edit"] });
}

export const useAcademicCalenderViewModel = () => {
    const [academicCalenderData, setAcademicCalenderData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = () => {
        setAcademicCalenderData(data);
    };

    return academicCalenderData;
}