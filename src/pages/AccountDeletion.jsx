import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HiOutlineUserRemove, HiOutlineMail, HiOutlinePhone, HiOutlineOfficeBuilding, HiOutlineShieldExclamation, HiOutlineCheckCircle, HiOutlineChevronLeft } from 'react-icons/hi';
import axios from 'axios';

const AccountDeletion = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    reason: 'No longer using the app',
    message: '',
    confirm: false
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.confirm) {
      setStatus({ submitting: false, success: false, error: 'You must confirm the deletion consent checkbox.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      // Connect to the local Express/Nodemailer backend
      const response = await axios.post('/api/delete-account', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        reason: formData.reason,
        message: formData.message
      });

      if (response.data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          reason: 'No longer using the app',
          message: '',
          confirm: false
        });
      }
    } catch (err) {
      console.error(err);
      const errMsg = err.response?.data?.error || 'Failed to submit account deletion request. Please try again later or contact support directly.';
      setStatus({ submitting: false, success: false, error: errMsg });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-navyDeep transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8 text-left">
      <Helmet>
        <title>Account Deletion Request — Haajari Manager</title>
        <meta name="description" content="Request permanent deletion of your Haajari Manager account and related operational workforce logs in compliance with Google Play Store data safety guidelines." />
      </Helmet>

      <div className="max-w-[700px] mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400 transition"
          >
            <HiOutlineChevronLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 mb-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-orange-500/20">
              H
            </span>
            <span className="font-sans font-bold text-lg text-slate-800 dark:text-white">
              Haajari Manager
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight mb-3 flex items-center gap-2">
            <HiOutlineUserRemove className="w-8 h-8 text-red-500" />
            <span>Account Deletion Request</span>
          </h1>
          
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            In compliance with Google Play Store Data Safety requirements, you can submit a request to permanently delete your Haajari Manager user profile, company registry, sites, and worker rosters. Once submitted, our legal and compliance team will review and fulfill your request within 7 business days.
          </p>
        </div>

        {/* Success Alert */}
        {status.success && (
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 rounded-3xl p-6 mb-8 text-emerald-800 dark:text-emerald-300 flex items-start gap-3">
            <HiOutlineCheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm">Deletion Request Received</h3>
              <p className="text-xs mt-1 leading-relaxed">
                Your request has been submitted successfully. A verification link and ticket confirmation will be processed to your registered email address. All active credentials will be retired once processed.
              </p>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {status.error && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/80 rounded-3xl p-6 mb-8 text-red-800 dark:text-red-300 flex items-start gap-3">
            <HiOutlineShieldExclamation className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm">Submission Error</h3>
              <p className="text-xs mt-1 leading-relaxed">{status.error}</p>
            </div>
          </div>
        )}

        {/* Deletion Form Card */}
        {!status.success && (
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                    Registered Full Name *
                  </label>
                  <div className="relative">
                    <HiOutlineUserRemove className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                    Registered Mobile Number *
                  </label>
                  <div className="relative">
                    <HiOutlinePhone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                    Registered Email Address *
                  </label>
                  <div className="relative">
                    <HiOutlineMail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. rajesh@company.com"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                    Company Profile Name (Optional)
                  </label>
                  <div className="relative">
                    <HiOutlineOfficeBuilding className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Sharma Builders Ltd"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Deletion Reason Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                  Reason for Deletion
                </label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 dark:text-white"
                >
                  <option value="No longer using the app">No longer using the app</option>
                  <option value="Switching to another platform">Switching to another platform</option>
                  <option value="Project completed">Project completed</option>
                  <option value="Security or privacy concerns">Security or privacy concerns</option>
                  <option value="Technical issues or bugs">Technical issues or bugs</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                  Additional Details / Feedback (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Please let us know how we could improve."
                  className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 dark:text-white"
                />
              </div>

              {/* Warnings and Consent Checkbox */}
              <div className="bg-red-50/50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 p-5 rounded-2xl space-y-3">
                <h4 className="flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase tracking-wide">
                  <HiOutlineShieldExclamation className="w-4 h-4" />
                  <span>Important Legal Warning</span>
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  By submitting this request, you authorize our technical support team to purge your account records, including geofenced coordinates, photos, supervisor connections, wage entries, and attendance logs. <strong>This operation is permanent and cannot be reversed.</strong>
                </p>
                <label className="flex items-start gap-2.5 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    name="confirm"
                    checked={formData.confirm}
                    onChange={handleInputChange}
                    className="w-4.5 h-4.5 accent-orange-500 rounded border-slate-300 mt-0.5"
                  />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 select-none">
                    I confirm that I wish to permanently delete my account and purge all associated database logs. *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold rounded-full py-3.5 text-sm transition-all duration-300 shadow-md shadow-red-500/10 hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status.submitting ? 'Processing Request...' : 'Confirm Account Deletion'}
              </button>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountDeletion;
