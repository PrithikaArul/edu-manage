import { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Table from '../shared/Table/Table';
import { DataGrid } from './DataGrid';
import { useFeeManagementViewModel } from '../../../viewModels/useFeeManagementViewModel';


const FeeManagement = () => {

    // Data is being fetched from the view model
    const data = useFeeManagementViewModel();
    const [tableData, setTableData] = useState(data);
    const [isExport,setIsExport]=useState(false);

    return (
        <div>
           <Navbar />
           <DataGrid title="Fee Management" setIsExport={setIsExport}/>
           <Table component={"FeeManagement"} tableData={data} setTableData={setTableData} isExport={isExport} setIsExport={setIsExport}/>
        </div>
    );
};

export default FeeManagement;