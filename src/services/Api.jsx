// Mock API service for homestay booking platform
// In a real application, this would connect to a backend API

const API_BASE_URL = "http://localhost:3000/api";

// Simulate network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock authentication
export const authService = {
  login: async (email, password) => {
    await delay(1000);
    if (email === "demo@user.com" && password === "password") {
      return {
        user: {
          id: 1,
          name: "Demo User",
          email: "demo@user.com",
          role: "guest",
        },
        token: "mock-jwt-token",
      };
    }
    throw new Error("Invalid credentials");
  },

  signup: async (userData) => {
    await delay(1000);
    return {
      user: {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        role: "guest",
      },
      token: "mock-jwt-token",
    };
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};

// Mock homestay service
export const homestayService = {
  getAllHomestays: async () => {
    await delay(500);
    const { dummyHosts } = await import("../data/dummyHosts.js");
    return dummyHosts;
  },

  getHomestayById: async (id) => {
    await delay(500);
    const { expandedDummyHosts } = await import(
      "../data/expandedDummyHosts.js"
    );
    return expandedDummyHosts.find((h) => h.id === parseInt(id));
  },

  getHomestaysByLocation: async (location) => {
    await delay(500);
    const { dummyHosts } = await import("../data/dummyHosts.js");
    return dummyHosts.filter((h) =>
      h.location.toLowerCase().includes(location.toLowerCase())
    );
  },

  searchHomestays: async (query) => {
    await delay(500);
    const { dummyHosts } = await import("../data/dummyHosts.js");
    return dummyHosts.filter(
      (h) =>
        h.name.toLowerCase().includes(query.toLowerCase()) ||
        h.location.toLowerCase().includes(query.toLowerCase()) ||
        h.description.toLowerCase().includes(query.toLowerCase())
    );
  },

  addHomestay: async (homestayData) => {
    await delay(1000);
    return {
      id: Date.now(),
      ...homestayData,
      rating: 0,
      reviews: [],
    };
  },
};

// Mock booking service
export const bookingService = {
  createBooking: async (bookingData) => {
    await delay(1000);
    return {
      id: Date.now(),
      ...bookingData,
      status: "confirmed",
      bookingDate: new Date().toISOString(),
    };
  },

  getUserBookings: async (userId) => {
    await delay(500);
    return [];
  },

  cancelBooking: async (bookingId) => {
    await delay(500);
    return { success: true };
  },
};

// Mock user service
export const userService = {
  getCurrentUser: () => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },

  setCurrentUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  },

  getToken: () => {
    return localStorage.getItem("token");
  },

  setToken: (token) => {
    localStorage.setItem("token", token);
  },
};
