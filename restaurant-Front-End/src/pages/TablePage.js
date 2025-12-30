import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import OrderTile from "../components/OrderTile.js";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../styles/TablePage.css";
import Orders from "../components/Orders.js";
import Payment from "../components/Payment.js";
import FilterTile from "../components/FilterTile.js";
import { tableActions } from "../store/index.js";
import { data } from "./tempData.js";

function TablePage() {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tableId = parseInt(params.tableId);
    
    // SAFE SELECTOR: Returns undefined if ID doesn't exist
    const table = useSelector(state => state.table.find(t => t.tableId === tableId));
    
    const foodTypes = Object.keys(data);
    const [curData, setCurData] = useState("");

    function handleClearTable() {
        dispatch(tableActions.deleteCustomer({ tableId }));
        navigate("/");
    }

    // ERROR GUARD: Prevents "Cannot read properties of undefined"
    if (!table) {
        return (
            <div style={{color: 'white', textAlign: 'center', marginTop: '50px'}}>
                <h2>Table {tableId} not found</h2>
                <button onClick={() => navigate("/")}>Go Home</button>
            </div>
        );
    }

    return (
        <div className="table">
            <div className="Tableheader">
                <div className="TableLeft">
                    <IconButton onClick={() => navigate("/")}>
                        <ArrowBackIcon className='BackIcon'/>
                    </IconButton>
                    <div className='leftTableName'>
                        <h3>Table {tableId}</h3>
                        {/* SAFE ACCESS: Uses Optional Chaining */}
                        <h4>Customer: {table?.customerName || "Walking Customer"}</h4>
                    </div>
                </div>
                <div className="TableRight">
                    <div onClick={handleClearTable} className='tableButton'>
                        <h5>Clear Table</h5>
                    </div>
                </div>
            </div>
            <div className="TableBody">
                <div className="menu">
                    <div className="menuSelectors">
                        {foodTypes.map(item => (
                            <FilterTile 
                                key={item} 
                                name={item} 
                                count={data[item].length} 
                                background={"orange"} 
                                passData={(val) => setCurData(val)}
                            />
                        ))}
                    </div>
                    <div className="menuItems">
                        {curData ? data[curData].map(dataItem => (
                            <OrderTile 
                                tableId={tableId} 
                                name={dataItem.name} 
                                price={dataItem.price} 
                                key={dataItem.name}
                            />
                        )) : <p style={{color: 'gray'}}>Select a category</p>}
                    </div>
                </div>
                <div className="rightPart">
                    <div className="orders">
                        <Orders />
                    </div>
                    <div className="payments">
                        <Payment />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TablePage;