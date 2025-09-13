import Navbar from '../shared/Navbar/Navbar';
import { DataGrid } from './DataGrid';
import { TrendAnalysis } from './TrendAnalysis/TrendAnalysis';

const AdminHome = () => {
    return (
        <div class="admin-home">
            <Navbar />
            <DataGrid title="Institution Insights" subTitle="Trend Metrics"/>
            <TrendAnalysis/>
        </div>
    );
};

export default AdminHome;