import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  HiFingerPrint, HiOfficeBuilding, HiDocumentReport, HiCurrencyDollar,
  HiMicrophone, HiViewGrid, HiCamera, HiArrowRight, HiMail,
  HiCheckCircle, HiUserAdd, HiBriefcase, HiLocationMarker,
  HiUsers, HiClipboardCheck, HiTrendingUp, HiChartBar, HiSparkles
} from 'react-icons/hi';
import { FaBrain, FaGooglePlay, FaApple } from 'react-icons/fa';
import LaunchCountdown from '../components/LaunchCountdown';
import ThreeBackground from '../components/ThreeBackground';

/* ──────────────────────────── data ──────────────────────────── */

const features = [
  { icon: HiFingerPrint,    title: 'Smart Attendance',     desc: 'One-tap check-in with geofencing, photo proof, and offline sync for remote sites.' },
  { icon: HiOfficeBuilding, title: 'Site Management',      desc: 'Create unlimited sites, assign supervisors, and monitor daily progress in real time.' },
  { icon: FaBrain,          title: 'AI Assistant',          desc: 'Ask anything — get instant answers, voice commands, and smart workforce insights.' },
  { icon: HiDocumentReport, title: 'Reports & Analytics',  desc: 'Auto-generated PDF reports, attendance logs, and exportable dashboards.' },
  { icon: HiCurrencyDollar, title: 'Salary Management',    desc: 'Automated payroll calculations based on attendance, overtime, and advance deductions.' },
  { icon: HiMicrophone,     title: 'Voice Commands',       desc: 'Hands-free operation with voice-powered attendance marking and site queries.' },
  { icon: HiViewGrid,       title: 'Multi-Site Dashboard', desc: 'Unified command center across every project, team, and location — at a glance.' },
  { icon: HiCamera,         title: 'Photo Verification',   desc: 'Identity verification through real-time photo capture — prevent ghost workers.' },
];

const steps = [
  { icon: HiUserAdd,        title: 'Create Account',        desc: 'Sign up in seconds with your phone number or email.' },
  { icon: HiBriefcase,      title: 'Create Company',        desc: 'Set up your company profile with branding and preferences.' },
  { icon: HiLocationMarker, title: 'Add Sites',             desc: 'Register construction sites with geofenced boundaries.' },
  { icon: HiUsers,          title: 'Add Workers',           desc: 'Onboard your workforce with role-based access control.' },
  { icon: HiClipboardCheck, title: 'Mark Attendance',       desc: 'One-tap check-in with photo proof and GPS verification.' },
  { icon: HiTrendingUp,     title: 'Track Site Progress',   desc: 'Monitor daily logs, material usage, and milestones.' },
  { icon: HiChartBar,       title: 'Generate Reports',      desc: 'Export PDF reports for attendance, salary, and site analytics.' },
  { icon: HiSparkles,       title: 'Use AI Assistant',      desc: 'Get smart insights, voice commands, and instant answers.' },
];

const stats = [
  { value: 500,   suffix: '+', label: 'Sites Managed' },
  { value: 10000, suffix: '+', label: 'Workers Tracked' },
  { value: 99.9,  suffix: '%', label: 'Uptime' },
  { value: 50,    suffix: '+', label: 'Features' },
];

/* ──────────────── reusable animation variants ──────────────── */

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ──────────────── AnimatedCounter component ──────────────── */

const AnimatedCounter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const isDecimal = !Number.isInteger(value);
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, value);
      setDisplay(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {isInView ? `${display.toLocaleString()}${suffix}` : `0${suffix}`}
    </span>
  );
};

/* ════════════════════════════════════════════════════════════════
   HOME PAGE COMPONENT
   ════════════════════════════════════════════════════════════════ */

