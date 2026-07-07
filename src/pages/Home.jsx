import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HiSearch, HiUser, HiCalendar, HiOfficeBuilding, HiUsers, 
  HiCube, HiDocumentReport, HiQuestionMarkCircle, HiChevronDown, 
  HiChevronUp, HiArrowRight, HiLightningBolt
} from 'react-icons/hi';
import { FaBrain } from 'react-icons/fa';
import { faqData } from '../data/faqData';
import { blogsData } from '../data/blogsData';

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // If URL has ?faq=open, open the first FAQ and scroll to it
  useEffect(() => {
    if (searchParams.get('faq') === 'open') {
      setOpenFaqIndex(0);
    }
  }, [searchParams]);

  const triggerSearch = () => {
    window.dispatchEvent(new CustomEvent('open-search'));
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const quickHelpCards = [
    { title: 'Login Help', category: 'account', article: 'how-to-login', icon: HiUser, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/30' },
    { title: 'Attendance Guide', category: 'attendance', article: 'mark-attendance', icon: HiCalendar, color: 'text-green-500 bg-green-50 dark:bg-green-950/30' },
    { title: 'Site Management', category: 'site-management', article: 'create-site', icon: HiOfficeBuilding, color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/30' },
    { title: 'Worker Management', category: 'worker-management', article: 'add-worker', icon: HiUsers, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/30' },
    { title: 'AI Assistant', category: 'ai-assistant', article: 'ai-chat', icon: FaBrain, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30' },
    { title: 'Salary Calculations', category: 'salary', article: 'salary-calculation', icon: HiLightningBolt, color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/30' },
    { title: 'Reports & Exports', category: 'reports', article: 'export-pdf', icon: HiDocumentReport, color: 'text-teal-500 bg-teal-50 dark:bg-teal-950/30' },
  ];

  const popularArticles = [
    { title: 'How to Mark Attendance', category: 'attendance', article: 'mark-attendance', readTime: '3 min read', views: '1.2k views' },
    { title: 'Photo Verification Setup', category: 'site-management', article: 'photo-verification', readTime: '3 min read', views: '980 views' },
    { title: 'Salary Calculation Engine', category: 'salary', article: 'salary-calculation', readTime: '3 min read', views: '840 views' },
    { title: 'Offline Mode & Syncing', category: 'troubleshooting', article: 'internet-issues', readTime: '3 min read', views: '710 views' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="space-y-20">
      
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden py-16 md:py-24 text-center glass-card px-6">
        
        {/* Subtle orange accent glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-navy/10 dark:bg-brand-orange/5 blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
            <span>Official Help Portal</span>
          </motion.div>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-navy dark:text-white leading-tight tracking-tight"
          >
            Welcome to <span className="text-brand-orange">Haajari</span> Support
          </motion.h1>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to manage attendance, construction sites, workforce rosters, salaries, and AI voice assistance.
          </motion.p>

          {/* Interactive Search Bar Triggers Modal */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl mx-auto pt-4"
          >
            <div 
              onClick={triggerSearch}
              className="flex items-center w-full bg-gray-50 hover:bg-gray-100/80 dark:bg-brand-navyDeep dark:hover:bg-brand-navyDeep/80 border border-gray-200 dark:border-white/10 rounded-2xl py-3.5 px-4 cursor-pointer transition shadow-sm group hover:border-brand-orange/30"
            >
              <HiSearch className="w-6 h-6 text-gray-400 mr-3 group-hover:text-brand-orange transition" />
              <span className="text-gray-400 dark:text-slate-400 text-left text-sm md:text-base flex-1">
                Search for guides, errors, categories...
              </span>
              <span className="hidden sm:inline bg-white dark:bg-brand-navyDark border border-gray-200 dark:border-white/10 text-gray-400 dark:text-slate-500 px-2 py-0.5 rounded shadow-sm text-xs font-mono">
                Ctrl + /
              </span>
            </div>
          </motion.div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 pt-6"
          >
            <Link to="/help-center" className="btn-primary">
              Get Started
            </Link>
            <a href="#quick-help" className="btn-secondary">
              Browse Guides
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section id="quick-help" className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-navy dark:text-white">
            Quick Help by Category
          </h2>
          <p className="text-sm text-gray-400 dark:text-slate-400">
            Browse through categorized resources to set up your team account.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4"
        >
          {quickHelpCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card glass-card-hover p-5 rounded-2xl flex flex-col items-center text-center cursor-pointer relative"
                onClick={() => navigate(`/help-center?category=${card.category}&article=${card.article}`)}
              >
                <div className={`p-3.5 rounded-2xl ${card.color} mb-3.5`}>
                  <Icon className="w-6 h-6 shrink-0" />
                </div>
                <h3 className="font-semibold text-xs md:text-sm text-brand-navy dark:text-white">
                  {card.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Grid: Popular Articles & Latest Blog Posts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
        
        {/* Popular Articles */}
        <div className="space-y-6">
          <h2 className="font-sans font-bold text-2xl text-brand-navy dark:text-white">
            Popular Articles
          </h2>
          <div className="space-y-4">
            {popularArticles.map((art, idx) => (
              <div 
                key={idx}
                onClick={() => navigate(`/help-center?category=${art.category}&article=${art.article}`)}
                className="glass-card glass-card-hover p-5 rounded-2xl cursor-pointer flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-brand-orange transition">
                    {art.title}
                  </h3>
                  <div className="flex text-xs text-gray-400 gap-3">
                    <span>{art.readTime}</span>
                    <span>&bull;</span>
                    <span>{art.views}</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-orange/5 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition duration-200">
                  <HiArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Blog Updates */}
        <div className="space-y-6">
          <h2 className="font-sans font-bold text-2xl text-brand-navy dark:text-white flex items-center justify-between">
            <span>Latest Updates</span>
            <Link to="/blog" className="text-sm font-semibold text-brand-orange hover:underline flex items-center gap-1">
              <span>View all</span>
              <HiArrowRight className="w-4.5 h-4.5" />
            </Link>
          </h2>
          <div className="space-y-4">
            {blogsData.slice(0, 2).map((post) => (
              <div 
                key={post.id}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer flex gap-4 p-4 items-center group"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shrink-0" 
                />
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white line-clamp-1 group-hover:text-brand-orange transition">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-slate-400 line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Accordion FAQ Section */}
      <section id="faq-section" className="space-y-8 py-10">
        <div className="text-center space-y-2">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-navy dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-400 dark:text-slate-400">
            Have questions? We have compiled immediate answers below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index} 
                className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between text-gray-800 dark:text-white hover:text-brand-orange focus:outline-none transition duration-150"
                >
                  <span className="font-semibold text-sm md:text-base">{faq.question}</span>
                  {isOpen ? <HiChevronUp className="w-5 h-5 text-brand-orange shrink-0" /> : <HiChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-gray-500 dark:text-slate-300 leading-relaxed border-t border-gray-100/50 dark:border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Home;
