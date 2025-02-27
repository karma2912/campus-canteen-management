import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations

// Create a context for the cart and orders
const CartContext = createContext();

// Navbar Component with Hamburger Menu
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Campus Canteen
          </Link>
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {/* Navigation Links */}
          <div
            className={`md:flex space-x-7 ${isMenuOpen ? "block" : "hidden"} md:block`}
          >
            <Link to="/" className="block text-gray-700 hover:text-indigo-600 py-2 md:py-0">
              Home
            </Link>
            <Link to="/menu" className="block text-gray-700 hover:text-indigo-600 py-2 md:py-0">
              Menu
            </Link>
            <Link to="/order" className="block text-gray-700 hover:text-indigo-600 py-2 md:py-0">
              Order
            </Link>
            <Link
              to="/track-order"
              className="block text-gray-700 hover:text-indigo-600 py-2 md:py-0"
            >
              Track Order
            </Link>
            <Link to="/admin" className="block text-gray-700 hover:text-indigo-600 py-2 md:py-0">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Component with Animation
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-indigo-600 text-white py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Campus Canteen</h1>
        <p className="text-xl mb-8">
          Order delicious meals from your campus canteen with just a few clicks!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600"
        >
          Explore Menu
        </motion.button>
      </div>
    </motion.div>
  );
};

// MenuCard Component with Add-to-Cart Animation
const MenuCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000); // Reset animation after 1 second
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">${item.price}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: isAdded ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600"
            onClick={handleAddToCart}
          >
            {isAdded ? "Added!" : "Add to Cart"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      comment: "The food is amazing! I love the variety and the quick delivery.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "Best canteen on campus. The burgers are to die for!",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      comment: "Great service and delicious food. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-100 py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
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

// Home Page with Multiple Sections
const Home = () => {
  const menuItems = [
    {
      id: 1,
      name: "Burger",
      description: "Juicy chicken burger with fresh veggies.",
      price: 5.99,
      image: "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Cheesy pizza with your favorite toppings.",
      price: 8.99,
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    },
    {
      id: 3,
      name: "Pasta",
      description: "Creamy Alfredo pasta with parmesan and herbs.",
      price: 7.49,
      image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    },
    {
      id: 4,
      name: "Sushi",
      description: "Fresh sushi rolls with soy sauce and wasabi.",
      price: 12.99,
      image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
    },
    {
      id: 5,
      name: "Tacos",
      description: "Spicy beef tacos with salsa and guacamole.",
      price: 6.99,
      image: "https://images.pexels.com/photos/105588/pexels-photo-105588.jpeg",
    },
    {
      id: 6,
      name: "Salad",
      description: "Healthy green salad with fresh vegetables.",
      price: 5.49,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
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
      <Testimonials />
    </div>
  );
};

// Menu Page
const Menu = () => {
  const menuCategories = {
    food: [
      { id: 1, name: "Classic Burger", description: "Juicy beef patty with fresh vegetables", price: 8.99, image: "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg" },
      { id: 2, name: "Margherita Pizza", description: "Fresh tomatoes and mozzarella", price: 12.99, image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg" },
      { id: 3, name: "Chicken Pasta", description: "Creamy Alfredo sauce with grilled chicken", price: 10.99, image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg" },
    ],
    beverages: [
      { id: 4, name: "Iced Coffee", description: "Chilled coffee with milk and sugar", price: 4.99, image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" },
      { id: 5, name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.99, image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg" },
      { id: 6, name: "Smoothie Bowl", description: "Mixed berries with Greek yogurt", price: 6.99, image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg" },
    ],
    desserts: [
      { id: 7, name: "Chocolate Cake", description: "Rich chocolate layer cake", price: 5.99, image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" },
      { id: 8, name: "Ice Cream Sundae", description: "Vanilla ice cream with toppings", price: 4.99, image: "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg" },
      { id: 9, name: "Cheesecake", description: "New York style cheesecake", price: 6.99, image: "https://images.pexels.com/photos/5945567/pexels-photo-5945567.jpeg" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("food");

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Menu</h2>
      <div className="flex justify-center mb-8 space-x-4">
        {Object.keys(menuCategories).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === category ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuCategories[selectedCategory].map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// Order Page
const Order = () => {
  const { cart, confirmOrder } = useContext(CartContext);
  const [location, setLocation] = useState("");

  const handleConfirmOrder = () => {
    if (!location) {
      alert("Please enter your delivery location.");
      return;
    }
    confirmOrder(location);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Order</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Confirm Order</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your delivery location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={handleConfirmOrder}
                className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600"
              >
                Confirm Order (Cash on Delivery)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Track Order Page
const TrackOrder = () => {
  const { orders } = useContext(CartContext);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Track Your Order</h2>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Order #{index + 1}</h3>
              <p className="text-gray-600">Status: {order.status}</p>
              <p className="text-gray-600">Location: {order.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Admin Panel
const AdminPanel = () => {
  const { orders, updateOrderStatus } = useContext(CartContext);
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (adminId === "admin" && password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid admin ID or password.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Admin Login</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleLogin}
            className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Admin Panel</h2>
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Order #{index + 1}</h3>
            <p className="text-gray-600">Location: {order.location}</p>
            <p className="text-gray-600">Status: {order.status}</p>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => updateOrderStatus(index, "Cooking")}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Cooking
              </button>
              <button
                onClick={() => updateOrderStatus(index, "Packing")}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Packing
              </button>
              <button
                onClick={() => updateOrderStatus(index, "On the Way")}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg"
              >
                On the Way
              </button>
            </div>
          </div>
        ))}
      </div>
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
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const confirmOrder = (location) => {
    const newOrder = {
      location,
      status: "Order Placed",
    };
    setOrders([...orders, newOrder]);
    setCart([]); // Clear the cart
    alert("Order confirmed! Your order is being processed.");
  };

  const updateOrderStatus = (index, status) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = status;
    setOrders(updatedOrders);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, orders, confirmOrder, updateOrderStatus }}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
};

export default App;