const Home = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setWaitlistSubmitted(true);
      setWaitlistEmail('');
      setTimeout(() => setWaitlistSubmitted(false), 6000);
    }
  };

  return (
    <div className="space-y-0">

      {/* ─────────────────────────── 1. HERO SECTION ─────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">

        {/* 3D Three.js Interactive Particle Canvas */}
        <ThreeBackground />

        {/* Floating gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-orange/20 dark:bg-brand-orange/10 blur-[140px] pointer-events-none animate-float-slow" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-navy/15 dark:bg-brand-navy/20 blur-[160px] pointer-events-none animate-float-delayed" />
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-orange-300/10 dark:bg-orange-500/5 blur-[120px] pointer-events-none animate-float" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              Construction SaaS Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl !leading-[1.1]"
          >
            Construction Management,{' '}
            <span className="gradient-text">Reimagined.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-subheading mx-auto text-base sm:text-lg md:text-xl"
          >
            Attendance, Site Management, Workforce Tracking, AI&nbsp;Assistant, and Reports&nbsp;— all in one platform.
          </motion.p>

          {/* Launch Countdown Component */}
          <LaunchCountdown id="countdown" />

          {/* CTA buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <Link to="/features" className="btn-primary">
              Explore Features
              <HiArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="#waitlist" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Join Waitlist
            </a>
          </motion.div>
        </div>
      </section>

      {/* ──────────────── 2. FEATURE SHOWCASE ──────────────── */}
      <section className="py-24 md:py-32">
        <div className="text-center space-y-4 mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="section-badge">Features</span>
          </motion.div>
          <motion.h2
            className="section-heading"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything You Need to{' '}
            <span className="gradient-text">Build Better</span>
          </motion.h2>
          <motion.p
            className="section-subheading mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powerful tools designed for construction teams — from attendance to AI insights.
          </motion.p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i} variants={fadeUp} className="feature-card">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-brand-navy dark:text-white">{f.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ──────────────── 3. APP SCREENSHOTS GALLERY ──────────────── */}
      <section className="py-24 md:py-32 bg-white/50 dark:bg-[#081424]/30 border-y border-gray-100 dark:border-white/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="section-badge">App Interface</span>
          </motion.div>
          <motion.h2
            className="section-heading"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See Haajari App <span className="gradient-text">in Action</span>
          </motion.h2>
          <motion.p
            className="section-subheading mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our user-friendly interface designed for supervisors and construction teams.
          </motion.p>
        </div>

        {/* 8 Screen Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {[
            { name: 'Dashboard', desc: 'Real-time overview of workforce and site stats.', icon: '📊', color: 'from-blue-500/20 to-cyan-500/10' },
            { name: 'Attendance Screen', desc: 'Tap-to-mark monthly attendance logs.', icon: '📅', color: 'from-emerald-500/20 to-teal-500/10' },
            { name: 'Site Management', desc: 'Geofenced site boundaries & supervisor roles.', icon: '📍', color: 'from-orange-500/20 to-yellow-500/10' },
            { name: 'AI Chat', desc: 'Regional language querying for quick calculations.', icon: '🤖', color: 'from-purple-500/20 to-pink-500/10' },
            { name: 'Reports', desc: 'Daily logs exportable to PDF and Excel.', icon: '📥', color: 'from-indigo-500/20 to-blue-500/10' },
            { name: 'Worker Profile', desc: 'Complete history, rates, and skill classification.', icon: '👤', color: 'from-teal-500/20 to-green-500/10' },
            { name: 'Salary Summary', desc: 'Advance logs and automated wage sheets.', icon: '💰', color: 'from-yellow-500/20 to-orange-500/10' },
            { name: 'Settings Screen', desc: 'Billing details, push alerts, and global access.', icon: '⚙️', color: 'from-slate-500/20 to-zinc-500/10' }
          ].map((scr, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card rounded-2xl p-5 border border-white/5 flex flex-col justify-between hover:border-brand-orange/30 hover:scale-[1.03] transition-all duration-300 text-left cursor-pointer group"
            >
              <div className="space-y-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${scr.color} flex items-center justify-center text-xl`}>
                  {scr.icon}
                </div>
                <h4 className="font-bold text-sm text-brand-navy dark:text-white group-hover:text-brand-orange transition-colors">
                  {scr.name}
                </h4>
                <p className="text-[11px] text-gray-500 dark:text-slate-400 leading-relaxed">
                  {scr.desc}
                </p>
              </div>
              
              <Link 
                to={`/screenshots?tab=${scr.name}`}
                className="text-[10px] font-bold text-blue-500 group-hover:text-brand-orange mt-4 flex items-center gap-1"
              >
                <span>View Mockup</span>
                <HiArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/screenshots" className="btn-outline inline-flex mx-auto">
            <span>Explore Screenshot Room</span>
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* ──────────────── 3. HOW IT WORKS — TIMELINE ──────────────── */}
      <section className="py-24 md:py-32">
        <div className="text-center space-y-4 mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="section-badge">How It Works</span>
          </motion.div>
          <motion.h2
            className="section-heading"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get Started in{' '}
            <span className="gradient-text">8 Simple Steps</span>
          </motion.h2>
          <motion.p
            className="section-subheading mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From sign-up to AI-powered insights — here&rsquo;s how Haajari transforms your workflow.
          </motion.p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange/40 via-brand-orange/20 to-transparent" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-10"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} variants={fadeUp} className="relative flex items-start gap-6 md:gap-8">
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-orange/10 dark:bg-brand-orange/15 border-2 border-brand-orange/30 flex items-center justify-center">
                    <span className="text-brand-orange font-extrabold text-base md:text-lg">{i + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="glass-card rounded-2xl p-5 md:p-6 flex-1 group hover:shadow-premium-hover dark:hover:shadow-premium-dark-hover transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-brand-orange" />
                      <h3 className="font-bold text-base md:text-lg text-brand-navy dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ──────────────── 4. STATS COUNTER ──────────────── */}
      <section className="py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-10 md:p-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm md:text-base text-gray-500 dark:text-slate-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ──────────────── 5. DOWNLOAD / COMING SOON ──────────────── */}
      <section id="waitlist" className="py-24 md:py-32">
        <div className="text-center space-y-4 mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="section-badge">Download</span>
          </motion.div>
          <motion.h2
            className="section-heading"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Coming Soon to{' '}
            <span className="gradient-text">Your Device</span>
          </motion.h2>
          <motion.p
            className="section-subheading mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Be the first to know when Haajari launches on Android and iOS.
          </motion.p>
        </div>

        {/* Store cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14"
        >
          {/* Android */}
          <motion.div variants={fadeUp} className="glass-card rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-5">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/10 flex items-center justify-center">
                <FaGooglePlay className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="font-bold text-lg text-brand-navy dark:text-white">Google Play</h3>
              <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/5 rounded-full px-5 py-2.5">
                <FaGooglePlay className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-semibold text-gray-400">Get it on Google Play</span>
              </div>
              <div className="btn-coming-soon mx-auto w-fit">Coming Soon</div>
            </div>
          </motion.div>

          {/* iOS */}
          <motion.div variants={fadeUp} className="glass-card rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-5">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <FaApple className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-lg text-brand-navy dark:text-white">App Store</h3>
              <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/5 rounded-full px-5 py-2.5">
                <FaApple className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-semibold text-gray-400">Download on App Store</span>
              </div>
              <div className="btn-coming-soon mx-auto w-fit">Coming Soon</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Waitlist form */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-lg mx-auto"
        >
          <form onSubmit={handleWaitlist} className="flex gap-3">
            <div className="relative flex-1">
              <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-white dark:bg-brand-navyDark border border-gray-200 dark:border-white/10 rounded-full py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-gray-800 dark:text-white placeholder-gray-400 transition"
              />
            </div>
            <button type="submit" className="btn-primary shrink-0">
              {waitlistSubmitted ? (
                <>
                  <HiCheckCircle className="w-5 h-5" />
                  Subscribed!
                </>
              ) : (
                'Notify Me'
              )}
            </button>
          </form>
          {waitlistSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-brand-orange font-medium mt-4"
            >
              🎉 You&rsquo;re on the list! We&rsquo;ll notify you as soon as we launch.
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* ──────────────── 6. CTA BANNER ──────────────── */}
      <section className="py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navyDark px-6 py-16 md:py-20 text-center"
        >
          {/* Decorative orbs */}
          <div className="absolute top-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Ready to Transform Your{' '}
              <span className="gradient-text">Workforce Management?</span>
            </h2>
            <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Join hundreds of construction teams already on the waitlist for Haajari.
            </p>
            <a
              href="#waitlist"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex"
            >
              Join Waitlist
              <HiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
