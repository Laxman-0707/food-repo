import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "../styles/SummaryPage.css";

function SummaryPage() {
    const navigate = useNavigate();

    return (
        <div className="SummaryContainer">
            <div className="SummaryCard">
                <CheckCircleOutlineIcon style={{ fontSize: "100px", color: "#10b981" }} />
                <h1>Order Successful</h1>
                <p>Payment recorded and table is now vacant.</p>
                <button className="HomeBtn" onClick={() => navigate("/")}>Go to Home</button>
            </div>
        </div>
    );
}

export default SummaryPage;