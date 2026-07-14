import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiCloud, HiCurrencyRupee, HiCode, HiDatabase, HiGlobeAlt, HiTerminal, HiArrowRight, HiMap, HiFolderOpen } from 'react-icons/hi';
import { FaBrain, FaBuilding, FaRoad } from 'react-icons/fa';

const About = () => {
  const problems = [
    {
      id: 'fraud',
      title: 'Attendance Fraud',
      description: 'Geofencing boundaries combined with photo verification eliminate proxy attendance and "buddy punching" entirely.',
      icon: HiShieldCheck
    },
    {
      id: 'paperwork',
      title: 'Paper Register Loss',
      description: 'Eliminate torn books and lost cards. All records are securely synced to the cloud, accessible offline on-site.',
      icon: HiCloud
    },
    {
      id: 'disputes',
      title: 'Salary Disputes',
      description: 'Automated wage calculation tracks daily rates, half-days, and overtime in real-time, eliminating wage reconciliation arguments.',
      icon: HiCurrencyRupee
    }
  ];

  const milestones = [
    {
      quarter: 'Q1 2026',
      status: 'Done',
      title: 'Material Requests Launch',
      description: 'Released materials requesting modules allowing supervisors to place material orders directly from sites.'
    },
    {
      quarter: 'Q3 2026',
      status: 'Current',
      title: 'AI Assistant & Regional Voice',
      description: 'Enabling regional language support, voice instructions, and AI analytics to help contractors query salaries verbally.'
    },
    {
      quarter: 'Q4 2026',
      status: 'Upcoming',
      title: 'ERP Integrations',
      description: 'Adding seamless integrations with common accounting software such as Tally and Busy ERP for payroll auto-sync.'
    },
    {
      quarter: 'Q2 2027',
      status: 'Future',
      title: 'Biometric Device Sync',
      description: 'Syncing physical site biometric thumbprint or facial scanners directly into the Haajari cloud database.'
    }
  ];

  const techStack = [
    { name: 'React & Vite', desc: 'Fast, modular frontend interface framework', icon: HiCode },
    { name: 'Tailwind CSS', desc: 'Custom configured utility styles for clean brand appearance', icon: HiTerminal },
    { name: 'Framer Motion', desc: 'Rich fluid animations for user feedback and triggers', icon: FaRoad },
    { name: 'Node.js & Express', desc: 'Highly scalable secure API servers and nodemailer relays', icon: HiDatabase },
    { name: 'MongoDB', desc: 'Flexible worker database structures for offline-first syncing', icon: HiFolderOpen },
    { name: 'AWS Cloud', desc: 'Distributed infrastructure ensuring 99.9% database uptime', icon: HiGlobeAlt }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="bg-brand-grayBg dark:bg-brand-navyDeep transition-colors duration-300 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-badge mb-3">Our Story</span>
          <h1 className="section-heading mb-5">
            Building the Future of <span className="gradient-text">Construction Management</span>
          </h1>
          <p className="section-subheading mx-auto">
            Haajari App was built to bridge the gap between contractor offices and site activities. We digitize worker presence, protect payroll records, and power sites with AI.
          </p>
        </div>

        {/* What is Haajari */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-left"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              What is Haajari App?
            </h2>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              Haajari App is a mobile-first construction management and workforce attendance tool designed to help developers, builders, and contractors track site activities effortlessly. 
            </p>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              By removing traditional paper diaries, Haajari registers geofenced check-ins, calculates salaries, registers material requests, and lets supervisors communicate in local dialects via an offline-first mobile sync model.
            </p>
            <div className="pt-2">
              <Link to="/features" className="btn-primary inline-flex">
                <span>Explore Features</span>
                <HiArrowRight />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-[300px] sm:h-[400px] rounded-3xl bg-gradient-to-br from-brand-orange/20 to-blue-500/10 border border-brand-orange/10 dark:border-white/5 flex items-center justify-center p-8 relative overflow-hidden"
          >
            {/* Visual compositions */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="z-10 flex flex-col items-center gap-4 text-center">
              <span className="w-16 h-16 rounded-2xl bg-brand-orange text-white flex items-center justify-center text-3xl font-extrabold shadow-lg shadow-brand-orange/30">
                H
              </span>
              <div className="flex gap-2">
                <span className="bg-white/90 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">👷 Attendance</span>
                <span className="bg-white/90 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">📍 Geofence</span>
                <span className="bg-white/90 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">🤖 AI Assist</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Problems We Solve */}
        <div className="mb-28 text-center">
          <span className="section-badge mb-3">Problems Solved</span>
          <h2 className="section-heading mb-12 text-brand-navy dark:text-white">Why We Built Haajari</h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {problems.map((prob) => (
              <motion.div
                key={prob.id}
                variants={itemVariants}
                className="feature-card text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
                  <prob.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2">{prob.title}</h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">{prob.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-brand-navy dark:bg-brand-navyDark text-white rounded-3xl p-10 md:p-16 mb-28 grid grid-cols-1 lg:grid-cols-2 gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-bold tracking-widest text-brand-orange uppercase">Our Mission</span>
            <h3 className="text-2xl font-extrabold leading-tight">To empower builders with simple, transparent, offline-first tools that ensure fair records for every worker.</h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
              We design software specifically for the rugged field conditions of construction sites. Our interface operates effortlessly even in low connectivity zones.
            </p>
          </div>

          <div className="space-y-4 text-left border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
            <span className="text-[10px] font-bold tracking-widest text-brand-orange uppercase">Our Vision</span>
            <h3 className="text-2xl font-extrabold leading-tight">To become the global standard for blue-collar workforce management and site analytics.</h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
              We see a future where worker verification, safety log records, material request chains, and daily contractor pay calculations are completely automated and dispute-free.
            </p>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="mb-28 text-center">
          <span className="section-badge mb-3">Roadmap</span>
          <h2 className="section-heading mb-16 text-brand-navy dark:text-white">Future Directions</h2>
          
          <div className="max-w-4xl mx-auto relative border-l border-gray-200 dark:border-white/10 text-left pl-6 sm:pl-8 space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <span className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-brand-grayBg dark:border-brand-navyDeep ${
                  milestone.status === 'Done' ? 'bg-green-500' : milestone.status === 'Current' ? 'bg-brand-orange animate-pulse' : 'bg-gray-400'
                }`}></span>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1.5">
                  <span className="text-xs font-extrabold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded w-max">
                    {milestone.quarter}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    Status: {milestone.status}
                  </span>
                </div>
                <h4 className="text-base font-bold text-brand-navy dark:text-white mb-1">{milestone.title}</h4>
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed max-w-2xl">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20 text-center">
          <span className="section-badge mb-3">Technology Stack</span>
          <h2 className="section-heading mb-12 text-brand-navy dark:text-white">Built on Modern Architecture</h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-brand-orange/30 transition duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center mb-4">
                  <tech.icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-brand-navy dark:text-white mb-1">{tech.name}</h4>
                <p className="text-[11px] text-gray-500 dark:text-slate-400 leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-3xl p-10 md:p-14 max-w-4xl mx-auto shadow-sm">
          <h3 className="text-2xl font-extrabold text-brand-navy dark:text-white mb-2">Want to join our journey?</h3>
          <p className="text-gray-500 dark:text-slate-400 text-xs mb-6 max-w-md mx-auto">
            Contact us for investment enquiries, developer partnerships, or field trial requests.
          </p>
          <Link to="/contact" className="btn-primary inline-flex mx-auto">
            <span>Get in Touch</span>
            <HiArrowRight />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
