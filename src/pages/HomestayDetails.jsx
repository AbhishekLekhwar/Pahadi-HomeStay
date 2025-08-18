import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaBed,
  FaWifi,
  FaParking,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { homestayService, userService } from "../services/Api";
import BookingForm from "../Components/BookingForm";
import ReviewSection from "../Components/ReviewSection";
import LoginRequiredModal from "../Components/LoginRequiredModal";

const HomestayDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [homestay, setHomestay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loadHomestay();
  }, [id]);

  const loadHomestay = async () => {
    try {
      const data = await homestayService.getHomestayById(id);
      setHomestay(data);
      setReviews(data.reviews || []);
    } catch (error) {
      console.error("Error loading homestay:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = (bookingData) => {
    const user = userService.getCurrentUser();
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    navigate("/booking-confirmation", {
      state: {
        homestay,
        bookingData,
        total: calculateTotal(bookingData),
      },
    });
  };

  const calculateTotal = (bookingData) => {
    const nights = Math.ceil(
      (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) /
        (1000 * 60 * 60 * 24)
    );
    return homestay.price * nights * bookingData.guests;
  };

  const handleAddReview = (newReview) => {
    const review = {
      ...newReview,
      user: userService.getCurrentUser()?.name || "Anonymous",
      date: new Date().toLocaleDateString(),
    };
    setReviews((prev) => [...prev, review]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!homestay) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Homestay not found
          </h2>
          <Link to="/" className="text-blue-600 hover:text-blue-500">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <img
                src={homestay.image}
                alt={homestay.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {homestay.name}
                  </h1>
                  <div className="flex items-center mt-2">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span className="text-gray-600">{homestay.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-lg font-semibold">
                      {homestay.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    ({reviews.length} reviews)
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                {homestay.detailedDescription}
              </p>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {homestay.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rooms */}
              {homestay.rooms && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Available Rooms
                  </h3>
                  <div className="space-y-3">
                    {homestay.rooms.map((room, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-semibold">{room.type}</h4>
                        <p className="text-gray-600">
                          ₹{room.price}/night • {room.capacity} guests
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {room.features.join(", ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* House Rules */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">House Rules</h3>
                <ul className="list-disc list-inside space-y-1">
                  {homestay.houseRules.map((rule, index) => (
                    <li key={index} className="text-gray-700">
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nearby Attractions */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Nearby Attractions
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {homestay.nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="text-gray-700">
                      {attraction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews */}
            <ReviewSection reviews={reviews} onAddReview={handleAddReview} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              {/* Host Info */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Host Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaUser className="text-gray-400 mr-2" />
                    <span>{homestay.hostName}</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-gray-400 mr-2" />
                    <span>{homestay.contact}</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-gray-400 mr-2" />
                    <span>{homestay.email}</span>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <BookingForm homestay={homestay} onSubmit={handleBooking} />
            </div>
          </div>
        </div>
      </div>

      <LoginRequiredModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        message="Please login to book this homestay"
      />
    </div>
  );
};

export default HomestayDetails;
