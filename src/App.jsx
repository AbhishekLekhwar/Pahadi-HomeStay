import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Listening from "./pages/Listening";
import HomestayDetails from "./pages/HomestayDetails";
import HostProfiles from "./pages/HostProfiles";
import HomestayListings from "./pages/HomestayListings";
import Addhomestay from "./pages/Addhomestay";
import BookingConfirmation from "./pages/BookingConfirmation";
import HostDashboard from "./pages/HostDashboard";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/listening" element={<Listening />} />
            <Route path="/homestay/:id" element={<HomestayDetails />} />
            <Route path="/hosts/:destinationName" element={<HostProfiles />} />
            <Route
              path="/homestays/:destination"
              element={<HomestayListings />}
            />
            <Route path="/add-homestay" element={<Addhomestay />} />
            <Route
              path="/booking-confirmation"
              element={<BookingConfirmation />}
            />
            <Route path="/host-dashboard" element={<HostDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
