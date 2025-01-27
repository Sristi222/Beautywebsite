import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, Sparkles, Scissors, Heart, Package, Menu, X, Star, StarHalf } from 'lucide-react';

// Opening Animation Component
const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-pink-100 to-purple-100 z-[100] flex items-center justify-center animate-fadeOut">
      <div className="text-center">
        <Sparkles className="h-24 w-24 text-pink-500 animate-spin-slow mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-pink-600 animate-pulse">
          Bella Beauty
        </h1>
      </div>
    </div>
  );
};

// NavBar Component
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center animate-slide-left">
            <Sparkles className="h-8 w-8 text-pink-500 animate-pulse" />
            <span className="ml-2 text-xl font-bold text-gray-900">Bella Beauty</span>
          </div>
          
          <div className="hidden md:flex space-x-8 animate-slide-right">
            <a href="#about" className="text-gray-900 hover:text-pink-500 font-medium transition-all hover:scale-110">About</a>
            <a href="#services" className="text-gray-900 hover:text-pink-500 font-medium transition-all hover:scale-110">Services</a>
            <a href="#products" className="text-gray-900 hover:text-pink-500 font-medium transition-all hover:scale-110">Products</a>
            <a href="#reviews" className="text-gray-900 hover:text-pink-500 font-medium transition-all hover:scale-110">Reviews</a>
            <a href="#booking" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all hover:scale-110 hover:shadow-lg">Book Now</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-pink-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mt-2`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-pink-500 font-medium transition-colors rounded-md hover:bg-pink-50">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-900 hover:text-pink-500 font-medium transition-colors rounded-md hover:bg-pink-50">Services</a>
            <a href="#products" className="block px-3 py-2 text-gray-900 hover:text-pink-500 font-medium transition-colors rounded-md hover:bg-pink-50">Products</a>
            <a href="#reviews" className="block px-3 py-2 text-gray-900 hover:text-pink-500 font-medium transition-colors rounded-md hover:bg-pink-50">Reviews</a>
            <a href="#booking" className="block px-3 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors">Book Now</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => (
  <div className="relative h-screen">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center animate-scale-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      ></div>
    </div>
    <div className="relative h-full flex items-center justify-center z-20">
      <div className="text-center text-white animate-fade-up">
        <h1 className="text-6xl font-bold mb-4">Welcome to Bella Beauty</h1>
        <p className="text-xl mb-8">Experience luxury beauty treatments and premium products</p>
        <a 
          href="#booking" 
          className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-all hover:scale-110 hover:shadow-lg inline-block"
        >
          Book Appointment
        </a>
      </div>
    </div>
  </div>
);

