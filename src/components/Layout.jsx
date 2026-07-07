import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiSearch, HiMenu, HiX, HiChevronRight, HiMail, HiDownload } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import SearchModal from './SearchModal';
import BackToTop from './BackToTop';

const Layout = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const location = useLocation();

  // Listen to global open-search event and hotkey trigger (Ctrl+/ or Cmd+/)
  useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    window.addEventListener('open-search', handleOpenSearch);
    
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-search', handleOpenSearch);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
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
    { name: 'About', path: '/about' },
    { name: 'Help Center', path: '/help-center' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Sticky Glassmorphic Navbar */}
      <header className="sticky top-0 z-40 w-full glass-nav transition-all duration-300 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-xl bg-brand-orange flex items-center justify-center text-white font-extrabold text-xl shadow-sm tracking-tighter">
                  H
                </span>
                <span className="font-sans font-bold text-xl md:text-2xl tracking-tight text-brand-navy dark:text-white">
                  Haajari<span className="text-brand-orange">.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-200 hover:text-brand-orange ${
                      isActive
                        ? 'text-brand-orange font-semibold scale-105'
                        : 'text-gray-600 dark:text-slate-300 hover:scale-105'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Control Actions (Theme, Search, CTA, Mobile menu) */}
            <div className="flex items-center gap-3">
              
              {/* Global Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-slate-300 transition duration-200"
                title="Search Docs (Ctrl+/)"
              >
                <HiSearch className="w-5 h-5" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-slate-300 transition duration-200"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? <HiSun className="w-5 h-5 text-amber-400" /> : <HiMoon className="w-5 h-5 text-brand-navy" />}
              </button>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-2">
                <a
                  href="#download"
                  className="btn-primary py-2 px-4 text-xs flex items-center gap-1.5"
                >
                  <HiDownload className="w-3.5 h-3.5" />
                  <span>Download App</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-slate-300 transition duration-200"
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
              className="md:hidden border-t border-gray-100 dark:border-white/5 bg-white dark:bg-brand-navyDeep overflow-hidden shadow-xl"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
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
                <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex flex-col gap-2">
                  <a
                    href="#download"
                    className="btn-primary w-full p-3 rounded-2xl flex justify-center items-center"
                  >
                    <HiDownload className="w-5 h-5 mr-1.5" />
                    <span>Download App</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {children}
      </main>

      {/* Professional Footer */}
      <footer className="bg-white dark:bg-brand-navyDark border-t border-gray-100 dark:border-white/5 py-12 md:py-16 mt-20 no-print transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-14 mb-12">
            
            {/* Column 1: Brand Info & Newsletter */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Link to="/" className="flex items-center gap-2">
                  <span className="w-9 h-9 rounded-xl bg-brand-orange flex items-center justify-center text-white font-extrabold text-xl shadow-sm">
                    H
                  </span>
                  <span className="font-sans font-bold text-xl md:text-2xl tracking-tight text-brand-navy dark:text-white">
                    Haajari<span className="text-brand-orange">.</span>
                  </span>
                </Link>
                <p className="text-sm text-gray-400 dark:text-slate-400 mt-3 max-w-sm">
                  Premium workforce and attendance tracking SaaS built for builders, construction teams, contractors, and supervisors.
                </p>
              </div>

              {/* Newsletter Subscription */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-brand-navy dark:text-white uppercase tracking-wider">
                  Subscribe to product updates
                </h4>
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <div className="relative flex-1">
                    <HiMail className="absolute left-3.5 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-gray-50 border border-gray-200 dark:bg-brand-navyDeep dark:border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-gray-800 dark:text-white placeholder-gray-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary px-5 py-2.5 text-xs font-bold rounded-full shrink-0"
                  >
                    {subscribed ? 'Subscribed!' : 'Join'}
                  </button>
                </form>
                {subscribed && (
                  <p className="text-xs text-brand-orange font-medium animate-pulse">
                    Thank you! You have been successfully added to our mailing list.
                  </p>
                )}
              </div>
            </div>

            {/* Column 2: Products */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-brand-navy dark:text-white uppercase tracking-wider">
                Products
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-500 dark:text-slate-400">
                <li><Link to="/help-center?category=attendance" className="hover:text-brand-orange transition">Attendance Register</Link></li>
                <li><Link to="/help-center?category=site-management" className="hover:text-brand-orange transition">Site Management</Link></li>
                <li><Link to="/help-center?category=salary" className="hover:text-brand-orange transition">Salary & Payouts</Link></li>
                <li><Link to="/help-center?category=ai-assistant" className="hover:text-brand-orange transition">Haajari AI Assistant</Link></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-brand-navy dark:text-white uppercase tracking-wider">
                Support
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-500 dark:text-slate-400">
                <li><Link to="/help-center" className="hover:text-brand-orange transition">Help Center</Link></li>
                <li><a href="/#faq-section" className="hover:text-brand-orange transition">FAQ</a></li>
                <li><Link to="/contact" className="hover:text-brand-orange transition">Contact Support</Link></li>
                <li><a href="#privacy" className="hover:text-brand-orange transition">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-brand-orange transition">Terms of Service</a></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-brand-navy dark:text-white uppercase tracking-wider">
                Resources & Company
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-500 dark:text-slate-400">
                <li><Link to="/about" className="hover:text-brand-orange transition">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-brand-orange transition">Blog & Tutorials</Link></li>
                <li><Link to="/help-center?category=troubleshooting" className="hover:text-brand-orange transition">Troubleshooting</Link></li>
                <li><a href="https://www.haajari.deepitlabs.in" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition">Official Site</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Area */}
          <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
            <div>
              &copy; {new Date().getFullYear()} Haajari App. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 font-medium text-gray-500 dark:text-slate-400">
              <span>Powered by</span>
              <a href="https://deepitlabs.in" target="_blank" rel="noreferrer" className="text-brand-orange hover:underline font-semibold">
                Deep IT Labs
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Global Modals & Utilities */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </div>
  );
};

export default Layout;
