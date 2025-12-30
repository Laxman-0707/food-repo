import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { tableActions } from '../store/index';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function OrderItem({ name, price, index }) {
    const params = useParams();
    const dispatch = useDispatch();
    const tableId = parseInt(params.tableId);
    
    const table = useSelector(state => state.table.find(t => t.tableId === tableId));
    const item = table?.customerOrders.find(i => i.name === name);

    if (!item) return null;

    return (
        <div className='OrderItem'>
            {/* ... your colorful JSX ... */}
            <div className="OrderItemTop">
                <div className="left"><h2>{index}. {name}</h2></div>
                <div className="right"><h2>₹{price * item.count}</h2></div>
            </div>
            <div className="OrderItemBottom">
                <div className="counter">
                    <span onClick={() => dispatch(tableActions.addFoodItems({ tableId, foodItem: {name, price} }))}>
                        <AddIcon sx={{background: "#2c335c", borderRadius: "5px", padding: "5px"}}/>
                    </span>
                    <span>{item.count}</span>
                    <span onClick={() => dispatch(tableActions.removeFoodItems({ tableId, foodItem: {name, price} }))}>
                        <RemoveIcon sx={{background: "#2c335c", borderRadius: "5px", padding: "5px"}}/>
                    </span>
                </div>
                <DeleteIcon onClick={() => dispatch(tableActions.deleteFoodItem({ tableId, foodItem: {name} }))}/>
            </div>
        </div>
    );
}

// MAKE SURE THIS LINE IS HERE
export default OrderItem;