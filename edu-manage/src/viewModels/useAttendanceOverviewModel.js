import {useState,useEffect} from "react";

const profData=[
        {"Professor Name":"Prathira","Department":"CSE","Total":"1500","Present":"1300","Absent":"200","Percentage":"90%"}
    ]

    const studData=[
        {"Student Name":"Prathira","Department":"CSE","Year":"First Year","Section":"A","Total":"1500","Present":"1300","Absent":"200","Percentage":"90%"}
    ]

    for(let i=0;i<20;i++)
    {
        profData.push({"Professor Name":"Prathira","Department":"CSE","Total":"1500","Present":"1300","Absent":"200","Percentage":"90%"});
        studData.push({"Student Name":"Prathira","Department":"CSE","Year":"First Year","Section":"A","Total":"1500","Present":"1300","Absent":"200","Percentage":"90%"});
    }
    
export const useAttendanceOverviewViewModel=()=>{
    const [profAttendanceData,setProfAttendanceData]=useState([]);
    const [studAttendanceData,setStudAttendanceData]=useState([]);

    useEffect(()=>{
        setData();
    },[]);


    const setData=()=>{
        setProfAttendanceData(profData);
        setStudAttendanceData(studData);
    }

    return{
        profAttendanceData,
        studAttendanceData
     };

}