// About Us Component
const AboutUs = () => (
  <section id="about" className="py-20 bg-gradient-to-b from-pink-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-up">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Bella Beauty, we believe in enhancing your natural beauty through our premium services
          and products. With years of experience and a passion for beauty, our team of experts
          is dedicated to providing you with the best beauty experience.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg transform rotate-2 group-hover:rotate-6 transition-transform"></div>
          <div className="relative bg-white p-8 rounded-lg shadow-md hover-scale group-hover:shadow-xl transition-all">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Facial Treatment"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Passion for Beauty</h3>
            <p className="text-gray-600">Dedicated to bringing out your natural beauty</p>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg transform -rotate-2 group-hover:-rotate-6 transition-transform"></div>
          <div className="relative bg-white p-8 rounded-lg shadow-md hover-scale group-hover:shadow-xl transition-all">
            <img
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Expert Team"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <Scissors className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Skilled professionals with years of experience</p>
          </div>
        </div>
        <div className="relative group lg:col-span-1 md:col-span-2 lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg transform rotate-1 group-hover:rotate-4 transition-transform"></div>
          <div className="relative bg-white p-8 rounded-lg shadow-md hover-scale group-hover:shadow-xl transition-all">
            <img
              src="https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Premium Products"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <Sparkles className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
            <p className="text-gray-600">Using only the highest quality beauty products</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Services Component
const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Facial Treatments",
            price: "$80",
            duration: "60 min",
            description: "Rejuvenating facial treatments customized for your skin type",
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Makeup Services",
            price: "$120",
            duration: "90 min",
            description: "Professional makeup application for any occasion",
            image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Hair Styling",
            price: "$65",
            duration: "45 min",
            description: "Cut, color, and styling by expert hairdressers",
            image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Nail Care",
            price: "$40",
            duration: "30 min",
            description: "Manicure and pedicure services with premium products",
            image: "https://images.unsplash.com/photo-1610992015732-2449b0bb0a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Waxing",
            price: "$35",
            duration: "30 min",
            description: "Professional waxing services for all areas",
            image: "https://images.unsplash.com/photo-1570174006382-148305ce4972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Massage",
            price: "$90",
            duration: "60 min",
            description: "Relaxing massage treatments for ultimate comfort",
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
        ].map((service, index) => (
          <div key={index} className="group hover-scale">
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{service.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-500">{service.price}</span>
                  <a
                    href="#booking"
                    className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all hover:shadow-lg"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Products Component
const Products = () => (
  <section id="products" className="py-20 bg-gradient-to-b from-white to-pink-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">Our Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            name: "Luxury Face Cream",
            price: "$89.99",
            description: "Premium anti-aging face cream",
            image: "https://images.unsplash.com/photo-1570194065650-d707c4c48ec4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Natural Serum",
            price: "$59.99",
            description: "Vitamin C enriched facial serum",
            image: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Hair Care Bundle",
            price: "$129.99",
            description: "Complete hair care package",
            image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Beauty Essentials",
            price: "$149.99",
            description: "Premium makeup collection",
            image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
        ].map((product, index) => (
          <div key={index} className="group hover-scale">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <Package className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-500">{product.price}</span>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all hover:shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Reviews Component
const Reviews = () => (
  <section id="reviews" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">Customer Reviews</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Johnson",
            rating: 5,
            comment: "Amazing service! The facial treatment was so relaxing and my skin looks fantastic.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Emily Davis",
            rating: 4.5,
            comment: "Love their products and the staff is always so professional and friendly.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Michelle Thompson",
            rating: 5,
            comment: "Best beauty salon in town! Their makeup service for my wedding was perfect.",
            image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
        ].map((review, index) => (
          <div key={index} className="group hover-scale">
            <div className="bg-pink-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <div className="flex">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    {review.rating % 1 === 0.5 && (
                      <StarHalf className="h-5 w-5 text-yellow-400 fill-current" />
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.comment}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Booking Form Component
const BookingForm = () => (
  <section id="booking" className="py-20 bg-gradient-to-b from-pink-50 to-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">Book an Appointment</h2>
      <form className="bg-white rounded-lg shadow-xl p-8 hover-scale">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-gray-700 mb-2 group-hover:text-pink-500 transition-colors" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              required
            />
          </div>
          <div className="group">
            <label className="block text-gray-700 mb-2 group-hover:text-pink-500 transition-colors" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              required
            />
          </div>
          <div className="group">
            <label className="block text-gray-700 mb-2 group-hover:text-pink-500 transition-colors" htmlFor="service">
              Service
            </label>
            <select
              id="service"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              required
            >
              <option value="">Select a service</option>
              <option value="facial">Facial Treatment</option>
              <option value="makeup">Makeup Service</option>
              <option value="hair">Hair Styling</option>
              <option value="nails">Nail Care</option>
              <option value="waxing">Waxing</option>
              <option value="massage">Massage</option>
            </select>
          </div>
          <div className="group">
            <label className="block text-gray-700 mb-2 group-hover:text-pink-500 transition-colors" htmlFor="date">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              required
            />
          </div>
        </div>
        <div className="mt-6 group">
          <label className="block text-gray-700 mb-2 group-hover:text-pink-500 transition-colors" htmlFor="message">
            Special Requests
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          ></textarea>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition-all hover:scale-105 hover:shadow-lg"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="animate-slide-left">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p className="flex items-center hover:text-pink-400 transition-colors">
              <MapPin className="h-5 w-5 mr-2" />
              123 Beauty Street, City, Country
            </p>
            <p className="flex items-center hover:text-pink-400 transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              +1 234 567 890
            </p>
            <p className="flex items-center hover:text-pink-400 transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              info@bellabeauty.com
            </p>
          </div>
        </div>
        <div className="animate-fade-up">
          <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
          <div className="space-y-2">
            <p className="hover:text-pink-400 transition-colors">Monday - Friday: 9:00 AM - 8:00 PM</p>
            <p className="hover:text-pink-400 transition-colors">Saturday: 10:00 AM - 6:00 PM</p>
            <p className="hover:text-pink-400 transition-colors">Sunday: Closed</p>
          </div>
        </div>
        <div className="animate-slide-right">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-400 transition-all hover:scale-110">Instagram</a>
            <a href="#" className="hover:text-pink-400 transition-all hover:scale-110">Facebook</a>
            <a href="#" className="hover:text-pink-400 transition-all hover:scale-110">Twitter</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center animate-fade-up">
        <p>&copy; {new Date().getFullYear()} Bella Beauty. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main App Component
function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {showAnimation && <OpeningAnimation onComplete={() => setShowAnimation(false)} />}
      <NavBar />
      <Hero />
      <AboutUs />
      <Services />
      <Products />
      <Reviews />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;