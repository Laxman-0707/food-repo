import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { tableActions } from '../store/index';
import OrderItem from "./OrderItem"; 
import "../styles/Orders.css";

function Orders() {
  const params = useParams();
  const dispatch = useDispatch();
  const tableId = parseInt(params.tableId);
  
  // Using .find() instead of .filter() for stability
  const table = useSelector(state => state.table.find(t => t.tableId === tableId));
  const items = table?.customerOrders || [];

  return (
    <div className="orderContents">
      <div className="orderContentsHeader">
        <div className="leftOrderContents">
          <h3>Table {tableId}</h3>
          <p>{table?.customerName}</p>
        </div>
        <div className="rightOrderContents">
          {/* This now calls the fixed emptyCart function */}
          <DeleteIcon onClick={() => dispatch(tableActions.emptyCart({ tableId }))}/>
        </div>
      </div>
      <div className={items.length === 0 ? "empty" : "orderContentsBody"}>
        {items.length !== 0 ? (
          items.map((item, index) => (
            <OrderItem 
              key={item.name} 
              name={item.name} 
              price={item.price} 
              index={index + 1} 
            />
          ))
        ) : (
          <div className="no-items">
            <ShoppingCartIcon />
            <p>No Items Added</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;