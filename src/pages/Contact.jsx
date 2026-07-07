import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
  HiPhone, HiMail, HiGlobeAlt, HiLocationMarker, 
  HiPaperAirplane, HiSparkles, HiCheckCircle, HiExclamationCircle 
} from 'react-icons/hi';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });

    try {
      // Simulate form submission to a real endpoint or handle via mock Axios response
      // We will post to a placeholder JSON endpoint to verify Axios works 100%
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Haajari Help Center Contact Submission',
        body: formData
      });

      if (response.status === 201 || response.status === 200) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully. Our support team will contact you shortly.'
        });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Server returned an unexpected status code.');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Could not send message. Please verify your internet connection and try again.'
      });
    }
  };

  return (
    <div className="space-y-8">
      <Breadcrumbs />

      {/* Header Info */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans font-extrabold text-3xl md:text-5xl text-brand-navy dark:text-white tracking-tight"
        >
          Contact Support & Sales
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-gray-500 dark:text-slate-400"
        >
          Get in touch with our team for account setup, premium integrations, and custom solutions.
        </motion.p>
      </section>

      {/* Contact Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-4">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-card p-6 md:p-8 rounded-3xl space-y-6">
            <h2 className="text-xl font-bold text-brand-navy dark:text-white flex items-center gap-1.5">
              <HiSparkles className="w-5 h-5 text-brand-orange" />
              <span>Company Information</span>
            </h2>
            
            <div className="space-y-4">
              
              {/* Phone Contacts */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange shrink-0">
                  <HiPhone className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Support</h4>
                  <p className="text-sm font-semibold text-gray-700 dark:text-slate-200 mt-1">
                    Support: <a href="tel:+9170582222107" className="hover:text-brand-orange transition">+91 70582 222107</a>
                  </p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-slate-200">
                    Sales: <a href="tel:+917057942248" className="hover:text-brand-orange transition">+91 70579 42248</a>
                  </p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange shrink-0">
                  <HiMail className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Inquiry</h4>
                  <p className="text-sm font-semibold text-gray-700 dark:text-slate-200 mt-1">
                    <a href="mailto:support@haajari.deepitlabs.in" className="hover:text-brand-orange transition">
                      support@haajari.deepitlabs.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange shrink-0">
                  <HiGlobeAlt className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Official Website</h4>
                  <p className="text-sm font-semibold text-gray-700 dark:text-slate-200 mt-1">
                    <a href="https://haajari.deepitlabs.in" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition">
                      www.haajari.deepitlabs.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Head Office Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange shrink-0">
                  <HiLocationMarker className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Office Location</h4>
                  <p className="text-sm font-semibold text-gray-700 dark:text-slate-200 mt-1">
                    Deep IT Labs, Pune, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social media connections */}
            <div className="pt-6 border-t border-gray-100 dark:border-white/5 space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Connect With Us</h4>
              <div className="flex items-center gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-500/10 text-pink-500 hover:bg-pink-500 hover:text-white flex items-center justify-center transition duration-200"
                  title="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition duration-200"
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-red-65/10 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition duration-200"
                  title="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Google Maps Placeholder */}
          <div className="glass-card rounded-3xl overflow-hidden h-60 relative group shadow-sm border border-gray-100 dark:border-white/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360341774!2d73.79222627914902!3d18.52460359740523!2m3!1f0!2f0!3f0!3m2!1i1020!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828a43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714578980123!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Haajari Office Map Pune"
              className="grayscale contrast-125 dark:invert dark:opacity-80 transition duration-300"
            />
          </div>

        </div>

        {/* Right Side: Form details */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 md:p-8 rounded-3xl space-y-6">
            <div>
              <h2 className="text-xl font-bold text-brand-navy dark:text-white">Send us a Message</h2>
              <p className="text-xs text-gray-400 mt-1">
                Fill out the form below, and our representatives will reach out in 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-600 dark:text-slate-300">
                    Full Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 border border-gray-200 dark:bg-brand-navyDeep dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange text-gray-800 dark:text-white placeholder-gray-400"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label htmlFor="company" className="text-xs font-semibold text-gray-600 dark:text-slate-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="w-full bg-gray-50 border border-gray-200 dark:bg-brand-navyDeep dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange text-gray-800 dark:text-white placeholder-gray-400"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Email Address */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-600 dark:text-slate-300">
                    Email Address <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-gray-50 border border-gray-200 dark:bg-brand-navyDeep dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange text-gray-800 dark:text-white placeholder-gray-400"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-semibold text-gray-600 dark:text-slate-300">
                    Phone Number <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your 10-digit number"
                    className="w-full bg-gray-50 border border-gray-200 dark:bg-brand-navyDeep dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange text-gray-800 dark:text-white placeholder-gray-400"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-gray-600 dark:text-slate-300">
                  Message <span className="text-brand-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="How can we help you? Describe your requirements..."
                  className="w-full bg-gray-50 border border-gray-200 dark:bg-brand-navyDeep dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange text-gray-800 dark:text-white placeholder-gray-400"
                />
              </div>

              {/* Response Status Card */}
              {status.message && (
                <div className={`p-4 rounded-2xl flex items-start gap-2.5 text-xs font-medium ${
                  status.success 
                    ? 'bg-green-50 border border-green-200 text-green-700 dark:bg-green-950/20 dark:border-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-700 dark:bg-red-950/20 dark:border-red-800'
                }`}>
                  {status.success ? <HiCheckCircle className="w-5 h-5 shrink-0" /> : <HiExclamationCircle className="w-5 h-5 shrink-0" />}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="btn-primary w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold focus:outline-none"
              >
                {status.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <HiPaperAirplane className="w-4 h-4 rotate-45" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;
