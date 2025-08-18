import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      if (onSearch) {
        onSearch(location.trim());
      } else {
        navigate(`/homestays/${location.toLowerCase()}`);
      }
    }
  };

  const popularDestinations = [
    "Mussoorie",
    "Nainital",
    "Auli",
    "Rishikesh",
    "Jim Corbett",
    "Almora",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaMapMarkerAlt className="inline mr-2" />
              Search Destination
            </label>
            <input
              type="text"
              placeholder="Where are you going?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              list="destinations"
            />
            <datalist id="destinations">
              {popularDestinations.map((dest) => (
                <option key={dest} value={dest} />
              ))}
            </datalist>
          </div>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <FaSearch className="mr-2" />
          Search Destinations
        </button>
      </form>

      {/* Popular Destinations Quick Links */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">Popular destinations:</p>
        <div className="flex flex-wrap gap-2">
          {popularDestinations.map((dest) => (
            <button
              key={dest}
              onClick={() => {
                setLocation(dest);
                onSearch(dest);
              }}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {dest}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
