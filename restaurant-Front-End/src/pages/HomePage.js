import React from 'react';
import { useSelector } from "react-redux";
import "../styles/Homepage.css"
import TableTile from "../components/TableTile"

function HomePage({ restaurantName }) {
  const tables = useSelector(state => state.table);
  const revenue = useSelector(state => state.sales.totalRevenue);
  
  return (
    <>
    <div className="Tableheader">
        <div className="TableLeft">
            <div className='leftTableName'>
                <h3>Welcome to {restaurantName}</h3>
            </div>
        </div>
        <div className="TableRight">
            <div className='TableRightOrders'>Total Sales: ₹{revenue.toFixed(2)}</div>
            <div className='TableRightCustomers'>Capacity: {tables.length} Tables</div>
        </div>
      </div>

      <div className="body">
        <div className="grid">
          {tables.map((table) => (
              <TableTile 
                key={table.tableId} 
                number={table.tableId} 
                status={table.isBooked ? "Booked" : "Vacant"} 
                background={table.isBooked ? "#ff8c00" : "#2e7d32"}
              />
          ))}
        </div>
      </div>
    </>
  )
};

export default HomePage;