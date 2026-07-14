import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HiUser, HiCalendar, HiOfficeBuilding, HiUsers, 
  HiLightningBolt, HiDocumentReport, HiShieldCheck, 
  HiArrowRight, HiSparkles, HiSupport 
} from 'react-icons/hi';
import { FaBrain } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';

const QuickHelp = () => {
  const navigate = useNavigate();

  const triggerSearch = () => {
    window.dispatchEvent(new CustomEvent('open-search'));
  };

  const quickHelpCategories = [
    {
      title: 'Account & Security',
      desc: 'Set up your contractor profile, configure passwords, and secure payroll access.',
      icon: HiUser,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/30',
      articles: [
        { name: 'How to Sign Up', id: 'how-to-sign-up' },
        { name: 'How to Login', id: 'how-to-login' },
        { name: 'Forgot Password', id: 'forgot-password' },
        { name: 'Two-Factor Auth', id: 'two-factor-authentication' }
      ],
      categorySlug: 'account'
    },
    {
      title: 'Attendance Tracking',
      desc: 'Mark daily attendance, log half days, track overtime hours, and view historical registers.',
      icon: HiCalendar,
      color: 'text-green-500 bg-green-50 dark:bg-green-950/30',
      articles: [
        { name: 'Mark Attendance', id: 'mark-attendance' },
        { name: 'Edit Attendance logs', id: 'edit-attendance' },
        { name: 'Half Day Settings', id: 'half-day' },
        { name: 'Overtime Calculations', id: 'overtime' }
      ],
      categorySlug: 'attendance'
    },
    {
      title: 'Site Management',
      desc: 'Register construction sites, assign supervisors, verify geofencing, and approve material requests.',
      icon: HiOfficeBuilding,
      color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/30',
      articles: [
        { name: 'Create a Site', id: 'create-site' },
        { name: 'Add Supervisor to Site', id: 'add-supervisor' },
        { name: 'Assign Workers to Site', id: 'assign-workers' },
        { name: 'Photo Geofence Check', id: 'photo-verification' }
      ],
      categorySlug: 'site-management'
    },
    {
      title: 'Worker & Wages',
      desc: 'Onboard new workers, configure default rates, log cash advances, and review logs.',
      icon: HiUsers,
      color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/30',
      articles: [
        { name: 'Add New Worker', id: 'add-worker' },
        { name: 'Wage Settings & Rates', id: 'wage-settings' },
        { name: 'Log Cash Advances (Kharchi)', id: 'custom-wage' },
        { name: 'Payment History Ledger', id: 'payment-history' }
      ],
      categorySlug: 'worker-management'
    },
    {
      title: 'Salary & Payouts',
      desc: 'Automatically compute lifetime balances, export pay slips, and generate reports.',
      icon: HiLightningBolt,
      color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/30',
      articles: [
        { name: 'Salary Calculation Engine', id: 'salary-calculation' },
        { name: 'Daily Rate settings', id: 'daily-rate' },
        { name: 'Export Salary Spreadsheet', id: 'export-salary-report' }
      ],
      categorySlug: 'salary'
    },
    {
      title: 'AI Assistant',
      desc: 'Query site attendance, calculate worker totals, and issue voice requests in regional languages.',
      icon: FaBrain,
      color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30',
      articles: [
        { name: 'AI Chat Assistant', id: 'ai-chat' },
        { name: 'AI Regional Voice queries', id: 'voice-assistant' },
        { name: 'AI Privacy & Sandbox', id: 'ai-privacy' }
      ],
      categorySlug: 'ai-assistant'
    },
    {
      title: 'Troubleshooting & Fixes',
      desc: 'Resolve offline sync errors, crashing, camera device locks, and microphone settings.',
      icon: HiSupport,
      color: 'text-red-500 bg-red-50 dark:bg-red-950/30',
      articles: [
        { name: 'App Freezes or Crashes', id: 'app-not-opening' },
        { name: 'Offline Mode & Syncing', id: 'internet-issues' },
        { name: 'Camera Permissions', id: 'camera-permission' }
      ],
      categorySlug: 'troubleshooting'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="space-y-12 animate-fade-in">
      <Breadcrumbs />

      {/* Header Panel */}
      <section className="text-center max-w-3xl mx-auto space-y-5">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider"
        >
          <HiSparkles className="w-4 h-4" />
          <span>Quick Start Portal</span>
        </motion.div>
        
        <h1 className="font-sans font-extrabold text-3xl md:text-5xl text-brand-navy dark:text-white tracking-tight">
          Quick Help Guides
        </h1>
        
        <p className="text-sm md:text-base text-gray-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Access immediate setup checklists and step-by-step guides for everything you need to manage your construction workforce.
        </p>

        {/* Search input link */}
        <div className="pt-2 max-w-md mx-auto">
          <button
            onClick={triggerSearch}
            className="flex items-center justify-between w-full bg-white dark:bg-brand-navyDark border border-gray-200 dark:border-white/5 rounded-2xl py-2.5 px-4 text-gray-400 hover:border-brand-orange/30 transition shadow-sm text-sm"
          >
            <span>Search topics...</span>
            <span className="bg-gray-100 dark:bg-brand-navyDeep px-1.5 py-0.5 rounded text-[10px] font-mono">Ctrl + /</span>
          </button>
        </div>
      </section>

      {/* Quick Help Card Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {quickHelpCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between hover:shadow-premium-hover transition-all duration-300 border border-gray-100/80 dark:border-white/5"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${category.color} shrink-0`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-sans font-bold text-base text-brand-navy dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-400 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {category.desc}
                </p>

                {/* Article lists */}
                <div className="border-t border-gray-100 dark:border-white/5 pt-3.5 space-y-2.5">
                  {category.articles.map((art) => (
                    <button
                      key={art.id}
                      onClick={() => navigate(`/help-center?category=${category.categorySlug}&article=${art.id}`)}
                      className="flex items-center justify-between w-full text-left text-xs font-medium text-gray-600 dark:text-slate-300 hover:text-brand-orange dark:hover:text-white transition group"
                    >
                      <span>{art.name}</span>
                      <HiChevronRight className="w-4 h-4 text-gray-300 group-hover:text-brand-orange group-hover:translate-x-0.5 transition duration-150" />
                    </button>
                  ))}
                </div>
              </div>

              {/* View all link */}
              <div className="pt-5 mt-4 border-t border-gray-50 dark:border-white/5">
                <button
                  onClick={() => navigate(`/help-center?category=${category.categorySlug}`)}
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline focus:outline-none"
                >
                  <span>Explore category</span>
                  <HiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          );
        })}
      </motion.div>

    </div>
  );
};

export default QuickHelp;
