import React from "react";
import './pagescss/sidebar.css';
import { NavLink,Outlet} from "react-router-dom";
import {Home,
        User,
        LayoutDashboard ,
        ArrowLeftRight,
        CreditCard,
        BadgeDollarSign,
        ChartCandlestick,
        ReceiptIndianRupee,
        LogOut
} from 'lucide-react'

function Sidebar(){
    return(
        <>
        <div className="layout">
        <div className="sidebar">
            <div className="sidebar-top">
            <div className="sidebar-heading">
               DIGITAL <br /> WALLET
            </div>
            <hr />
            <div className="items"><NavLink className="link-item" to="/dashboard">
                    <LayoutDashboard /> Dashboard
                    </NavLink></div>
            <div className="items"><NavLink className="link-item" to="/carddetails">
                    <CreditCard /> Card Details
                    </NavLink></div>
            <div className="items"><NavLink className="link-item" to="/transactions">
                    <ArrowLeftRight/> Transactions
                    </NavLink></div>
            <div className="items"><NavLink className="link-item" to="/payments">
                    <BadgeDollarSign/> Payments
                    </NavLink></div>
            <div className="items"><NavLink className="link-item" to="/billandtax">
                    <ReceiptIndianRupee/> Bill & Tax
                    </NavLink></div>
            <div className="items"><NavLink className="link-item" to="/trading">
                    <ChartCandlestick/> Trading
                    </NavLink></div>
            <div className="items"><NavLink className="link-item" to="/profile">
                    <User/> Profile
                    </NavLink></div>
            </div>
            <div className="sidebar-bottom">
            <hr />
            <div className="items"><LogOut/>logout</div>
            </div>
        </div>
        <main className="content-area">
            <Outlet/>
        </main>
        </div>
        </>
    )
};

export default Sidebar;