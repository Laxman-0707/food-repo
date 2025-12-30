import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { tableActions, salesActions } from '../store/index';
import "../styles/Payment.css";

function Payment() {
  const { tableId } = useParams();
  const id = parseInt(tableId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const table = useSelector(state => state.table.find(t => t.tableId === id));
  const allItems = table?.customerOrders || [];
  
  const subtotal = allItems.reduce((res, item) => res + (item.price * item.count), 0);
  const gst = subtotal * 0.05;
  const grandTotal = subtotal + gst;

  function handlePlaceOrder() {
    if (subtotal > 0) {
      dispatch(salesActions.addSale(grandTotal)); 
      dispatch(tableActions.deleteCustomer({ tableId: id })); 
      navigate("/summary"); // This moves to the success screen
    }
  }

  return (
    <div className="orderPayment">
      <div className="orderPaymentBody">
        <div className="price-row"><p>Subtotal</p><p>₹{subtotal.toFixed(2)}</p></div>
        <div className="price-row"><p>GST (5%)</p><p>₹{gst.toFixed(2)}</p></div>
        <div className="price-row total-row"><p>Total</p><p>₹{grandTotal.toFixed(2)}</p></div>
      </div>
      <div className="orderPaymentFooter">
        <button onClick={handlePlaceOrder} type="button">Settle & Place Order</button>  
      </div>
    </div>
  );
}

export default Payment;