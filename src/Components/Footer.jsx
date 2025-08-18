import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Uttarakhand Homestays
            </h3>
            <p className="text-gray-300 text-sm">
              Discover the beauty of Uttarakhand with our curated collection of
              authentic homestays. Experience local culture, warm hospitality,
              and breathtaking landscapes.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/homestays/all"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Browse Homestays
                </Link>
              </li>
              <li>
                <Link
                  to="/listening"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Host Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/homestays/mussoorie"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Mussoorie
                </Link>
              </li>
              <li>
                <Link
                  to="/homestays/nainital"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Nainital
                </Link>
              </li>
              <li>
                <Link
                  to="/homestays/auli"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Auli
                </Link>
              </li>
              <li>
                <Link
                  to="/homestays/rishikesh"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Rishikesh
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="h-4 w-4 mr-2 text-gray-300" />
                <span className="text-gray-300 text-sm">
                  Dehradun, Uttarakhand, India
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-4 w-4 mr-2 text-gray-300" />
                <span className="text-gray-300 text-sm">+91-9876543210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 mr-2 text-gray-300" />
                <span className="text-gray-300 text-sm">
                  info@uttarakhandhomestays.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; 2024 Uttarakhand Homestays. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-white text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
