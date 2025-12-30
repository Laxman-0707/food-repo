import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tableActions } from "../store/index";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../styles/Modal.css";

function Modal({ tableId, open, onClose }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    if (!open) return null;

    function formHandler(e) {
        e.preventDefault();
        dispatch(tableActions.editCustomer({ tableId, name, phone, isBooked: true }));
        onClose();
        navigate(`/${tableId}`);
    }

    return (
        <>
            <div className="modalOverlay" onClick={onClose}></div>
            <form onSubmit={formHandler}>
                <div className="modal">
                    <AccountCircleIcon style={{ color: "#10b981", fontSize: "70px", marginBottom: "10px" }} />
                    <h2 className='modalHeader'>
                        Customer Details <br />
                        <p>of Table</p> <span>{tableId}</span>
                    </h2>
                    <input required placeholder='Full Name' type="text" className='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input required placeholder='Phone' type="text" className="phone" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="\d{10}" />
                    <button className='button'>Next</button>
                </div>
            </form>
        </>
    );
}

export default Modal;