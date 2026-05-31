import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import EventPlanning from './pages/EventPlanning';
import Catering from './pages/Catering';
import Hospitality from './pages/Hospitality';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          {/* Scroll restoration helper */}
          <ScrollToTop />

          <div className="relative min-h-screen flex flex-col justify-between transition-colors duration-500 bg-slate-50 dark:bg-navy-dark text-navy dark:text-neutral-50 overflow-x-hidden">
            
            {/* Header Navigation */}
            <Navbar />

            {/* Main Application Container */}
            <main className="flex-grow pt-24">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/planning" element={<EventPlanning />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/hospitality" element={<Hospitality />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>

            {/* Premium Outline Footer */}
            <Footer />

            {/* Floating Top Snap button */}
            <ScrollToTopButton />

            {/* Floating WhatsApp contact button */}
            <WhatsAppButton />

          </div>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
