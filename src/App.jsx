import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Footer from "./components/Footer";
import CarDetails from "./pages/CarDetails";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MyBookings from "./pages/MyBookings";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ListCar from "./pages/owner/ListCar";
import Sidebar from "./components/owner/Sidebar"; // ✅ added

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");

  return (
    <main>
      {/* Optional: hide Header/Footer for owner routes */}
      {!isOwnerPath && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<CarDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-booking" element={<MyBookings />} />

        {/* ✅ Nested owner routes */}
        <Route path="/owner" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="list-car" element={<ListCar />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </main>
  );
};

export default App;

