import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles, HiRocketLaunch, HiClock } from 'react-icons/hi2';
import { FaGooglePlay } from 'react-icons/fa';

// Launch target: 11 September 2026, 00:00:00 IST (+05:30)
const LAUNCH_TARGET_ISO = '2026-09-11T00:00:00+05:30';
const LAUNCH_TARGET_TIME = new Date(LAUNCH_TARGET_ISO).getTime();

export const calculateTimeLeft = () => {
  const now = Date.now();
  const difference = LAUNCH_TARGET_TIME - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isLive: false,
  };
};

const TimeUnitCard = ({ value, label }) => {
  const formattedValue = String(value).padStart(2, '0');

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="group relative flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-slate-900/80 dark:bg-brand-navyDark/90 border border-brand-orange/25 dark:border-brand-orange/30 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5),0_0_20px_-4px_rgba(245,79,27,0.15)] hover:border-brand-orange/60 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.6),0_0_30px_0px_rgba(245,79,27,0.3)] transition-all duration-300 backdrop-blur-md"
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-500 rounded-full" />
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Animated Number Unit */}
      <div className="relative z-10 overflow-hidden h-10 sm:h-14 md:h-16 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={formattedValue}
            initial={{ y: 12, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -12, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tabular-nums tracking-tight drop-shadow-[0_2px_10px_rgba(245,79,27,0.3)]"
          >
            {formattedValue}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Label */}
      <span className="relative z-10 mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-400 group-hover:text-brand-orange transition-colors duration-300">
        {label}
      </span>
    </motion.div>
  );
};

const LaunchCountdown = ({ id = 'countdown' }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      id={id}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-3xl mx-auto my-6 sm:my-8 px-2 sm:px-0"
    >
      <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-950/70 dark:bg-brand-navyDeep/90 border border-brand-orange/20 shadow-[0_0_50px_-10px_rgba(245,79,27,0.15)] backdrop-blur-xl">
        
        {/* Glow corner decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Tag / Badge */}
        <div className="flex flex-col items-center space-y-2 text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest shadow-inner">
            {timeLeft.isLive ? (
              <>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>🚀 Now Live</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <HiRocketLaunch className="w-3.5 h-3.5 text-brand-orange" />
                <span>Launching 11 September 2026</span>
              </>
            )}
          </div>

          <h3 className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight flex items-center justify-center gap-2">
            {timeLeft.isLive ? (
              <span className="gradient-text">🎉 HAajari is Live!</span>
            ) : (
              <>
                <span>HAajari Launches In</span>
              </>
            )}
          </h3>
        </div>

        {/* Timer Box Grid */}
        {timeLeft.isLive ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-8 text-center space-y-4"
          >
            <div className="text-4xl sm:text-5xl font-black text-white gradient-text">
              Welcome to the Future of Construction Management
            </div>
            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
              HAajari is officially live! Start managing your construction sites, workforce attendance, and payroll seamlessly today.
            </p>
            <div className="pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.haajari.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mx-auto inline-flex items-center gap-2 px-8 py-3.5"
              >
                <FaGooglePlay className="w-5 h-5 text-white" />
                <span>Get App on Play Store</span>
              </a>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <TimeUnitCard value={timeLeft.days} label="Days" />
              <TimeUnitCard value={timeLeft.hours} label="Hours" />
              <TimeUnitCard value={timeLeft.minutes} label="Minutes" />
              <TimeUnitCard value={timeLeft.seconds} label="Seconds" />
            </div>
            <div className="text-center pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.haajari.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-white text-xs sm:text-sm font-bold hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/30 transition-all duration-300"
              >
                <FaGooglePlay className="w-4 h-4 text-green-400" />
                <span>Available on Google Play Store</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default LaunchCountdown;
