import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import "../styles/Summary.css";

function Summary() {
    const { totalRevenue, history } = useSelector(state => state.sales);
    const navigate = useNavigate();

    return (
        <div className="summaryPage">
            <div className="SummaryHeader">
                <IconButton onClick={() => navigate("/")}><ArrowBackIcon style={{color: 'white'}}/></IconButton>
                <h1>Daily Revenue Summary</h1>
            </div>

            <div className="RevenueCard">
                <p>Total Collection</p>
                <h2>₹ {totalRevenue.toFixed(2)}</h2>
            </div>

            <div className="HistoryList">
                <h3>Transaction History</h3>
                {history.length === 0 ? <p>No sales yet today.</p> : 
                    history.map((sale, index) => (
                        <div className="HistoryItem" key={index}>
                            <div className="saleInfo">
                                <strong>{sale.customerName}</strong>
                                <span>Table {sale.tableId} • {sale.time}</span>
                            </div>
                            <div className="saleAmount">₹ {sale.amount.toFixed(2)}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Summary;