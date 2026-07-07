import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiShieldCheck, HiOutlineSparkles, HiClock, HiTrendingUp, 
  HiDatabase, HiDeviceMobile, HiCloud, HiPuzzle
} from 'react-icons/hi';
import Breadcrumbs from '../components/Breadcrumbs';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const techStack = [
    { name: 'React JS & Vite', desc: 'Fast, modern rendering and light bundles.', icon: HiDeviceMobile, color: 'text-sky-500 bg-sky-55/50 dark:bg-sky-950/20' },
    { name: 'Tailwind CSS', desc: 'Clean, utilities-first, responsive layouts.', icon: HiOutlineSparkles, color: 'text-teal-500 bg-teal-55/50 dark:bg-teal-950/20' },
    { name: 'Framer Motion', desc: 'Sleek, physics-based micro-interactions.', icon: HiTrendingUp, color: 'text-brand-orange bg-brand-orange/10' },
    { name: 'Node.js & MongoDB', desc: 'Scalable backend with redundant storage.', icon: HiDatabase, color: 'text-emerald-500 bg-emerald-55/50 dark:bg-emerald-950/20' },
    { name: 'Cloud Infrastructure', desc: 'Hosted securely on AWS with high availability.', icon: HiCloud, color: 'text-blue-500 bg-blue-55/50 dark:bg-blue-950/20' },
    { name: 'Third-Party Sync', desc: 'API connectivity with Tally and QuickBooks.', icon: HiPuzzle, color: 'text-indigo-500 bg-indigo-55/50 dark:bg-indigo-950/20' },
  ];

  const roadmapItems = [
    { date: 'Q1 2026 (Completed)', title: 'Launch of Material Requests', desc: 'Enabled real-time cement, steel, and brick requests with approvals and photo verification.' },
    { date: 'Q3 2026 (Current)', title: 'AI Assistant & Regional Voice', desc: 'Deploying regional voice synthesis (Hindi, Marathi, Telugu) for hands-free queries.' },
    { date: 'Q4 2026 (Upcoming)', title: 'Accountant ERP Integrations', desc: 'One-click sync with standard billing software like Tally and Busy ERP.' },
    { date: 'Q2 2027 (Future)', title: 'Biometric Devices Sync', desc: 'Direct IoT integration with physical on-site fingerprint and facial recognition scanners.' },
  ];

  return (
    <div className="space-y-12">
      <Breadcrumbs />

      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans font-extrabold text-3xl md:text-5xl text-brand-navy dark:text-white tracking-tight"
        >
          Our Story & Vision
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-gray-500 dark:text-slate-400 leading-relaxed"
        >
          Haajari App was built to replace offline paper registers with clean, automated, and secure digital timesheets.
        </motion.p>
      </section>

      {/* Grid: What is Haajari & Problems Solved */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6"
      >
        <motion.div variants={cardVariants} className="glass-card p-8 rounded-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-brand-navy dark:text-white">What is Haajari App?</h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-slate-300 leading-relaxed">
            Haajari App is a comprehensive workforce attendance, site progress, and salary calculation tool. It allows general contractors, developers, and field supervisors to log shifts, track advances (kharchi), and monitor material movements directly from their mobile phones.
          </p>
          <p className="text-sm md:text-base text-gray-500 dark:text-slate-300 leading-relaxed">
            Our goal is to build a high-trust platform that connects the construction office directly with workers in the field, reducing administrative overhead and error margins.
          </p>
        </motion.div>

        <motion.div variants={cardVariants} className="glass-card p-8 rounded-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-brand-navy dark:text-white">Why it was built & Problems Solved</h2>
          <ul className="space-y-3.5 text-sm md:text-base text-gray-500 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <HiShieldCheck className="w-5.5 h-5.5 text-brand-orange shrink-0 mt-0.5" />
              <span><strong>Attendance Proxy:</strong> Geofencing and Photo Verification prevent buddy punching and fake logs.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <HiShieldCheck className="w-5.5 h-5.5 text-brand-orange shrink-0 mt-0.5" />
              <span><strong>Paper Loss:</strong> Traditional diaries get damaged or lost. Haajari stores everything safely on the cloud with offline logging support.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <HiShieldCheck className="w-5.5 h-5.5 text-brand-orange shrink-0 mt-0.5" />
              <span><strong>Disputed Balances:</strong> Real-time logging of wage payments and advances ensures clear balance reconciliation.</span>
            </li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Vision & Mission Banner */}
      <section className="bg-brand-navy text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl dark:bg-brand-navyDark border dark:border-white/5">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-orange/15 blur-[80px]" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-3">
            <h3 className="text-brand-orange text-xs font-bold uppercase tracking-wider">Our Vision</h3>
            <p className="text-base md:text-lg leading-relaxed text-slate-100 font-light">
              To become the global standard platform for blue-collar workforce management, providing workers with verified digital identities, credit histories, and faster payouts.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-brand-orange text-xs font-bold uppercase tracking-wider">Our Mission</h3>
            <p className="text-base md:text-lg leading-relaxed text-slate-100 font-light">
              To empower developers and builders with simple, transparent, and offline-first mobile tools that eliminate operational friction and ensure fair, accurate wages for every worker.
            </p>
          </div>
        </div>
      </section>

      {/* Future Roadmap Timeline */}
      <section className="space-y-8 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-navy dark:text-white">Future Roadmap</h2>
        <div className="relative max-w-3xl mx-auto pl-6 border-l-2 border-brand-orange/30 space-y-8">
          {roadmapItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-white dark:bg-brand-navyDeep border-2 border-brand-orange transition-all duration-300 group-hover:scale-125" />
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-brand-orange">{item.date}</span>
                <h3 className="font-bold text-lg text-brand-navy dark:text-white group-hover:text-brand-orange transition">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-navy dark:text-white">
          Under the Hood: Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl flex items-start gap-4">
                <div className={`p-3 rounded-xl ${tech.color} shrink-0`}>
                  <Icon className="w-5.5 h-5.5 text-brand-navy dark:text-brand-orange" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    {tech.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
