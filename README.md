🍽️ Hotel Alpha - Restaurant POS & Table Management System
A professional, real-time Restaurant Point of Sale (POS) and Table Management application built with React.js and Redux Toolkit.
This system is designed for "HOTEL ALPHA" to streamline table bookings, order processing, and sales tracking

Hello this is my front end react restaurant pos app which is used to book the table, Take orders from the customers and proceed them to the kitchen,
manages the tables, orders and customers, and also it handles the payment.
The main interface of the web app looks like this:
<img src="https://github.com/user-attachments/assets/da4f4d1d-1532-4539-9af3-d1b603b8e424" width="100%" alt="Restaurant POS Interface">

when we select any vacient table we need to enter the details of the customer, 
i created a modal which takes the details and also performs the form Validation.
<img width="1920" height="1008" alt="Screenshot 2025-12-31 120711" src="https://github.com/user-attachments/assets/7a7e0b65-a02c-4447-ba8f-ea8ac58dbde8" />

After a table has booked by the customer they can order the food out of different types of food item filters. 
This is pure dynamic data which gets from server side. But currently just a sample dummy data is being displayed.
<img width="1920" height="1080" alt="Screenshot 2025-12-31 120956" src="https://github.com/user-attachments/assets/559ea74a-738b-43f8-baac-8d7d47a994a6" />

We can select different types of food Items of different food types and they get added to cart.
This cart is individual to each table and also it displays the total cost and the count of food items selected
<img width="1920" height="1080" alt="Screenshot 2025-12-31 121010" src="https://github.com/user-attachments/assets/ab891bb7-6e5b-407f-abb4-456014e2c13b" />
💳 Order Fulfillment & Checkout Process
Once the customer has finished selecting their items, the application provides a streamlined workflow to finalize the transaction:
<img width="1920" height="1080" alt="Screenshot 2025-12-31 121032" src="https://github.com/user-attachments/assets/5c4c87bc-4f5f-4357-859c-149cfe267a47" />

This entire app is build using React, Redux, React-Router.

🚀 Features
Table Management: Visual representation of restaurant tables with status tracking.

Dynamic Menu: Filterable food categories (All, Fast Food, Drinks, Main Course, etc.).

Order System: Add/remove items to specific tables with real-time price calculations

Order Summary: Detailed breakdown of orders including tax and total calculations

Payment Integration: Modal-based payment processing and receipt generation

State Management: Powered by Redux for consistent data flow across components


🛠️ Tech Stack

  Frontend Library: React.js
  
  State Management: Redux (with react-redux)
  
  Styling: Custom CSS (Modular approach)
  
  Icons/Assets: SVG and PNG icons for food categories
  
  Routing: React Router

📂 Key File Structure

   src/store/index.js: The "brain" of the app. Contains the logic for managing tables, sales revenue, and order history.
   
   src/App.js: Configures the application routing for the Home, Table, and Summary pages.
   
   src/pages/HomePage.js: Renders the main dashboard and table grid.
   
   src/components/: Contains modular UI components like TableTile, OrderItem, and Payment modals.


