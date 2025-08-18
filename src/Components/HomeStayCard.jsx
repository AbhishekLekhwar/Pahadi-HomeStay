import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

const HomeStayCard = ({ homestay }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={homestay.image}
          alt={homestay.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-sm">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span>{homestay.rating}/5</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {homestay.name}
        </h3>
        <p className="text-gray-600 mb-2 text-sm">{homestay.description}</p>

        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="mr-2 text-red-500" />
          <span className="text-sm">{homestay.location}</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <FaRupeeSign className="text-green-600 mr-1" />
            <span className="text-lg font-semibold text-green-600">
              ₹{homestay.price}
            </span>
            <span className="text-sm text-gray-500 ml-1">/night</span>
          </div>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {homestay.priceRange}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Host: {homestay.hostName}
          </span>
          <Link
            to={`/homestay/${homestay.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeStayCard;
