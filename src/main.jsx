import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./routes/AdminLayout.jsx";
import Dashboard from "./pages/ADMIN-PAGES/Dashboard.jsx";
import Booking from "./pages/ADMIN-PAGES/Booking/Booking.jsx";
import AddTour from "./pages//ADMIN-PAGES/AddTour/AddTour.jsx";
import Listing from "./pages/ADMIN-PAGES/Listing.jsx";
import FavoriteTour from "./pages/ADMIN-PAGES/FavoriteTour.jsx";
import Messages from "./pages/ADMIN-PAGES/Messages.jsx";
import Profile from "./pages/ADMIN-PAGES/Profile.jsx";
import Logout from "./pages/ADMIN-PAGES/Logout.jsx";
import Home from "./pages/USERSIDE-PAGES/Home.jsx";
import ToursListed from "./pages/USERSIDE-PAGES/ToursListed.jsx";
import TourDetailPage from "./pages/USERSIDE-PAGES/TourDetailPage.jsx";
import Blog from "./pages/USERSIDE-PAGES/Blog.jsx";
import BlogDetail from "./pages/USERSIDE-PAGES/BlogDetail.jsx";
import Register from "./pages/USERSIDE-PAGES/Register.jsx";
import Login from "./pages/USERSIDE-PAGES/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/tourslist", element: <ToursListed/> },
      { path: "/tourdetails", element: <TourDetailPage/> },
      { path: "/blogs", element: <Blog/> },
      { path: "/blogdetails", element: <BlogDetail/> },
      { path: "/register", element: <Register/> },
      { path: "/login", element: <Login/> },

    ],
  },
  {
    path: "/admin",
    element: <AdminLayout/>  ,
    children: [
      { path: "/admin", element: <Dashboard /> },
      { path: "admin/booking", element: <Booking /> },
      { path: "admin/add-tour", element: <AddTour /> },
      { path: "admin/listing", element: <Listing /> },
      { path: "admin/favorites", element: <FavoriteTour /> },
      { path: "admin/messages", element: <Messages /> },
      { path: "admin/user-profile", element: <Profile /> },
      { path: "admin/user-logout", element: <Logout /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

