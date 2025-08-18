import React from "react";
import { useParams } from "react-router-dom";
import { dummyHosts } from "../data/dummyHosts";

const HostProfiles = () => {
  const { destinationName } = useParams();

  // Get destination from URL params and decode it
  const destination = destinationName
    ? decodeURIComponent(destinationName)
    : "";

  // Filter hosts based on the destination
  const filteredHosts = dummyHosts.filter((host) =>
    host.location.toLowerCase().includes(destination?.toLowerCase() || "")
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hosts in {destination || "Selected Destination"}
          </h1>
          <p className="text-gray-600">
            Discover amazing hosts and their homestays
          </p>
        </div>

        {filteredHosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hosts found for this destination.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHosts.map((host) => (
              <div
                key={host._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={host.avatar || "https://via.placeholder.com/100"}
                      alt={host.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {host.name}
                      </h3>
                      <p className="text-sm text-gray-600">{host.location}</p>
                      {host.superhost && (
                        <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full mt-1">
                          Superhost
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 text-sm mb-2">{host.bio}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">
                        Response rate: {host.responseRate}%
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Response time: {host.responseTime}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Homestays
                    </h4>
                    <div className="space-y-2">
                      {host.homestays.map((homestay) => (
                        <div key={homestay._id} className="text-sm">
                          <p className="font-medium text-gray-900">
                            {homestay.name}
                          </p>
                          <p className="text-gray-600">
                            ₹{homestay.price}/night
                          </p>
                          <div className="flex items-center mt-1">
                            <span className="text-yellow-500">
                              ⭐ {homestay.rating}
                            </span>
                            <span className="text-gray-500 text-xs ml-1">
                              ({homestay.reviews} reviews)
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HostProfiles;
