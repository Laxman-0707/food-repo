import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import "../styles/OrderTile.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { tableActions } from '../store';

function OrderTile({ tableId, name, price }) {
    const dispatch = useDispatch();
    const table = useSelector(state => state.table.filter(table => table.tableId === tableId))
    const item = table[0].customerOrders.find(item => item.name === name)
    function handleIncrease(e){
        dispatch(tableActions.addFoodItems({ tableId, foodItem : {name, count : item ?  item.count + 1 : 1, price} }))
    }
    function handleDecrease(e){
        dispatch(tableActions.removeFoodItems({ tableId, foodItem : {name, count : item ? item.count - 1 : 0, price} }))
    }
  return (
    <div>
        <div className='MenuComponent'>
            <div className='leftSide'>
                <h2>{name}</h2>
                <p>{`₹ ${price}`}</p>
            </div>
            <div className="rightSide">
                <span className='countChange' onClick={handleIncrease}><AddIcon sx={{background: "#0e1229", borderRadius: "5px", padding: "5px"}}/></span>
                <span>{item ? item.count : 0}</span>
                <span className = "countChange" onClick={handleDecrease}><RemoveIcon sx={{background: "#0e1229", borderRadius: "5px", padding: "5px"}}/></span>
            </div>
        </div>
    </div>
  )
}

export default OrderTile
