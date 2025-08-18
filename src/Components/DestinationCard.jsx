import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaHome } from "react-icons/fa";
import { completeHomestays } from "../data/completeHomestays";

const DestinationCard = ({ destination }) => {
  // Get actual homestay count from our new data
  const destinationKey = destination.name.toLowerCase().replace(/\s+/g, "");
  const actualHomestayCount = completeHomestays[destinationKey]?.length || 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {destination.name}
        </h3>

        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="mr-2 text-red-500" />
          <span className="text-sm">{destination.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <FaHome className="mr-1 text-blue-600" />
            <span>{actualHomestayCount} homestays available</span>
          </div>
        </div>

        <Link
          to={`/homestays/${destination.name.toLowerCase()}`}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors text-center block"
        >
          Explore {destination.name}
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
