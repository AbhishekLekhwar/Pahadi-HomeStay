import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaMountain,
  FaWallet,
  FaShieldAlt,
  FaUsers,
  FaStar,
} from "react-icons/fa";

function Listening() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Uttarakhand Homestays
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic Himalayan hospitality and create unforgettable
            memories in the heart of Uttarakhand
          </p>
        </div>

        {/* Purpose Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaMountain className="mr-3 text-blue-600" />
            Our Purpose
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Uttarakhand Homestays was created with a singular vision: to
              bridge the gap between travelers seeking authentic Himalayan
              experiences and local hosts who open their homes and hearts to
              visitors. We believe that the true essence of travel lies not just
              in seeing new places, but in living them.
            </p>
            <p>
              Our platform serves as a trusted marketplace where travelers can
              discover unique homestays across Uttarakhand's most beautiful
              destinations - from the spiritual banks of Rishikesh to the
              snow-capped peaks of Auli, from the serene lakes of Nainital to
              the pristine valleys of Almora.
            </p>
            <p>
              We are more than just a booking platform; we are facilitators of
              cultural exchange, sustainable tourism, and economic empowerment
              for local communities. Every booking made through our platform
              directly contributes to the livelihood of local families and helps
              preserve the rich cultural heritage of Uttarakhand.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaStar className="mr-3 text-blue-600" />
            Why Choose Uttarakhand Homestays?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Advantage 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaHome className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Authentic Local Experiences
                </h3>
                <p className="text-gray-700">
                  Stay with local families who share their culture, traditions,
                  and insider knowledge of hidden gems that typical tourists
                  never discover. Experience Uttarakhand like a local, not a
                  tourist.
                </p>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaWallet className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Affordable Luxury
                </h3>
                <p className="text-gray-700">
                  Enjoy comfortable accommodations at prices that won't break
                  the bank. Our homestays offer exceptional value, often
                  including home-cooked meals and local experiences that would
                  cost extra at hotels.
                </p>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaShieldAlt className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Verified & Secure
                </h3>
                <p className="text-gray-700">
                  Every homestay on our platform is personally verified by our
                  team. We ensure safety standards, quality accommodations, and
                  genuine hospitality so you can book with complete confidence.
                </p>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaUsers className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Support Local Communities
                </h3>
                <p className="text-gray-700">
                  Your stay directly benefits local families and communities. By
                  choosing homestays, you're contributing to sustainable tourism
                  and helping preserve local culture and traditions for future
                  generations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Platform Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">100+</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Homestays</h3>
              <p className="text-gray-600 text-sm">
                Carefully curated homestays across Uttarakhand's most beautiful
                destinations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">24/7</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock customer support to assist with bookings and
                travel needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">₹0</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Booking Fees</h3>
              <p className="text-gray-600 text-sm">
                No hidden charges or booking fees - pay only for your stay
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Experience Authentic Uttarakhand?
          </h2>
          <p className="text-blue-100 mb-6">
            Join thousands of travelers who have discovered the magic of
            homestay living
          </p>
          <div className="space-x-4">
            <Link
              to="/homestays/all"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-200"
            >
              Browse Homestays
            </Link>
            <Link
              to="/signup"
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-200"
            >
              Become a Host
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listening;
