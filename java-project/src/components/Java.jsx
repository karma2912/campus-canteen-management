import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Campus Canteen
          </Link>
          <div className="flex space-x-7">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-indigo-600">
              Menu
            </Link>
            <Link to="/order" className="text-gray-700 hover:text-indigo-600">
              Order
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div className="bg-indigo-600 text-white py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Campus Canteen</h1>
        <p className="text-xl mb-8">
          Order delicious meals from your campus canteen with just a few clicks!
        </p>
        <button className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600">
          Explore Menu
        </button>
      </div>
    </div>
  );
};

// MenuCard Component
const MenuCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">${item.price}</span>
          <button className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2023 Campus Canteen. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-indigo-500">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-500">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

// Home Page
const Home = () => {
  const menuItems = [
    {
      id: 1,
      name: "Burger",
      description: "Juicy beef burger with fresh veggies.",
      price: 5.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Cheesy pizza with your favorite toppings.",
      price: 8.99,
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Menu Page
const Menu = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Menu</h2>
      <p className="text-gray-600">Explore our delicious offerings.</p>
    </div>
  );
};

// Order Page
const Order = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Place Your Order</h2>
      <p className="text-gray-600">Order your favorite meals here.</p>
    </div>
  );
};

// About Page
const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
      <p className="text-gray-600">Learn more about our canteen.</p>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;