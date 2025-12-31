import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import TablePage from "./pages/TablePage";
import SummaryPage from "./pages/SummaryPage";

const router = createBrowserRouter([
  {path: "/", element: <HomePage restaurantName={" HOTEL ALPHA "}/>},
  {path: "/:tableId", element: <TablePage />},
  {path: "/summary", element: <SummaryPage />},
 
],
 {basename: "/food-repo"})

function App() {
  return <RouterProvider router={router}/>;
}

export default App;