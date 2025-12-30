import { createSlice, configureStore } from "@reduxjs/toolkit";

// Load data from browser memory to prevent loss on refresh
const loadState = () => {
    try {
        const saved = localStorage.getItem('hotelAlphaData');
        return saved ? JSON.parse(saved) : undefined;
    } catch (err) {
        return undefined;
    }
};

const initialState = [];
for (let i = 0; i < 10; i++) {
    initialState.push({
        tableId: i + 1,
        isBooked: false,
        customerName: "", 
        customerPhone: "",
        customerOrders: []
    });
}

const tableSlice = createSlice({
    name: "Table",
    initialState,
    reducers: {
        editCustomer(state, action) {
            const temp = state.find(table => table.tableId === action.payload.tableId);
            temp.customerName = action.payload.name;
            temp.customerPhone = action.payload.phone;
            temp.isBooked = action.payload.isBooked;
        },
        deleteCustomer(state, action) {
            const temp = state.find(table => table.tableId === action.payload.tableId);
            temp.customerName = "";
            temp.customerOrders = [];
            temp.isBooked = false;
            temp.customerPhone = "";
        },
        addFoodItems(state, action) {
            const temp = state.find(table => table.tableId === action.payload.tableId);
            const cur = temp.customerOrders;
            const check = cur.find(item => item.name === action.payload.foodItem.name);
            if (!check) {
                cur.push(action.payload.foodItem);
            } else {
                check.count++;
            }
        },
        removeFoodItems(state, action) {
            const temp = state.find(table => table.tableId === action.payload.tableId);
            const cur = temp.customerOrders;
            const check = cur.find(item => item.name === action.payload.foodItem.name);
            if (check) {
                if (check.count > 1) check.count--;
                else cur.splice(cur.indexOf(check), 1);
            }
        },
        deleteFoodItem(state, action) {
            const temp = state.find(table => table.tableId === action.payload.tableId);
            const check = temp.customerOrders.find(item => item.name === action.payload.foodItem.name);
            if (check) temp.customerOrders.splice(temp.customerOrders.indexOf(check), 1);
        },
        emptyCart(state, action) {
            const temp = state.find(table => table.tableId === action.payload.tableId);
            temp.customerOrders = [];
        }
    }
});

// NEW: Sales Slice to track total money earned
const salesSlice = createSlice({
    name: "Sales",
    initialState: { totalRevenue: 0 },
    reducers: {
        addSale(state, action) {
            state.totalRevenue += Number(action.payload);
        }
    }
});

// NEW: History Slice to keep a record of all completed orders
const historySlice = createSlice({
    name: "History",
    initialState: [],
    reducers: {
        saveToHistory(state, action) {
            state.push(action.payload);
        }
    }
});

const store = configureStore({
    reducer: {
        table: tableSlice.reducer,
        sales: salesSlice.reducer,
        history: historySlice.reducer
    },
    preloadedState: loadState()
});

// Automatically save to localStorage whenever state changes
store.subscribe(() => {
    localStorage.setItem('hotelAlphaData', JSON.stringify(store.getState()));
});

export const tableActions = tableSlice.actions;
export const salesActions = salesSlice.actions;
export const historyActions = historySlice.actions;


export default store;

