import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "../Components/DestinationCard";
import SearchBar from "../Components/SearchBar";
import { destinations } from "../data/destinations";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);

    if (!searchTerm.trim()) {
      setFilteredDestinations(destinations);
      return;
    }

    // Filter destinations based on search term
    const searchLower = searchTerm.toLowerCase();
    const matchedDestinations = destinations.filter(
      (destination) =>
        destination.name.toLowerCase().includes(searchLower) ||
        destination.location.toLowerCase().includes(searchLower)
    );

    // If we have matches, put them at the top, otherwise show all
    if (matchedDestinations.length > 0) {
      // Create a new array with matched destinations first
      const sortedDestinations = [
        ...matchedDestinations,
        ...destinations.filter(
          (destination) =>
            !matchedDestinations.some(
              (matched) => matched.id === destination.id
            )
        ),
      ];
      setFilteredDestinations(sortedDestinations);
    } else {
      setFilteredDestinations(destinations);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/assets/uttarakhand.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover Your Perfect Homestay
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Experience authentic Uttarakhand hospitality in the heart of the
              Himalayas
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Featured Destinations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Popular Destinations
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-4 animate-pulse"
              >
                <div className="h-48 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        )}
      </div>

      {/* About Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Uttarakhand Homestays?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the authentic charm of Uttarakhand with our carefully
              curated collection of homestays. From the misty mountains of
              Mussoorie to the serene lakes of Nainital, discover the perfect
              blend of comfort and local culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Authentic Experiences
              </h3>
              <p className="text-gray-600">
                Stay with local families and experience the true culture of
                Uttarakhand
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comfortable Stays</h3>
              <p className="text-gray-600">
                Handpicked homestays with modern amenities and warm hospitality
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with no hidden fees
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 opacity-90">
            Find your perfect homestay in Uttarakhand today
          </p>
          <Link
            to="/homestays/all"
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Browse All Homestays
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
