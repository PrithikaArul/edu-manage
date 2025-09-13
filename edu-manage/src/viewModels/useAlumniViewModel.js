import {useState,useEffect} from "react";

const data=[{"name":"Pritika K","department":"Electrical Engineering","phoneNo":"945978876","email":"prit.k@gmail.com","batch":"2018-22","profileImage":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fbusiness-woman-professional.html&psig=AOvVaw3eMFMt60iM90fuenTssli1&ust=1747674942944000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICFvNjCrY0DFQAAAAAdAAAAABAE"}];

for(let i=0;i<11;i++)
{
    data.push({"name":"Sharmitha K","department":"Computer Science Engineering","phoneNo":"9646378876","email":"sharmitha.k@gmail.com","batch":"2017-21","profileImage":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fbusiness-woman-professional.html&psig=AOvVaw3eMFMt60iM90fuenTssli1&ust=1747674942944000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICFvNjCrY0DFQAAAAAdAAAAABAE"});
}

export const useAlumniViewModel=()=>{
    const [alumni,setAlumni]=useState([]);


    useEffect(()=>{
        fetchAlumni();
    },[]);

    const fetchAlumni=()=>{
        setAlumni(data);
    }

    return alumni;
}