import { useEffect,useState } from "react";

export const useFeeManagementViewModel = () => {
    const [feeManagementData, setFeeManagementData] = useState([]);

    const data = [{ "ID": "STD1001", "Name": "Prathira", "Department": "CSE", "Semester Fee": "Paid", "Exam Fee": "Paid", "Arrear Fee": "", "Fines": "Unpaid", "Payment Link": "View", "Remainder": "" }];
for(let i=0;i<100;i++)
{
    data.push({ "ID": "STD100"+(i+2), "Name": "Prathira", "Department": "CSE", "Semester Fee": "Paid", "Exam Fee": "Paid", "Arrear Fee": "Paid", "Fines": "Unpaid", "Payment Link": "View", "Remainder": "Send" });
}

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = () => {
        setFeeManagementData(data);
    };
    

    return feeManagementData;
}