import {useState,useEffect} from "react";

const profData=[{"ID":"PF1001","Professor Name":"Parathira","Designation":"Assistant Professor","Department":"CSE","Email ID":"prathira@gmail.com","Contact Number":"9876543210","Action":["Edit","Delete"]}];

for(let i=0;i<20;i++)
{
    profData.push({"ID":"PF1001","Professor Name":"Parathira","Designation":"Assistant Professor","Department":"CSE","Email ID":"prathira@gmail.com","Contact Number":"9876543210","Action":["Edit","Delete"]});
}

const studData=[{"ID":"STD1001","Student Name":"Prathira","Department":"CSE","Year":"First Year","Section":"A","Email ID":"prathira@gmail.com","Contact Number":"984775784","Status":"Active","Action":["Edit","Delete"]}];

for(let i=0;i<20;i++)
{
    studData.push({"ID":"STD1001","Student Name":"Prathira","Department":"CSE","Year":"First Year","Section":"A","Email ID":"prathira@gmail.com","Contact Number":"984775784","Status":"Active","Action":["Edit","Delete"]});
}

export const useProfileManagementViewModel=()=>{

    const [profProfileData,setProfProfileData]=useState([]);
    const [studProfileData,setStudProfileData]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=()=>{
        setProfProfileData(profData);
        setStudProfileData(studData);
    }

    return{
        profProfileData,studProfileData
    };
};