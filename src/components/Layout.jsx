import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiSearch, HiMenu, HiX, HiChevronRight, HiMail, HiDownload, HiSparkles } from 'react-icons/hi';
import { FaGooglePlay } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import BackToTop from './BackToTop';
import { calculateTimeLeft } from './LaunchCountdown';

const Layout = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLive, setIsLive] = useState(() => calculateTimeLeft().isLive);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLive(calculateTimeLeft().isLive);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLaunchBadgeClick = (e) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('countdown');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Scroll detection for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & scroll to top
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
    { name: 'Screenshots', path: '/screenshots' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Sticky Glassmorphic Navbar */}
      <header className={`sticky top-0 z-40 w-full glass-nav transition-all duration-500 no-print ${scrolled ? 'shadow-lg shadow-black/5 dark:shadow-black/20' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2.5 group">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-orange to-orange-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-brand-orange/30 group-hover:shadow-xl group-hover:shadow-brand-orange/40 transition-all duration-300 group-hover:scale-105">
                  H
                </span>
                <span className="font-sans font-bold text-xl md:text-2xl tracking-tight text-brand-navy dark:text-white">
                  Haajari<span className="text-brand-orange">.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-200 relative hover:text-brand-orange ${
                      isActive
                        ? 'text-brand-orange font-semibold'
                        : 'text-gray-600 dark:text-slate-300'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Control Actions */}
            <div className="flex items-center gap-3">
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-slate-300 transition duration-200"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? <HiSun className="w-5 h-5 text-amber-400" /> : <HiMoon className="w-5 h-5" />}
              </button>

              {/* Launch Status / Play Store Button */}
              <div className="hidden md:flex">
                <a
                  href="https://play.google.com/store/apps/details?id=com.haajari.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coming-soon py-2 px-4 text-xs font-bold hover:bg-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-brand-orange/20 flex items-center gap-1.5"
                >
                  <FaGooglePlay className="w-3.5 h-3.5 text-green-500" />
                  <span>{isLive ? '🚀 Now Live' : '🚀 Launching Soon'}</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-slate-300 transition duration-200"
              >
                {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-gray-100 dark:border-white/5 bg-white dark:bg-brand-navyDeep overflow-hidden shadow-xl"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between p-3 rounded-2xl text-base font-medium transition duration-200 ${
                        isActive
                          ? 'bg-brand-orange/10 text-brand-orange'
                          : 'text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <HiChevronRight className="w-4 h-4" />
                  </NavLink>
                ))}
                <div className="pt-3 border-t border-gray-100 dark:border-white/5">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.haajari.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-coming-soon w-full p-3 rounded-2xl flex justify-center items-center gap-2 font-bold cursor-pointer"
                  >
                    <FaGooglePlay className="w-4 h-4 text-green-500" />
                    <span>{isLive ? '🚀 Now Live' : '🚀 Launching Soon'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Professional Footer */}
      <footer className="bg-brand-navy dark:bg-brand-navyDeep text-white py-16 md:py-20 no-print transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 mb-14">
            
            {/* Column 1: Brand Info & Newsletter */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <Link to="/" className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-orange to-orange-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-brand-orange/30">
                    H
                  </span>
                  <span className="font-sans font-bold text-2xl tracking-tight text-white">
                    Haajari<span className="text-brand-orange">.</span>
                  </span>
                </Link>
                <p className="text-sm text-slate-400 mt-4 max-w-sm leading-relaxed">
                  The future of construction workforce and site management. Premium SaaS built for builders, contractors, and supervisors.
                </p>
              </div>

              {/* Newsletter Subscription */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
                  Get product updates
                </h4>
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <div className="relative flex-1">
                    <HiMail className="absolute left-3.5 top-3 w-5 h-5 text-slate-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-white placeholder-slate-500"
                    />
                  </div>
                  <button type="submit" className="bg-brand-orange hover:bg-brand-orange/90 text-white px-5 py-2.5 text-xs font-bold rounded-full shrink-0 transition-all duration-200 hover:scale-105">
                    {subscribed ? '✓ Done!' : 'Join'}
                  </button>
                </form>
                {subscribed && (
                  <p className="text-xs text-brand-orange font-medium animate-pulse">
                    Thanks! You're on our early access list.
                  </p>
                )}
              </div>
            </div>

            {/* Column 2: Product */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Product
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><Link to="/features" className="hover:text-brand-orange transition">Features</Link></li>
                <li><Link to="/features" className="hover:text-brand-orange transition">AI Assistant</Link></li>
                <li><Link to="/features" className="hover:text-brand-orange transition">Site Management</Link></li>
                <li><Link to="/features" className="hover:text-brand-orange transition">Attendance</Link></li>
                <li><Link to="/features" className="hover:text-brand-orange transition">Reports & Analytics</Link></li>
                <li><Link to="/features" className="hover:text-brand-orange transition">Worker Management</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-brand-orange transition">About Us</Link></li>
                <li><a href="https://www.deepitlabs.in/" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition">Deep IT Labs</a></li>
                <li><Link to="/about" className="hover:text-brand-orange transition">Vision</Link></li>
                <li><a href="#careers" className="hover:text-brand-orange transition">Careers</a></li>
                <li><Link to="/contact" className="hover:text-brand-orange transition">Contact Us</Link></li>
                <li><Link to="/privacy" className="hover:text-brand-orange transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-brand-orange transition">Terms & Conditions</Link></li>
                <li><Link to="/delete-account" className="hover:text-brand-orange transition text-red-400 dark:text-red-400">Delete Account</Link></li>
              </ul>
            </div>

            {/* Column 4: Support & Resources */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Support & Resources
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><Link to="/help-center" className="hover:text-brand-orange transition">Help Center</Link></li>
                <li><Link to="/help-center" className="hover:text-brand-orange transition">Documentation</Link></li>
                <li><Link to="/quick-help" className="hover:text-brand-orange transition">FAQ</Link></li>
                <li><Link to="/help-center?category=account&article=how-to-login" className="hover:text-brand-orange transition">Login Help</Link></li>
                <li><Link to="/help-center?category=account&article=how-to-sign-up" className="hover:text-brand-orange transition">Sign In Help</Link></li>
                <li><Link to="/help-center?category=account&article=forgot-password" className="hover:text-brand-orange transition">Forgot Password</Link></li>
                <li><Link to="/help-center?category=troubleshooting" className="hover:text-brand-orange transition">Troubleshooting</Link></li>
                <li><Link to="/blog" className="hover:text-brand-orange transition">Blog & Tutorials</Link></li>
                <li><Link to="/contact" className="hover:text-brand-orange transition">Contact Support</Link></li>
              </ul>
            </div>

            {/* Column 5: Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Website</span>
                  <a href="https://www.haajari.deepitlabs.in" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition font-medium">
                    www.haajari.deepitlabs.in
                  </a>
                </li>
                <li>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Support</span>
                  <a href="tel:+917058222107" className="hover:text-brand-orange transition font-medium">
                    +91 70582 222107
                  </a>
                </li>
                <li>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Sales</span>
                  <a href="tel:+917057942248" className="hover:text-brand-orange transition font-medium">
                    +91 70579 42248
                  </a>
                </li>
                <li>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Email</span>
                  <a href="mailto:support@haajari.deepitlabs.in" className="hover:text-brand-orange transition font-medium">
                    support@haajari.deepitlabs.in
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>
              &copy; {new Date().getFullYear()} Haajari App. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span>Powered by</span>
              <a href="https://www.deepitlabs.in/" target="_blank" rel="noreferrer" className="text-brand-orange hover:underline font-semibold">
                Deep IT Labs
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Global Utilities */}
      <BackToTop />
    </div>
  );
};

export default Layout;
