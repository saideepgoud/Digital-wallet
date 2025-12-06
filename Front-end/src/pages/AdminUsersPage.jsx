import { BrowserRouter ,Route,  Routes} from 'react-router-dom';
import './pagescss/adminuser.css'
import Sidebar from "./sidebar";
import Dashboard from './DashboardPage'
import CardDetails from './CardDetailsPage'
import Transactions from './TransactionsPage'
import Payments from './PaymentsPage'
import Bills from './Bills'
import Trading from './TradingPage'
import Profile from './ProfilePage'


function AdminUser(){
    return(
    <>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Sidebar/>}> 
            <Route index element={<Dashboard/>} /> 
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/carddetails" element={<CardDetails/>}/>
            <Route path="/transactions" element={<Transactions/>}/>
            <Route path="/payments" element={<Payments/>}/>
            <Route path="/billandtax" element={<Bills/>}/>
            <Route path="/trading" element={<Trading/>}/>
            <Route path="/profile" element={<Profile/>}/>
            </Route>
            </Routes>
        </BrowserRouter>

    </> 
    )
}

export default AdminUser;