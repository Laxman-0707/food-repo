import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "../styles/TableTile.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Modal from './Modal';

function TableTile({ number, status, background }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  function handleClick(){
    if(status === "Booked"){
      navigate(`${number}`)
    }
    else{
      setIsOpen(true)
    }
  }
  return (
    <>
      <div className='TableComponent' style={{ backgroundColor : background}} onClick={handleClick}>
          <h2>{`Table ${number}`}</h2>
          <div className="TableComponentStatus">
              <span>Status</span>
              <ArrowRightAltIcon />
              <p>{status}</p>
          </div>
      </div>
      <Modal tableId={number} open={isOpen} onClose={() => setIsOpen(false)}/>
    </>
  )
}

export default TableTile
